import { Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import DashBoard from "./components/Dashboard/DashBoard"
import AddUser from "./components/AddUser/AddUser"
import AllUsers from "./components/AllUsers/AllUsers"
import EditProduct from "./components/EditProduct/EditProduct"
import LoadScriptOnRouteChange from "./config/LoadScriptOnRouteChange"
import AddCategory from "./components/AddCategory/AddCategory"
import AllOrders from "./components/AllOrders/AllOrders"
import AllGalleryImages from "./components/AllGalleryImages/AllGalleryImages"
import AddGallery from "./components/AddGallery/AddGallery"
import AllSlogans from "./components/AllSlogans/AllSlogans"
import AddSlogan from "./components/AddSlogan/AddSlogan"
import AllCalendar from "./components/AllCalendar/AllCalendar"
import AddCalendar from "./components/AddCalendar/AddCalendar"
import AllAd from "./components/AllAd/AllAd"
import AddAd from "./components/AddAd/AddAd"
import { Toaster } from 'react-hot-toast';
import AddMandalam from "./components/AddMandalam/AddMandalam"
import AllMandalam from "./components/AllMandalam/AllMandalam"
import OneSignal from "./components/OneSignal/OneSignal"
import AddEvent from "./components/AddEvent/AddEvent"
import AllEvents from "./components/AllEvents/AllEvents"
import AllFeedback from "./components/AllFeedbacks/AllFeedbacks"
import AddCarousel from "./components/AddCarousel/AddCarousel"
import AllCarousel from "./components/AllCarousel/AllCarousel"
import AddPoll from "./components/AddPoll/AddPoll"
import AllPolls from "./components/AllPolls/AllPolls"
import Payments from "./components/Payments/Payments"
import AddDistrict from "./components/AddDistrict/AddDistrict"
import AddConstituency from "./components/AddConstituency/AddConstituency"
import AddAssembly from "./components/AddAssembly/AddAssembly"
import AddPanchayath from "./components/AddPanchayath/AddPanchayath"

function App() {


  return (
    <>
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DashBoard />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/all-users" element={<AllUsers />} />
    <Route path="/edit-product/:id" element={<EditProduct/>} />
    <Route path="/add-gallery" element={<AddGallery/>} />
    <Route path="/all-gallery" element={<AllGalleryImages/>} />
    <Route path="/add-slogan" element={<AddSlogan/>} />
    <Route path="/all-slogans" element={<AllSlogans/>} />
    <Route path="/all-calendar" element={<AllCalendar/>} />
    <Route path="/add-calendar" element={<AddCalendar/>} />
    <Route path="/all-ad" element={<AllAd/>} />
    <Route path="/add-ad" element={<AddAd/>} />
    <Route path="/add-mandalam" element={<AddMandalam/>} />
    <Route path="/all-mandalam" element={<AllMandalam/>} />
    <Route path="/add-notification" element={<OneSignal/>} />
    <Route path="/add-event" element={<AddEvent/>} />
    <Route path="/all-events" element={<AllEvents/>} />
    <Route path="/all-feedback" element={<AllFeedback/>} />
    <Route path="/all-carousel" element={<AllCarousel/>} />
    <Route path="/add-carousel" element={<AddCarousel/>} />
    <Route path="/add-poll" element={<AddPoll/>} />
    <Route path="/all-polls" element={<AllPolls/>} />
    <Route path="/all-payments" element={<Payments/>} />
    <Route path="/add-district" element={<AddDistrict/>} />
    <Route path="/add-constituency" element={<AddConstituency/>} />
    <Route path="/add-assembly" element={<AddAssembly/>} />
    <Route path="/add-panchayath" element={<AddPanchayath/>} />
  


    <Route path="/all-orders" element={<AllOrders/>} />
    <Route path="/category" element={<AddCategory/>} />
     </Routes>
     <LoadScriptOnRouteChange scriptSrc="/src/assets/js/template.js" />
     <Toaster />
    </>
  )
}

export default App
