DOCKER_IMG=cypress/browsers:node14.0.0-chrome84

install:
	@docker run --rm -i -t -w /app -v ${PWD}:/app ${DOCKER_IMG} npm install

cli:
	@docker run --rm -i -t -w /app -v ${PWD}:/app ${DOCKER_IMG} bash

serve:
	@docker run --rm -i -t -w /app -v ${PWD}:/app -p 8080:8080 ${DOCKER_IMG} npx parcel serve --port 8080 --dist-dir test/.parcel --cache-dir test/.parcel test/app/index.html

build:
	@docker run --rm -i -t -w /app -v ${PWD}:/app ${DOCKER_IMG} npx parcel build
