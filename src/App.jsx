import React from 'react'
import './index.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About/>
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App;