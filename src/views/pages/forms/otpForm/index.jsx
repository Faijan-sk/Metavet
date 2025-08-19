import { useState, useEffect } from 'react'

const OTPVerification = ({ onSubmit, onBack, userInfo, formType }) => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Timer for resend OTP
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  // Auto-focus first input on component mount
  useEffect(() => {
    const firstInput = document.getElementById('otp-0')
    if (firstInput) {
      firstInput.focus()
    }
  }, [])

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError('') // Clear error when user types

    // Auto focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text/plain').slice(0, 4)

    if (!/^\d+$/.test(pastedData)) {
      setError('Please paste only numbers')
      return
    }

    const newOtp = Array(4).fill('')
    for (let i = 0; i < Math.min(pastedData.length, 4); i++) {
      newOtp[i] = pastedData[i]
    }
    setOtp(newOtp)
    setError('')

    // Focus the next empty input or last input
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === '')
    const focusIndex = nextEmptyIndex === -1 ? 3 : nextEmptyIndex
    const inputToFocus = document.getElementById(`otp-${focusIndex}`)
    if (inputToFocus) inputToFocus.focus()
  }

  // Handle backspace and arrow keys
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      if (prevInput) prevInput.focus()
    } else if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      if (prevInput) prevInput.focus()
    } else if (e.key === 'ArrowRight' && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  // Handle OTP submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    const otpValue = otp.join('')

    if (otpValue.length !== 4) {
      setError('Please enter complete 4-digit OTP')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Simulate API call - Replace with actual API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purpose - in real app, verify with backend
      if (otpValue === '1234') {
        console.log('OTP Verified Successfully:', otpValue)
        console.log('User Info:', userInfo)
        onSubmit({
          ...userInfo,
          otp: otpValue,
          verified: true,
          verificationTime: new Date().toISOString(),
        })
      } else {
        setError('Invalid OTP. Please try again.')
        // Clear OTP inputs
        setOtp(['', '', '', ''])
        document.getElementById('otp-0')?.focus()
      }
    } catch (error) {
      setError('Verification failed. Please try again.')
      console.error('OTP Verification Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Resend OTP
  const handleResendOtp = async () => {
    setTimeLeft(60)
    setCanResend(false)
    setOtp(['', '', '', ''])
    setError('')

    console.log(
      'Resending OTP to:',
      userInfo.phoneNumber || userInfo.mobileNumber
    )

    // Simulate API call for resending OTP
    try {
      // Replace with actual resend API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      console.log('OTP resent successfully')
    } catch (error) {
      console.error('Resend OTP Error:', error)
      setError('Failed to resend OTP. Please try again.')
    }

    // Focus first input after resend
    document.getElementById('otp-0')?.focus()
  }

  // Format phone number for display
  const formatPhoneNumber = () => {
    const countryCode = userInfo.countryCode || '+91'
    const phoneNumber = userInfo.phoneNumber || userInfo.mobileNumber
    return `${countryCode} ${phoneNumber}`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Verify Your Phone Number
        </h2>
        <p className="text-gray-600 text-sm mb-1">
          We've sent a 4-digit verification code to
        </p>
        <p className="text-primary font-medium text-lg">
          {formatPhoneNumber()}
        </p>
      </div>

      {/* OTP Input Form */}
      <form onSubmit={handleOtpSubmit} className="space-y-6">
        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className={`w-12 h-12 text-center text-xl font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-all duration-200 ${
                error
                  ? 'border-red-500 bg-red-50'
                  : digit
                  ? 'border-primary bg-primary bg-opacity-5'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="0"
            />
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-center">
            <p className="text-red-500 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Timer and Resend */}
        <div className="text-center">
          {!canResend ? (
            <p className="text-gray-600 text-sm">
              Resend code in{' '}
              <span className="text-primary font-medium">{timeLeft}s</span>
            </p>
          ) : (
            <div>
              <p className="text-gray-500 text-sm mb-2">
                Didn't receive the code?
              </p>
              <button
                type="button"
                onClick={handleResendOtp}
                className="text-primary font-medium hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 rounded px-2 py-1"
              >
                Resend OTP
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting || otp.join('').length !== 4}
            className="flex-1 py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                  ></circle>
                  <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    className="opacity-75"
                  ></path>
                </svg>
                Verifying...
              </>
            ) : (
              'Verify OTP'
            )}
          </button>
        </div>
      </form>

      {/* Help Text */}
      <div className="text-center border-t border-gray-100 pt-4">
        <p className="text-gray-500 text-xs leading-relaxed">
          Enter the 4-digit code sent to your phone number.
          <br />
          Code expires in 5 minutes.
        </p>
      </div>

      {/* Debug Info (Remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-center border-t border-gray-100 pt-4">
          <p className="text-gray-400 text-xs">
            Debug: Use OTP <strong>1234</strong> for testing
          </p>
        </div>
      )}
    </div>
  )
}

export default OTPVerification
