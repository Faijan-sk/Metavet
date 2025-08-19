// ** Auth Endpoints
export default {
  loginEndpoint: '/api/lgn/',
  registerEndpoint: '/auth/register',
  otpVerifyEndPoint: '/auth/otp/verify-otp',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
