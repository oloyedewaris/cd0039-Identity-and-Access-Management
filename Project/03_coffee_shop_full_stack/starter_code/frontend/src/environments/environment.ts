/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'waris-coffee-shop.eu.auth0.com', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: 'i4Idfvn9CUAuBQE3KYLpY6dfLYJ6HiX5', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};

//https://waris-coffee-shop.eu.auth0.com/authorize?audience=coffee&response_type=token&client_id=i4Idfvn9CUAuBQE3KYLpY6dfLYJ6HiX5&redirect_uri=https://127.0.0.1:8080/login-results
