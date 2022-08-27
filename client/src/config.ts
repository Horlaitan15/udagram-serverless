// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '9cqlkuwva8'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-0bd4asnh.us.auth0.com',            // Auth0 domain
  clientId: 'duv4qHg4zhUpmJgbdO1JQlLUeA0zpWhM',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
