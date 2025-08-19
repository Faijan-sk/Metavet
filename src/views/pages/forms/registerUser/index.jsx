import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const index = ({ onSubmit, onSwitchToLogin, onClose }) => {
  const [userType, setUserType] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      firstName: 'Rohit',
      lastName: 'Sonawane',
      countryCode: '+91',
      phoneNumber: '1234567890',
      email: 'rohit@gmail.com',
      userType: 0,
    },
  })

  // Watch userType changes
  const watchedUserType = watch('userType')

  useEffect(() => {
    setUserType(watchedUserType)
  }, [watchedUserType])

  // Handle user type button click
  const handleUserTypeClick = (typeId) => {
    setValue('userType', typeId)
    setUserType(typeId)
    clearErrors('userType')
  }

  // Handle form submission with userType validation
  const handleFormSubmit = (data) => {
    if (
      !data.userType ||
      data.userType === '' ||
      data.userType === null ||
      data.userType === undefined
    ) {
      setError('userType', {
        type: 'required',
        message: 'Please select a user type before signing up',
      })
      return
    }

    console.table('the information in the Form ', data)
    onSubmit(data)
  }

  const userTypes = [
    {
      id: 1,
      label: 'Client',
      icon: '👤',
      description: 'Pet owner seeking services',
    },
    {
      id: 2,
      label: 'Doctor',
      icon: '👨‍⚕️',
      description: 'Veterinary professional',
    },
    {
      id: 3,
      label: 'Groomer',
      icon: '✂️',
      description: 'Pet grooming specialist',
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Metavet</h2>
        <p className="text-gray-600 text-sm">
          Create your account to get started
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* User Type Selection */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            I am a...
          </label>

          <input
            type="hidden"
            {...register('userType')}
            value={userType || ''}
          />

          <div className="grid grid-cols-1 gap-3">
            {userTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => handleUserTypeClick(type.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md ${
                  userType === type.id
                    ? 'bg-primary/5 border-primary text-primary shadow-md'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-primary/50 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{type.icon}</span>
                  <div>
                    <h3 className="font-semibold text-base">{type.label}</h3>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                  {userType === type.id && (
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {errors.userType && (
            <p className="text-red-500 text-sm flex items-center mt-2">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.userType.message}
            </p>
          )}
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-800">
              First Name
            </label>
            <input
              type="text"
              {...register('firstName', {
                required: 'First name is required',
                minLength: {
                  value: 2,
                  message: 'First name must be at least 2 characters',
                },
              })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-200 bg-gray-50 focus:bg-white ${
                errors.firstName
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-200 focus:border-primary hover:border-gray-300'
              }`}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-800">
              Last Name
            </label>
            <input
              type="text"
              {...register('lastName', {
                required: 'Last name is required',
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 characters',
                },
              })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-200 bg-gray-50 focus:bg-white ${
                errors.lastName
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-200 focus:border-primary hover:border-gray-300'
              }`}
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Section */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">
            Phone Number
          </label>
          <div className="flex gap-3">
            <div className="w-1/3">
              <select
                {...register('countryCode', {
                  required: 'Country code is required',
                })}
                className={`w-full px-3 py-3 border-2 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-200 ${
                  errors.countryCode
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-gray-200 focus:border-primary hover:border-gray-300'
                }`}
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+49">🇩🇪 +49</option>
              </select>
            </div>

            <div className="w-2/3">
              <input
                type="tel"
                {...register('phoneNumber', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number',
                  },
                })}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-200 bg-gray-50 focus:bg-white ${
                  errors.phoneNumber
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-gray-200 focus:border-primary hover:border-gray-300'
                }`}
                placeholder="Enter 10-digit number"
              />
            </div>
          </div>
          {(errors.countryCode || errors.phoneNumber) && (
            <p className="text-red-500 text-sm flex items-center mt-1">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.countryCode?.message || errors.phoneNumber?.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              className={`w-full px-4 py-3 pl-12 border-2 rounded-lg focus:outline-none focus:ring-0 transition-all duration-200 bg-gray-50 focus:bg-white ${
                errors.email
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-200 focus:border-primary hover:border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            {errors.email && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm flex items-center mt-1">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg bg-primary text-white font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <span className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Create Account
          </span>
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">
              Already have an account?
            </span>
          </div>
        </div>

        {/* Switch to Login */}
        <div className="text-center">
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200 hover:underline decoration-2 underline-offset-2"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Sign in instead
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-center text-xs text-gray-500 leading-relaxed">
          By creating an account, you agree to Metavet's{' '}
          <span className="text-primary hover:underline cursor-pointer">
            Terms of Service
          </span>{' '}
          and{' '}
          <span className="text-primary hover:underline cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  )
}

export default index
