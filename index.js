const { App } = require('@octokit/app');
const fetch = require('node-fetch');

const convert = async (pem, appId, installationId) => {
    const jwt = pemToJwt(pem, appId);
    const installationAccessToken = await jwtToInstallationAccessToken(jwt, installationId);
    return installationAccessToken;
};

const pemToJwt = (pem, appId) => {
    const app = new App({ id: appId, privateKey: pem });
    const jwt = app.getSignedJsonWebToken();
    return jwt;
};

const jwtToInstallationAccessToken = async (jwt, installationId) => {
    const installationAccessToken = await getInstallationAccessToken(jwt, installationId);
    return installationAccessToken;
};

const getInstallationAccessToken = async (jwt, installationToken) => {
    return fetch(`https://api.github.com/app/installations/${installationToken}/access_tokens`, {
      method: 'post',
      headers: {
          'Accept': 'application/vnd.github.machine-man-preview+json', 
          'Authorization': `Bearer ${jwt}`
        }
    })
    .then(data => data.json())
    .catch(err => {
      Promise.reject(err);
    });
};

module.exports = {
    convert: convert
};
