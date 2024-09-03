import React, {useState} from "react"
// import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './watercal.module.css'


function CalculateWater(){

    const navigate = useNavigate();

    function ToHome(){
    navigate('/');

    }

    function ToPrevPage(){
        navigate(-1)
    }

    const [isVisible, setIsVisible] = useState(false);

    const [hVal , sethVal] = useState()

    function CalculateIntake(){
        let selectGender = document.getElementById('selectGender').value
        let weight = document.getElementById('weight').value
        let PhysicalActivity = document.getElementById('PhysicalActivity').value
        let SelectAge = document.getElementById('SelectAge').value
        let Phases = document.getElementById('Phases').value
        // let labelPhases = document.getElementById('labelPhases')


        setIsVisible(true);




        // ...............MALE EQUATIONS....................


    if(document.getElementById('weight').value !== ""){
        let activityMultiplier;
        let ageMultiplier;
        
        if (selectGender === 'Male') {
            if(Phases === 'No'){

            switch (SelectAge) {
                case '0-3 years':
                    ageMultiplier = 1.5;
                    break;
                case '4-8 years':
                    ageMultiplier = 1.2;
                    break;
                case '9-18 years':
                case '19-50 years':
                    ageMultiplier = 1.0;
                    break;
                case '51+ years':
                    ageMultiplier = 0.9;
                    break;
                default:
                    ageMultiplier = 1.0;
            }
        
            switch (PhysicalActivity) {
                case 'Sedentary':
                    activityMultiplier = 1.0;
                    break;
                case 'Moderate':
                    activityMultiplier = 1.2;
                    break;
                case 'Active':
                    activityMultiplier = 1.5;
                    break;
                default:
                    activityMultiplier = 1.0;
            }
        
            let calc = weight * 0.04 * ageMultiplier * activityMultiplier;
            sethVal(calc.toFixed(2));
        }else{
            setIsVisible(false)
        }}
        

        // .................FEMALE EQUATION................

        let phaseAdd;

        if (selectGender === 'Female') {
            switch (SelectAge) {
                case '0-3 years':
                    ageMultiplier = 1.5;
                    break;
                case '4-8 years':
                    ageMultiplier = 1.2;
                    break;
                case '9-18 years':
                case '19-50 years':
                    ageMultiplier = 1.0;
                    break;
                case '51+ years':
                    ageMultiplier = 0.9;
                    break;
                default:
                    ageMultiplier = 1.0;
            }
        
            switch (PhysicalActivity) {
                case 'Sedentary':
                    activityMultiplier = 1.0;
                    break;
                case 'Moderate':
                    activityMultiplier = 1.2;
                    break;
                case 'Active':
                    activityMultiplier = 1.5;
                    break;
                default:
                    activityMultiplier = 1.0;
            }

            switch (Phases){
                case 'Pregnancy':
                    phaseAdd = 0.3
                    break;

                case 'Menstruation':
                    phaseAdd = 0.5
                    break;
                case 'No':
                    phaseAdd = 0;
                default:
                    phaseAdd = 0;
            }
        
            let calc = weight * 0.035 * ageMultiplier * activityMultiplier + phaseAdd;
            sethVal(calc.toFixed(2));
        }
    }else{
        setIsVisible(false)
    }

    document.getElementById('selectGender').selectedIndex = 'Male';
    document.getElementById('PhysicalActivity').selectedIndex = 'Sedentary';
    document.getElementById('Phases').selectedIndex = "No";
    document.getElementById('SelectAge').selectedIndex = "0-3 years"

    document.getElementById('weight').value = "";


        // selectGender = 'Male'
        // weight = ''
        // PhysicalActivity = 'Sedentary'
        // SelectAgePhases = 'No'

    // (selectGender === 'Male' && SelectAge === '0-3 years' && PhysicalActivity === 'Sedentary') ? sethVal(weight * 0.04 , hVal => hVal * 1.5) :
    // console.log('nothing')
                    
    }





    return(
        <>

        <div id={style.header}>
            <img onClick={ToPrevPage} id={style.logo} src="https://www.pikpng.com/pngl/b/246-2465368_back-arrow-comments-back-arrow-icon-png-clipart.png" alt="Logo" />
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


            <div className={style.waterCalcContainer}>
                
                <h1 className={style.heading}>Water Intake Calculator</h1>

                </div>

            <div className={style.LabelDiv}>
            <label htmlFor="" className={style.weightLabel}>Gender</label>
            </div>

            <div className={style.selectContainers}>
                <select id="selectGender" name="Gender" className={style.selectGender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div className={style.LabelDiv}>
            <label htmlFor="" className={style.weightLabel}>Weight (kg)</label>
            </div>

            <div className={style.selectContainers}>
                <input id="weight" type='number' min="0" name="weight" className={style.weight} />
            </div>

                <div className={style.LabelDiv}>
                <label htmlFor="" className={style.weightLabel}>Physical Activity Level:</label>
                </div>

                <div className={style.selectContainers}>
                    <select id="PhysicalActivity" name="PhysicalActivity" className={style.selectGender}>
                        <option value="Sedentary">Sedentary</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Active">Active</option>
                    </select>
                </div>

                <div className={style.LabelDiv}>
                <label htmlFor="" className={style.weightLabel}>Your Age:</label>
                </div>

                <div className={style.selectContainers}>
                    <select id="SelectAge" name="Age" className={style.selectGender}>
                        <option value="Sedentary">0-3 years</option>
                        <option value="Moderate">4-8 years</option>
                        <option value="Active">9-18 years</option>
                        <option value="Active">19-50 years</option>
                        <option value="Active">51+ years</option>
                    </select>
                </div>


            <div className={style.LabelDiv}>
            <label id="labelPhases" htmlFor="" className={style.LabelPhases} >Phases</label>
            </div>

            <div className={style.selectContainers}>
                <select id="Phases" className={style.Phases} name="Phases" >
                    <option value="No">No</option>
                    <option value="Pregnancy">Pregnancy</option>
                    <option value="Menstruation">Menstruation</option>
                </select>
            </div>


                <button onClick={CalculateIntake} className={style.CalculateBtn}>Calculate</button>

            {isVisible && (
                <>
            <div className={style.LastCalcContainer}>
                <div className={style.LastCalcDiv}>
                    <h1 className={style.LastCalcHead}>Recommended Daily Water Intake</h1>
                    <p className={style.LastCalc}>You should drink approximately <b>{hVal} liters</b> of water daily.</p>
                </div>

            </div>

            <div className={style.LastCalcContainer}>
                <div className={style.TipsContainer}>
                    <h1 className={style.LastCalcHead}>Tips for Staying Hydrated</h1>
                    <p className={style.TipsPara}>Carry a reusable water bottle with you.</p>
                    <p className={style.TipsPara}>Set reminders to drink water throughout the day.</p>
                    <p className={style.TipsPara}>Eat water-rich foods like fruits and vegetables.</p>
                </div>

            </div>

            </>
            )}

        </>
    )

}

export default CalculateWater