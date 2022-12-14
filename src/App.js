import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
// import { Login, Register } from "./components/login/index";

// import Login from "./components/login/index"
// import Register from "./components/login/index"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          {/* <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} /> */}
          <Route exact path='/contact' component={Contact} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
