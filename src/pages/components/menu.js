import React from 'react'

import GithubIcon from './assets/github-icon'
import InstagramIcon from './assets/ig-icon'

const Menu = () => {   

    return(
        <div className="menu_wrapper">
           <ul className="list_grid_wrapper">
            <div class="list_grid_left">
               <li>Week 1</li>
               <li>Week 2</li>
               <li>Week 3</li>
            </div>

            <div class="list_grid_right">
               <li>Week 4</li>
               <li>Week 5</li>
               <li>Week 6</li>
            </div>

            <div class="list_grid_socials">
                <div className="list_grid_socials-git">
                    <GithubIcon />
                </div>
                    <InstagramIcon />
            </div>
           </ul>
        </div>
    )
}

export default Menu