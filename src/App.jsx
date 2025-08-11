import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import Horizontal from './@core/navigation/Horizontal'

import LandPage from './views/pages/land-page'
import SearchNav from './views/components/product/SearchNav'
import ProductTable from './views/components/product/ProductTable'
import LinChart from './views/components/product/LineChart'

import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './@core/layout'
import SignIn from './views/components/LoginPages/SignIn'
import OtpPage from './views/components/LoginPages/OtpPage'
import CreateAccountPage from './views/components/LoginPages/CreateAccountPage'
import ForgotPassword from './views/components/LoginPages/ForgetPassword'
import NewPassword from './views/components/LoginPages/NewPassword'
import DoctorDashboard from './views/components/maindoctordashboard/DoctorDasboard'
import PatientList from './views/components/maindoctordashboard/PatientList'
import ReviewList from './views/components/maindoctordashboard/Reviewlist'
import AppointmentsLists from './views/components/maindoctordashboard/AppointmentsLists'
import Chatlist from './views/components/maindoctordashboard/Chatlist'
import DoctorProfile from './views/components/maindoctordashboard/DoctorProfile'

// ** Pages
const Dashboard = lazy(() => import('./views/pages/dashboard'))
const Appointment = lazy(() => import('./views/pages/appointment'))
const HealthRecord = lazy(() => import('./views/pages/health-record'))
const MyPet = lazy(() => import('./views/pages/mypet'))
const FindDoctor = lazy(() => import('./views/pages/finddoctor'))
const ContactUs = lazy(() => import('./views/pages/contactus'))
const BookAppointment = lazy(() => import('./views/pages/appointmentform'))
const AddPet = lazy(() => import('./views/pages/addpet'))
const Viewprofile = lazy(() => import('./views/pages/viewprofile'))
const Teleconsultation = lazy(() => import('./views/pages/teleconsultation'))
const TreatmentPlans = lazy(() => import('./views/pages/treatmentplans'))
const Bloodwork = lazy(() => import('./views/pages/bloodwork'))
const Grooming = lazy(() => import('./views/pages/grooming'))
const BehaviouralConcern = lazy(() =>
  import('./views/pages/behaviouralConcern')
)
const GroomerKyc = lazy(() => import('./views/pages/groomer-kyc'))
const KennelsBoarding = lazy(() => import('./views/pages/kennels/boarding'))
const DogTraining = lazy(() => import('./views/pages/dogtraining'))
const Dental = lazy(() => import('./views/pages/dental'))
const Vaccines = lazy(() => import('./views/pages/vaccines'))
const ParasitePrevention = lazy(() =>
  import('./views/pages/parasiteprevention')
)
const SpayingOrNeutering = lazy(() => import('./views/pages/spayingneutering'))
const Nutrition = lazy(() => import('./views/pages/nutrition'))
const Behavior = lazy(() => import('./views/pages/behaviour'))
const OtherServices = lazy(() => import('./views/pages/otherservices'))
const WhatExpect = lazy(() => import('./views/pages/whatexpect'))
const PaymentOptions = lazy(() => import('./views/pages/paymentoption'))
const PetWellnessProgram = lazy(() => import('./views/pages/petwellness'))
const OurTeam = lazy(() => import('./views/pages/ourteam'))
const AboutUs = lazy(() => import('./views/pages/aboutus'))
const MeetTeam = lazy(() => import('./views/pages/meetteam'))
const Blog = lazy(() => import('./views/pages/blogs'))
const PetHealth = lazy(() => import('./views/pages/pethealth'))
const ChoosingPet = lazy(() => import('./views/pages/choosingpet'))
const LivingPet = lazy(() => import('./views/pages/livingpet'))
const VideoNewsroom = lazy(() => import('./views/pages/videonewsroom'))
const TodaysVeterinarian = lazy(() =>
  import('./views/pages/todaysveterinarian')
)
const NewsletterArchive = lazy(() => import('./views/pages/newsletterarchive'))
const HospitalTour = lazy(() => import('./views/pages/hospitaltour'))
const Surgery = lazy(() => import('./views/pages/surgery'))
const Radiology = lazy(() => import('./views/pages/radiology'))
const FAQ = lazy(() => import('./views/pages/faq'))
const OnlineStore = lazy(() => import('./views/pages/onlinestore'))
const SearchProduct = lazy(() => import('./views/pages/searchproduct'))
const MyAccount = lazy(() => import('./views/pages/myaccount'))
const ShoppingBag = lazy(() => import('./views/pages/shoppingbag'))
const Prescription = lazy(() => import('./views/pages/prescriptionrequired'))
const CatProduct = lazy(() => import('./views/pages/catproduct'))
const DogProduct = lazy(() => import('./views/pages/dogproduct'))
const Frontline = lazy(() => import('./views/pages/frontlineplus'))
const Cosequin = lazy(() => import('./views/pages/cosequin'))
const HillScience = lazy(() => import('./views/pages/hillsciencediet'))
const Rimadyl = lazy(() => import('./views/pages/rimadyl'))
const SmallPetGlass = lazy(() => import('./views/pages/smallpetglass'))
const MarketMedley = lazy(() => import('./views/pages/marketmedley'))
const Oxbow = lazy(() => import('./views/pages/oxbow'))
const FeathersTeaser = lazy(() => import('./views/pages/feathersteaser'))
const Kong = lazy(() => import('./views/pages/kong'))
const MilkBone = lazy(() => import('./views/pages/milkbone'))
const HillScienceDog = lazy(() => import('./views/pages/hillsciencedog'))
const ViewProfile2 = lazy(() => import('./views/pages/viewprofile2'))
const ViewProfile3 = lazy(() => import('./views/pages/viewprofile3'))
const ViewProfile4 = lazy(() => import('./views/pages/viewprofile4'))
const ViewProfile5 = lazy(() => import('./views/pages/viewprofile5'))
const ViewProfile6 = lazy(() => import('./views/pages/viewprofile6'))
const ViewProfile7 = lazy(() => import('./views/pages/viewprofile7'))
const ViewProfile8 = lazy(() => import('./views/pages/viewprofile8'))

