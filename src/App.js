import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import AllContext, { AuthContext } from './context/AllContext';
import AboutUs from './pages/AboutUs/AboutUs';
import Appointment from './pages/Appointment/Appointment';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import BlogLeftSideBar from './pages/BlogLeftSideBar/BlogLeftSideBar';
import BlogNoSideBar from './pages/BlogNoSideBar/BlogNoSideBar';
import Blogs from './pages/Blogs/Blogs';
import BlogThreeColMasonry from './pages/BlogThreeColMasonry/BlogThreeColMasonry';
import BlogThreeColumn from './pages/BlogThreeColumn/BlogThreeColumn';
import BlogTwoColumn from './pages/BlogTwoColumn/BlogTwoColumn';
import BlogTwoColumnMasonry from './pages/BlogTwoColumnMasonry/BlogTwoColumnMasonry';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Contact from './pages/Contact/Contact';
import DetailsAudio from './pages/DetailsAudio/DetailsAudio';
import DetailsGallery from './pages/DetailsGallery/DetailsGallery';
import DetailsLeftSideBar from './pages/DetailsLeftSideBar/DetailsLeftSideBar';
import DetailsVideo from './pages/DetailsVideo/DetailsVideo';
import DoctorDetails from './pages/Doctors/DoctorDetails/DoctorDetails';
import DoctorsOne from './pages/Doctors/DoctorsOne/DoctorsOne';
import DoctorsTwo from './pages/Doctors/DoctorsTwo/DoctorsTwo';
import Home from './pages/Home/Home/Home';
import HomeThree from './pages/HomeThree/HomeThree';
import HomeTwo from './pages/HomeTwo/HomeTwo';
import HomeFour from './pages/HomeFour/HomeFour';
import Login from './pages/Login/Login';
import PortfolioSlider from './pages/PortfolioSlider/PortfolioSlider';
import PortfolioThreeCol from './pages/PortfolioThreeCol/PortfolioThreeCol';
import PortfolioTwoColumn from './pages/PortfolioTwoColumn/PortfolioTwoColumn';
import Register from './pages/Register/Register';
import ServicesDetails from './pages/Services/ServicesDetails/ServicesDetails';
import ServicesOne from './pages/Services/ServicesOne/ServicesOne';
import ServicesTwo from './pages/Services/ServicesTwo/ServicesTwo';
import ShopDetails from './pages/ShopDetails/ShopDetails/ShopDetails';
import ShopPage from './pages/ShopPage/ShopPage/ShopPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import WishList from './pages/wishList/WishList';
import HomeFive from './pages/HomeFive/HomeFive';
import './App.css';
import 'react-pagination-bar/dist/index.css'
import 'react-tooltip/dist/react-tooltip.css'

import NotFound from './pages/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';
// import PublicRoutes from './privateRoutes/PublicRoutes';
import LiveEvents from './pages/events/LiveEvents';
import OnlineEvents from './pages/events/OnlineEvents';
import BasicLecture from './pages/seminars/BasicLecture';
import Seminars from './pages/seminars/Seminars';
import LifeSystem from './pages/seminars/LifeSystem';
import Research from './pages/Contact/Research';
import Instructors from './pages/Instructors/Instructors';
import FindInstructor from './pages/Instructors/FindInstructor';
import BecomeInstructor from './pages/Instructors/BecomeInstructor';
import EnglishBlog from './pages/Blogs/EnglishBlog';
import SpanishBlog from './pages/Blogs/SpanishBlog';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import WithHeaderFooter from './pages/WithHeaderFooter/WithHeaderFooter';
import StoreProducts from './pages/Store/StoreProducts';
import SilvaManifestationProgram from './pages/SilvaManifestationProgram/SilvaManifestationProgram';
import BottomToTop from './pages/BottomToTop/BottomToTop';
import AllCourses from './pages/CourseDetails/Courses';
import SilvaHome from './pages/Home/Home/SilvaHome';
import ProductDetails from './pages/Store/products/ProductDetails';
import IntuitionSystem from './pages/seminars/IntuitionSystem';
import MasterySystem from './pages/seminars/MasterySystem';
import SingleLecturePage from './pages/Store/SingleLecturePage/SingleLecturePage';
import SilvaMemberShip from './pages/silvamembership/SilvaMemberShip';
import SilvaHome2 from './pages/Home/Home/SilvaHome2';
import PaymentSuccess from './pages/payment/PaymentSuccess';
import PaymentUnSuccess from './pages/payment/PaymentUnsuccess';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MyCoursesPage from './pages/ProfilePage/MyCoursesPage';
import MyQuizzesPage from './pages/ProfilePage/MyQuizzesPage';
import MyOrdersPage from './pages/ProfilePage/MyOrdersPage';
import MyBasicInfo from './pages/ProfilePage/MyBasicInfo';
import MyAvatar from './pages/ProfilePage/MyAvatar';
import ChangePassword from './pages/ProfilePage/ChangePassword';
import { useContext } from 'react';
import { useEffect } from 'react';
import { requestData2 } from './utils/baseUrl';


