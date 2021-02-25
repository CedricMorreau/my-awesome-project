import React from 'react'
import { useState } from 'react'

import Menu from './menu'
import MenuIcon from './assets/menu-icon'



const Header = () => {   
    const [menuOpen, menuClosed] = useState(false)

    return(
        <header>
            <div className="header_content_wrapper">
                <div className="header_content_title">
                    <h1>AWESOME</h1>
                </div>

                <div className="header_content_menu">
                    <button onClick={() => menuClosed(!menuOpen)}>
                        <MenuIcon/>
                    </button>
                </div>
            </div>
        
            {menuOpen && <Menu />}
        </header>
    )
}

export default Header