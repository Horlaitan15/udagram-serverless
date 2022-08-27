// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBmUmtxZmFXYzRKck0zNlhHQVhSbiJ9.eyJpc3MiOiJodHRwczovL2Rldi0wYmQ0YXNuaC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjMwNDkyMzY5MTQzNzIyY2ZjZTQ3OGJkIiwiYXVkIjoiZHV2NHFIZzR6aFVwbUpnYmRPMUpRbExVZUEwenBXaE0iLCJpYXQiOjE2NjE2MTAyOTUsImV4cCI6MTY2MTY0NjI5NSwiYXRfaGFzaCI6InRRb2ZaNHZseVBORThPTlJBeW1jQmciLCJzaWQiOiJBUlBJZGZfOWtYWkZwamJHNXlUWnBBelZHNmgwU0szcyIsIm5vbmNlIjoiSXlmcXByZjY5eTJJVXVkVEhxcVFQMF9FY3pkY0FaaEUifQ.beFH88VuyKDEDf-STJcU4gNjMVtjk_VYLJ4mWCjGvfbWD2lGjKS2GGzqk176LWMWw12uYVgGkJHfP-URn0BIIr_SItdqFZf81wWQzcS1vfJeRKtJzFEz97KfccDc50G9h-8eC-owKpMKoXx_hjTp1TMU0xGsCvhGrarVs0GyaCclXzdaDDvQ2dAp26c_Z8IbJdaG8jyzaGVBeNrf_pWQK9FvwmI_EOKR213YYSkbQy10pRtN5ZhFWEe5zfGVCp4Vv7KuHrQeI7TZxINFr_5rYDzfSk8IUlWApaoDIJKWax3pxooqI-2obnEc-Zba3qjXA4qoDQQBj8D_E-_VCAGlnA'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-0bd4asnh.us.auth0.com',            // Auth0 domain
  clientId: 'duv4qHg4zhUpmJgbdO1JQlLUeA0zpWhM',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
