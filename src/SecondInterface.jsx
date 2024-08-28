import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from './assets/Designer8.jpeg'
import WaterImg from './assets/water image.png'
import ProteinImg from './assets/protein image.png'
import CalImg from './assets/cal image.png'
import style from './secint.module.css'

function SecInterface(){

    const navigate = useNavigate();

    function ToHome(){
        navigate('/');
    }

    function ToCalculateWater(){
        navigate('/CalculateWater');
    }

    function ToCalculateProtein(){
        navigate('/ProteinCalc');
    }

    function ToCalculateCalories(){
        navigate('/CaloriesCalc')
    }

    return(
        <>
        <div id={style.header}>
            <img id={style.logo} src={Logo} alt="Logo" />
            <h1>HydroNutriCalc</h1>
            <div id={style.ImgContainer}>
                <img
                    onClick={ToHome}
                    id={style.home}
                    src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small_2x/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png"
                    alt="Home"
                />
            </div>
        </div>

        <div id={style.IntakeContainer}>
            <div id={style.CalculateWaterIntake} className={style.intakeSection}>
                <img src={WaterImg} id={style.WaterImg} alt="Water" />
                <button onClick={ToCalculateWater} id={style.WaterBtn}>Calculate Water Intake</button>
            </div>

            <div id={style.CalculateProteinIntake} className={style.intakeSection}>
                <img src={ProteinImg} id={style.ProteinImg} alt="Protein" />
                <button onClick={ToCalculateProtein} id={style.ProteinBtn}>Calculate Protein Intake</button>
            </div>

            <div id={style.CalculateCalIntake} className={style.intakeSection}>
                <img src={CalImg} id={style.CalImg} alt="Calories" />
                <button onClick={ToCalculateCalories} id={style.CalBtn}>Calculate Calories Intake</button>
            </div>
        </div>
        </>
    )
}

export default SecInterface;
