import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Request, Response } from 'express';
import * as config from '../config';

const s3Client = new S3Client({
    region: 'eu-north-1',
    credentials: {
        accessKeyId: config.ACCESS_KEY_ID!,
        secretAccessKey: config.YOUR_SECRET_ACC_KEY!
    }
});

export const uploadImage = async (req: Request, res: Response) => {
    console.log(req.file);
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded');
    }
    try {
        const result = await uploadFileToS3(file);
        res.render(config.SUCCESS_PAGE, { imageUrl: result.url });
    } catch (error) {
        res.status(500).send('Error uploading file');
    }
};

type UploadResult = {
    url: string;
};

const uploadFileToS3 = async (file: Express.Multer.File): Promise<UploadResult> => {
    const params = {
        Bucket: config.BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype
    };

    await s3Client.send(new PutObjectCommand(params));

    const url = await getSignedUrl(
        s3Client,
        new GetObjectCommand({
            Bucket: config.BUCKET_NAME,
            Key: file.originalname
        }),
        { expiresIn: 3600 }
    );
    return { url };
};
