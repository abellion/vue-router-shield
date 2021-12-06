install:
	@docker run --rm -i -t -w /app -v ${PWD}:/app node:14-slim npm install

cli:
	@docker run --rm -i -t -w /app -v ${PWD}:/app node:14-slim bash
