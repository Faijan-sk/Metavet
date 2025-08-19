import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginForm from './../../views/pages/forms/login'
import SignupForm from './../../views/pages/forms/registerUser'
import OTPVerification from './../../views/pages/forms/otpForm'

const navItems = [
  { name: 'Find a Doctor', path: '/finddoctor', active: true },
  { name: 'Appointment', path: '/appointment', active: true },
  { name: 'Health Record', path: '/healthrecord', active: true },
  {
    name: 'Services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Teleconsultation', path: '/teleconsultation' },
      { label: 'Treatment Plans/Rx', path: '/treatment-plans-rx' },
      { label: 'Blood Work', path: '/blood-work' },
      { label: 'Grooming', path: '/grooming' },
      { label: 'Groomers to Client KYC', path: '/groomer-kyc' },
      { label: 'Kennels/Boarding', path: '/kennels-boarding' },
      { label: 'Training', path: '/dog-training' },
      { label: 'Dental', path: '/dental' },
      { label: 'Vaccines', path: '/vaccines' },
      { label: 'Parasite Prevention', path: '/parasite-prevention' },
      { label: 'Spaying or Neutering Your Pet', path: '/spaying-neutering' },
      { label: 'Nutrition', path: '/nutrition' },
      { label: 'Behaviour', path: '/behaviour' },
    ],
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [formType, setFormType] = useState('login')
  const [currentStep, setCurrentStep] = useState('form')
  const [userInfo, setUserInfo] = useState(null)

  const navItems2 = [
    ...(isMobile ? navItems : []),
    {
      name: 'Patient Center',
      hasDropdown: true,
      dropdownItems: [
        { label: 'What to Expect', path: '/what-to-expect' },
        { label: 'Behavioural Concern ', path: '/behavioural-concern' },
        { label: 'Payment Options', path: '/payment-options' },
      ],
    },
    {
      name: 'About Us',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Our Team', path: '/our-team' },
        { label: 'Meet the Team', path: '/meet-the-team' },
        { label: 'About Us', path: '/about-us' },
      ],
    },
    {
      name: 'Resources',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blogs', path: '/blogs' },
        { label: 'Pet Health', path: '/pet-health' },
        { label: 'Choosing Your Pet', path: '/choosing-pet' },
        { label: 'Living With Your Pet', path: '/livingpet' },
        { label: 'Video Newsroom', path: '/videonewsroom' },
        { label: "Today's Veterinarian", path: '/todayveterinarian' },
        { label: 'Newsletter Archive', path: '/newsletter' },
        { label: 'Find A Clinic', path: '/hospital' },
        { label: 'Surgery', path: '/surgery' },
        { label: 'Radiology', path: '/radiology' },
        { label: 'FAQ', path: '/faq' },
      ],
    },
    { name: 'Contact Us', path: '/contactus' },
  ]

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 991)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.menu-toggle')
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isMobile ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, isMobile])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const closeModal = () => {
    setIsModalOpen(false)
    setFormType('login')
    setCurrentStep('form')
    setUserInfo(null)
  }

  const handleDropdownHover = (index) => {
    if (!isMobile) setHoveredItem(index)
  }

  const handleDropdownLeave = () => {
    if (!isMobile) setHoveredItem(null)
  }

  const toggleMobileDropdown = (index) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenMobileDropdown(null)
  }

  const handleFormSubmit = (data) => {
    console.log('Form Data:', data)
    console.log('Form Type:', formType)

    setUserInfo(data)
    setCurrentStep('otp')

    const phoneNumber = data.phoneNumber || data.mobileNumber
    const countryCode = data.countryCode || '+91'
    console.log(`Sending OTP to: ${countryCode} ${phoneNumber}`)
  }

  const handleOtpVerification = (verificationData) => {
    console.log('OTP Verification Complete:', verificationData)

    if (formType === 'login') {
      console.log('Login successful!')
      localStorage.setItem('user', JSON.stringify(verificationData))
      localStorage.setItem('isAuthenticated', 'true')
    } else {
      console.log('Registration successful!')
      localStorage.setItem('user', JSON.stringify(verificationData))
      localStorage.setItem('isAuthenticated', 'true')
    }

    closeModal()

    alert(
      `${
        formType === 'login' ? 'Login' : 'Registration'
      } successful! Welcome to Metavet.`
    )
  }

  const handleBackToForm = () => {
    setCurrentStep('form')
  }

  const switchToSignup = () => {
    setFormType('signup')
    setCurrentStep('form')
    setUserInfo(null)
  }

  const switchToLogin = () => {
    setFormType('login')
    setCurrentStep('form')
    setUserInfo(null)
  }

  const getModalTitle = () => {
    if (currentStep === 'otp') {
      return 'Verify OTP'
    }
    return formType === 'login' ? 'Login' : 'Register'
  }

  // Get modal size based on form type
  const getModalClasses = () => {
    const isSignupForm = formType === 'signup' && currentStep === 'form'

    if (isSignupForm) {
      return {
        container:
          'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4',
        modal:
          'bg-white w-full max-w-lg mx-auto rounded-xl shadow-xl h-auto max-h-[95vh] flex flex-col',
        content: 'flex-1 overflow-y-auto',
      }
    }

    return {
      container:
        'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4',
      modal:
        'bg-white w-full max-w-md mx-auto rounded-lg shadow-xl max-h-[90vh] overflow-y-auto',
      content: '',
    }
  }

  const modalClasses = getModalClasses()

  return (
    <header className="sticky top-0 shadow-md py-2 sm:py-4 px-4 sm:px-6 lg:px-10 font-sans min-h-[60px] sm:min-h-[70px] tracking-wide relative z-50 bg-primary">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="./src/assets/MetavetImages/iconpng (1).png"
              alt="logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="ml-2 text-white font-bold text-lg sm:text-xl hidden sm:block">
              Metavet
            </span>
          </Link>
        </div>

        <nav
          className={`${isMobile ? 'hidden' : 'flex'} items-center space-x-1`}
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleDropdownHover(index)}
              onMouseLeave={handleDropdownLeave}
            >
              <NavLink
                to={item.path || '#'}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-white bg-opacity-20'
                      : 'text-white hover:text-gray-200 hover:bg-white hover:bg-opacity-10'
                  }`
                }
              >
                {item.name}
                {item.hasDropdown && (
                  <svg
                    className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>

              {item.hasDropdown && hoveredItem === index && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  {item.dropdownItems.map(({ label, path }, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className={`${
              isMobile ? 'hidden' : 'flex'
            } items-center px-3 py-2 text-sm font-medium text-white border border-white border-opacity-50 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors duration-200`}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            SignUp
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle block p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}

      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-lg font-semibold text-gray-800">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          <nav className="p-4 space-y-2">
            {navItems2.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="flex items-center justify-between w-full px-3 py-3 text-left text-gray-700 font-medium hover:bg-gray-50 rounded-md transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openMobileDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openMobileDropdown === index
                          ? 'max-h-screen opacity-100 pb-2'
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems.map(({ label, path }, i) => (
                          <Link
                            key={i}
                            to={path}
                            onClick={closeMenu}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block px-3 py-3 font-medium rounded-md transition-colors duration-200 ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Enhanced Modal with Better Sizing for Signup Form */}
      {isModalOpen && (
        <div className={modalClasses.container}>
          <div className={modalClasses.modal}>
            {/* Fixed Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-white rounded-t-xl">
              <h1 className="text-xl font-semibold text-gray-800">
                {getModalTitle()}
              </h1>
              <button
                onClick={closeModal}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              className={`${modalClasses.content || 'p-4 sm:p-6'} ${
                formType === 'signup' && currentStep === 'form'
                  ? 'overflow-y-auto flex-1'
                  : ''
              }`}
            >
              {currentStep === 'form' ? (
                formType === 'login' ? (
                  <LoginForm
                    onSubmit={handleFormSubmit}
                    onSwitchToSignup={switchToSignup}
                    onClose={closeModal}
                  />
                ) : (
                  <div className="space-y-4">
                    <SignupForm
                      onSubmit={handleFormSubmit}
                      onSwitchToLogin={switchToLogin}
                      onClose={closeModal}
                    />
                  </div>
                )
              ) : (
                <OTPVerification
                  onSubmit={handleOtpVerification}
                  onBack={handleBackToForm}
                  userInfo={userInfo}
                  formType={formType}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
