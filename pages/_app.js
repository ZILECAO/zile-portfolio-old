import '../styles/globals.css'
import {React, Component} from 'react'
import {Navigation, Footer} from '../components/navfooter.js'

function MyApp({ Component, pageProps }) {
  return (
    <Navigation />
    <Component {...pageProps} />
    <Footer />
)
}

export default MyApp
