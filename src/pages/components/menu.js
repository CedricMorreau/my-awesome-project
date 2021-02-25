import React from 'react'
import { Link } from 'gatsby'

import GithubIcon from './assets/github-icon'
import InstagramIcon from './assets/ig-icon'

const Menu = () => {   

    return(
        <div className="menu_wrapper">
           <ul className="list_grid_wrapper">
            <div class="list_grid_left">
               <Link to="./week1"><li>Week 1</li></Link>
               <Link to="./week2"><li>Week 2</li></Link>
               <Link to="./week3"><li>Week 3</li></Link>
            </div>

            <div class="list_grid_right">
                <Link to="./week4"><li>Week 4</li></Link>
                <Link to="./week5"><li>Week 5</li></Link>
                <Link to="./week6"><li>Week 6</li></Link>
            </div>

            <div class="list_grid_socials">
                <div className="list_grid_socials-git">
                    <Link to="https://github.com/CedricMorreau?tab=repositories"><GithubIcon /></Link>
                </div>
                    <Link to="https://www.instagram.com/cedricmorreau/"><InstagramIcon /></Link>
            </div>
           </ul>
        </div>
    )
}

export default Menu