import React from 'react'
import TextLoop from "react-text-loop";


const Welcome = () => {   
    return(
        <div className="welcome_wrapper">
            <span>
                <TextLoop>
                    <span>Hi,</span>
                    <span>Hallo,</span>
                    <span>Bonjour,</span>
                    <span>您好,</span>
                </TextLoop>{" "}
                handsome
            </span>
        </div>
    )
}

export default Welcome