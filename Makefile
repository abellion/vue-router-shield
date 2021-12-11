install:
	@docker run --rm -i -t -w /app -v ${PWD}:/app node:14-slim npm install

cli:
	@docker run --rm -i -t -w /app -v ${PWD}:/app node:14-slim bash

serve:
	@docker run --rm -i -t -p 8080:8080 -w /app -v ${PWD}:/app node:14-slim npx parcel serve --port 8080 --dist-dir test/__build__ --cache-dir test/__cache__ test/app/index.html
