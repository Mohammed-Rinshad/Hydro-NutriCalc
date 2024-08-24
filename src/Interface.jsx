import React from 'react';
import { useNavigate } from 'react-router-dom';

import BodyPic from './assets/Designer17.jpeg'

function Interface(){

    const navigate = useNavigate();

    const goToSecInterface = () => {
      navigate('/SecInterface');
    };

    return(
        <>
            
            <hr id="top-hr"></hr>
            <h1 id="title">HydroNutriCalc</h1>
            <hr id="bottom-hr"></hr>
            <p>Track daily nutrition intake easily.</p>

            <div id='body-div'>
                <img id='body-img' src={BodyPic}></img>
            </div>

            <div id='btnContainer'>
            <button id='getStarted' onClick={goToSecInterface}>Get started</button>
            </div>
        </>
    )
}

export default Interface