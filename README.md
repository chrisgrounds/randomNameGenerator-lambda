# RandomNameGenerator On AWS Lambda

This is a random name generator written in Haskell deployed to AWS Lambda.

You will need [Stack](https://docs.haskellstack.org/en/stable/README/#how-to-install) to build and run locally.

## Usage

```
stack build
cp -r .stack-work/dist/x86_64-linux-nopie/Cabal-2.0.1.0/build/randomNameGenerator/randomNameGenerator twitterbot-lambda
cd twitterbot-lambda
npm install 
zip -r twitterbot-lambda.zip .
```

Then upload the twitterbot-lambda directory to your AWS lambda.

