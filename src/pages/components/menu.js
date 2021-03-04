import React from 'react'
import { Link } from 'gatsby'

import GithubIcon from './assets/github-icon'
import InstagramIcon from './assets/ig-icon'

const Menu = () => {   

    return(
        <div className="menu_wrapper">
           <ul className="list_grid_wrapper">
            <div className="list_grid_left">
               <Link target="_blank" to="./lesweken/week1"><li>Week 1</li></Link>
               <Link target="_blank" to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Week 2</li></Link>
               <Link target="_blank" to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Week 3</li></Link>
            </div>

            <div className="list_grid_right">
                <Link target="_blank" to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Week 4</li></Link>
                <Link target="_blank" to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Week 5</li></Link>
                <Link target="_blank" to=".https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Week 6</li></Link>
            </div>

            <div className="list_grid_socials">
                <div className="list_grid_socials-git">
                    <Link target="_blank" className="menu_icon-hover" to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><GithubIcon /></Link>
                </div>
                    <Link target="_blank" className="menu_icon-hover" to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><InstagramIcon /></Link>
            </div>
           </ul>
        </div>
    )
}

export default Menu