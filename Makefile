.PHONY: build

build:
	stack build
	cp -r .stack-work/dist/x86_64-linux/Cabal-2.0.1.0/build/randomNameGenerator/randomNameGenerator twitterbot-lambda
	cd twitterbot-lambda
	npm install
	zip -r twitterbot-lambda.zip .
	rm twitterbot-lambda/randomNameGenerator
	rm twitterbot-lambda/twitterbot.zip
