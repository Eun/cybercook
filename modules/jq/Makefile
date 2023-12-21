all:
	docker build -t jq-web-builder:latest .
	docker run --rm -v $(CURDIR):/out jq-web-builder:latest