function App() {

  const { setUserData,isUserLoggedIn } = useContext(AuthContext);
  const getProfile = async () => {
    const res = await requestData2("getStudentProfile", "POST", {});
    if (res && res.error === false) {
      setUserData(res.data);
    }
  }

  useEffect(() => {
    if(isUserLoggedIn){
      getProfile()
    }
  }, [isUserLoggedIn])
  return (
    <>
    <Toaster position="bottom-center" />
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            {/* Home Route started*/}
            <Route path="/store/courses" element={<AllCourses/>}/>
            <Route path="/" element={<SilvaHome />} />
            <Route path="/today" element={<SilvaHome2 />} />

            <Route path="/home" element={<SilvaHome />} />
            {/* <Route path="/contactus" element={<ContactUs />} /> */}
            {/* <Route path="/homeTwo" element={<HomeTwo />} />
            <Route path="/homeThree" element={<HomeThree />} /> */}
            {/* Home Route Ended */}
            {/*About Route started*/}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/research" element={<Research />} />
            {/* About Route Ended */}
            {/* Seminar Route Started */}
            <Route path="/courses/basic_lecture_series" element={<BasicLecture />} />
            <Route path="/courses/seminar" element={<Seminars />} />
            <Route path="/courses/silva_life_system" element={<LifeSystem />} />
            <Route path="/courses/silva_intution_system" element={<IntuitionSystem />} />
            <Route path="/courses/silva_mastery_system" element={<MasterySystem />} />
            <Route path="/silva_membership" element={<SilvaMemberShip />} />
            <Route path="/store/profile" element={<Navigate to="/store/profile/avijit123/courses" />}>
            </Route>
            <Route element={<ProfilePage />}>
              <Route path='/store/profile/:username/courses' element={<MyCoursesPage />} />
            </Route>
            <Route element={<ProfilePage />}>
              <Route path='/store/profile/:username/quizzes' element={<MyQuizzesPage />} />
            </Route>
            <Route element={<ProfilePage />}>
              <Route path='/store/profile/:username/orders' element={<MyOrdersPage />} />
            </Route>

            <Route element={<ProfilePage />}>
              <Route path='/store/profile/:username/settings/basic_information' element={<MyBasicInfo />} />
            </Route>

            <Route element={<ProfilePage />}>
              <Route path='/store/profile/:username/settings/avatar' element={<MyAvatar />} />
            </Route>

            <Route element={<ProfilePage />}>
              <Route path='/store/profile/:username/settings/change_password' element={<ChangePassword />} />
            </Route>
            {/* Seminar Route Ended */}
            {/*Events Route Started */}
            <Route path="/events/live" element={<LiveEvents />} />
            <Route path="/events/online" element={<OnlineEvents />} />
            <Route element={<WithHeaderFooter />}>
              <Route path="/events/livedetails/:id" element={<CourseDetails/>} />
            </Route>
            {/* Event Route Ended */}
            {/* Instructor Route started */}
            <Route path="/instructor" element={<Instructors />} />
            <Route path="/instructor/find_instructor" element={<FindInstructor />} />
            <Route path="/instructor/become_silva_instructor" element={<BecomeInstructor />} />
            {/* Instructor Route Ended */}
            {/* Blogs Route started */}
            <Route path="/store" element={<StoreProducts />} />
            <Route path="/store/blogs/" element={<EnglishBlog />} />
            <Route path="/store/spanish-blogs/" element={<SpanishBlog/>} />
            <Route path="/blogDetails/:id" element={<BlogDetails />} />
            {/* <Route element={<BottomToTop />} > */}
              <Route path="/store/course/:id" element={<SilvaManifestationProgram />} />
              {/* <Route path="/store/course/*" element={<NotFound/>} /> */}
            <Route path='/store/course/learn-meditation/intros/1/preview' element={<SingleLecturePage />} />
            {/* </Route> */}
            {/* Blogs Route Ended */}
            {/*Auth Route started */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/*Auth Route Ended */}

            {/* product route started */}
            <Route path="/store/product/:id" element={<ProductDetails/>} />
            {/* product route ended */}

            <Route path="/paymentSuccess" element={<PaymentSuccess />} />
            <Route path="/paymentError" element={<PaymentUnSuccess />} />



            <Route path="/homeFour" element={<HomeFour />} />
            <Route path="/homeFive" element={<HomeFive />} />
            <Route path="/services" element={<ServicesOne />} />
            <Route path="/servicesTwo" element={<ServicesTwo />} />
        
            <Route path="/online" element={<ShopDetails />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
            <Route path="/wishList" element={<WishList />} />
            
            
            <Route path="/blogLeftSideBar" element={<BlogLeftSideBar />} />
            <Route path="/blogNoSideBar" element={<BlogNoSideBar />} />
            <Route path="/blogTwoColumn" element={<BlogTwoColumn />} />
            <Route path="/blogTwoMasonry" element={<BlogTwoColumnMasonry/>} />
            <Route path="/blogThreeColumn" element={<BlogThreeColumn />} />
            <Route path="/blogThreeColMasonry" element={<BlogThreeColMasonry />} />
            
            <Route path="/blogDetailsLeftSidebar" element={<DetailsLeftSideBar />} />
            <Route path="/blogDetailsAudio" element={<DetailsAudio />} />
            <Route path="/blogDetailsVideo" element={<DetailsVideo />} />
            <Route path="/blogDetailsGallery" element={<DetailsGallery />} />
            
            <Route path="/appoinment" element={<Appointment />} />
            <Route path="/portfolioTwoColumn" element={<PortfolioTwoColumn />} />
            <Route path="/portfolioThreeColumn" element={<PortfolioThreeCol />} />
            <Route path="/portfolioSlider" element={<PortfolioSlider />} />
            
            <Route path="/notMatch" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
