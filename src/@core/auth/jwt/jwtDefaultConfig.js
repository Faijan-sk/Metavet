// ** Auth Endpoints
export default {

  /*
  * user EendPoints 
  */
  registerEndpoint: '/auth/register',
  loginEndpoint: '/auth/login',
  otpVerifyEndPoint: '/auth/otp/verify-otp',

  /*
  * Doctor EndPoints
  */
 updateDpctorEndPoint: 'api/doctors/user',
 getDoctorEndPoint : 'api/doctors/available',
 getAllDoctorEndPoint : 'api/doctors/available',
 getDoctorBySpecialityEndPoint:'api/doctors/specialization',
 getAllSpecializationEndPoint : 'api/doctors/specializations/available',
 getActiveSpecializationEndPoint : 'api/doctors/specializations/active',





  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
