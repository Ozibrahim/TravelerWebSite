import Nav from "./Components/Nav/Nav"
import './App.css'
import Header from "./Components/Header/Header"
import Destination from "./Components/Destinations/Destination"
import Hotels from "./Components/Hotels/Hotels"
import Testimonial from "./Components/Testimonials/Testimonial"
import FutureTrip from "./Components/FutureTrip/FutureTrip"
import Footer from "./Components/Footer/Footer"


function App() {


  return (
    <>
      <div className="Header_Container">
        <Nav />
        <Header />
      </div>
      <Destination />
      <Hotels />
      <Testimonial />
      <FutureTrip />
      <Footer />
    </>
  )
}

export default App
