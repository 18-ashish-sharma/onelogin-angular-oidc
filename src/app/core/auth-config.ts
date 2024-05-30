import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://performance-tdd.onelogin.com/oidc/2',
  clientId: '051fa080-0088-013d-96bd-1a712f5acee1237923',
  redirectUri: window.location.origin + '/index.html',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  postLogoutRedirectUri: window.location.origin + '/index.html',
  responseType: 'code',
  scope: 'openid profile email',
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
  strictDiscoveryDocumentValidation: false,
  oidc: true,
  dummyClientSecret:
    '7df1c894e14a4723646e8649114d507cc3cdcf0f1f5416f6010ba251e82fc097',
};
