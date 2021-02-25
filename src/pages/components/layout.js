import React from 'react'

import Header from './header'
import Footer from './footer'
import Welcome from './welcome'

import '../layout/index.scss'

const Layout = () => {
    return (
        <div>
            <Header />
            <Welcome />
            <Footer />
        </div>
    )
}

export default Layout