const App = () => {
  const [themeMode, setThemeMode] = useState('light')

  // ** Light Mode
  const lightTheme = () => {
    setThemeMode('light')
  }
  // ** Dark Mode
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <BrowserRouter>
        {/* Suspense will display a fallback while the lazy components load */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Authentication Routes */}
            {/* <Route path="/" element={<Login />} />
          <Route path="/singup" element={<CreateAccount />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/email" element={<SendEmail />} /> */}

            {/* 404 fallback */}
            <Route path="*" element={<h1>404 page not found</h1>} />

            {/* Protected / Nested Layout Routes */}
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/healthrecord" element={<HealthRecord />} />
              <Route path="/mypet" element={<MyPet />} />
              <Route path="/finddoctor" element={<FindDoctor />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/appointmentform" element={<BookAppointment />} />
              <Route path="/addpet" element={<AddPet />} />
              <Route path="/viewprofile" element={<Viewprofile />} />
              <Route path="/teleconsultation" element={<Teleconsultation />} />
              <Route path="/treatment-plans-rx" element={<TreatmentPlans />} />
              <Route path="/blood-work" element={<Bloodwork />} />
              <Route path="/grooming" element={<Grooming />} />
              <Route path="/groomer-kyc" element={<GroomerKyc />} />
              <Route path="/kennels-boarding" element={<KennelsBoarding />} />
              <Route path="/dog-training" element={<DogTraining />} />
              <Route path="/dental" element={<Dental />} />
              <Route path="/vaccines" element={<Vaccines />} />
              <Route
                path="/parasite-prevention"
                element={<ParasitePrevention />}
              />
              <Route
                path="/spaying-neutering"
                element={<SpayingOrNeutering />}
              />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/behaviour" element={<Behavior />} />
              <Route path="/other-services" element={<OtherServices />} />
              <Route path="/what-to-expect" element={<WhatExpect />} />
              <Route
                path="/behavioural-concern"
                element={<BehaviouralConcern />}
              />
              <Route path="/payment-options" element={<PaymentOptions />} />
              <Route
                path="/pet-wellness-program"
                element={<PetWellnessProgram />}
              />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/meet-the-team" element={<MeetTeam />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/pet-health" element={<PetHealth />} />
              <Route path="/choosing-pet" element={<ChoosingPet />} />
              <Route path="/livingpet" element={<LivingPet />} />
              <Route path="/videonewsroom" element={<VideoNewsroom />} />
              <Route
                path="/todayveterinarian"
                element={<TodaysVeterinarian />}
              />
              <Route path="/newsletter" element={<NewsletterArchive />} />
              <Route path="/hospital" element={<HospitalTour />} />
              <Route path="/surgery" element={<Surgery />} />
              <Route path="/radiology" element={<Radiology />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/store" element={<OnlineStore />} />
              <Route path="/searchproduct" element={<SearchProduct />} />
              <Route path="/myaccount" element={<MyAccount />} />
              <Route path="/shoppingbag" element={<ShoppingBag />} />
              <Route path="/prescription" element={<Prescription />} />
              <Route path="/catproduct" element={<CatProduct />} />
              <Route path="/dogproduct" element={<DogProduct />} />
              <Route path="/frontline" element={<Frontline />} />
              <Route path="/cosequin" element={<Cosequin />} />
              <Route path="/hillsciencecat" element={<HillScience />} />
              <Route path="/rimadyl" element={<Rimadyl />} />
              <Route path="/smallpetglass" element={<SmallPetGlass />} />
              <Route path="/marketmedley" element={<MarketMedley />} />
              <Route path="/oxbow" element={<Oxbow />} />
              <Route path="/feather" element={<FeathersTeaser />} />
              <Route path="/kong" element={<Kong />} />
              <Route path="/milkbone" element={<MilkBone />} />
              <Route path="/hillsciencedog" element={<HillScienceDog />} />
              <Route path="/viewprofile2" element={<ViewProfile2 />} />
              <Route path="/viewprofile3" element={<ViewProfile3 />} />
              <Route path="/viewprofile4" element={<ViewProfile4 />} />
              <Route path="/viewprofile5" element={<ViewProfile5 />} />
              <Route path="/viewprofile6" element={<ViewProfile6 />} />
              <Route path="/viewprofile7" element={<ViewProfile7 />} />
              <Route path="/viewprofile8" element={<ViewProfile8 />} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/createaccount" element={<CreateAccountPage />} />
            <Route path="/forget" element={<ForgotPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/dashboard" element={<DoctorDashboard />} />
            <Route path="/patientlist" element={<PatientList />} />
            <Route path="/reviewlist" element={<ReviewList />} />
            <Route path="/appointmentslists" element={<AppointmentsLists />} />
            <Route path="/chatlist" element={<Chatlist />} />
            <Route path="/docmainprofile" element={<DoctorProfile />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
