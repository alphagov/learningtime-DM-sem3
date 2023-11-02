.PHONY: clean build lint test coverage

NODE_VERSION_SUPPORTED := >=20.0.0
NODE_VERSION=$(shell node -v)

clean:
	rm -rf ./dist ./coverage

build:
	$(info Node version supported: $(NODE_VERSION_SUPPORTED))
	$(info Node version installed: $(NODE_VERSION))
	npm ci --silent
	npm run build

start:
	npm run start
coverage:
	npm run coverage