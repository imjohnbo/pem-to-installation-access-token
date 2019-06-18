# PEM to Installation Access Token

## Purpose
Get a GitHub Installation Access Token for a given PEM, App ID, and Installation ID.

## Installation via GitHub Package Registry
1. Configure NPM for use with GPR ([link](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#installing-a-package))
2. `npm i @imjohnbo/pem-to-installation-access-token`

## Usage
```javascript
const converter = require('@imjohnbo/pem-to-installation-access-token');

const pem = `my-pem-here`;
const appId = my-app-id-here;
const installationId = my-installation-id-here;
const id = await converter.convert(pem, appId, installationId);

console.log(id);
```

## Other

This repo publishes to the [GitHub Package Registry](https://github.com/features/package-registry) using [GitHub Actions](https://github.com/features/actions).
