import style from './watercal.module.css'
// import CalculateWater from './WaterCalc'
import React, {useState} from "react"
// import React from 'react';
import { useNavigate } from 'react-router-dom';

function CaloriesCalc(){

    // const navigate = useNavigate();


    
    // function GoHome(){
    //     navigate('/');

    // }

    // function GoBack(){
    //     navigate(-1);

    // }

    const [isVisible, setIsVisible] = useState(false);

    const [CaloriesVal , setCaloriesVal] = useState()

    function CalculateCalories(){
        let selectGender = document.getElementById('selectGender').value
        let weight = document.getElementById('weight').value
        let height = document.getElementById('height').value
        let PhysicalActivity = document.getElementById('PhysicalActivity').value
        let age = document.getElementById('age').value
        let Phases = document.getElementById('Phases').value

        setIsVisible(true);

                // ...............MALE EQUATIONS....................


    if(document.getElementById('weight').value && document.getElementById('height').value && document.getElementById('age').value !== ""){
        let activityMultiplier;
        // let ageMultiplier;
        
        if (selectGender === 'Male') {  
            if(Phases === 'No'){
            
            switch (PhysicalActivity) {
                case 'Sedentary':
                    activityMultiplier = 1.2;
                    break;
                case 'Lightly active':
                    activityMultiplier = 1.375;
                    break
                case 'Moderate':
                    activityMultiplier = 1.55;
                    break;
                case 'Very active':
                    activityMultiplier = 1.725;
                    break;
                case 'Super active':
                    activityMultiplier = 1.9;
                     break;
                default:
                    activityMultiplier = 1.0;
            }
        
            let calc = 10 * weight + 6.25 * height - 5 * age + 5 * activityMultiplier;
            setCaloriesVal(calc.toFixed(2));
        }else{
            setIsVisible(false)
        }}
        

        // .................FEMALE EQUATION................

        let phaseAdd;

        if (selectGender === 'Female') {
            switch (PhysicalActivity) {
                case 'Sedentary':
                    activityMultiplier = 1.2;
                    break;
                case 'Lightly active':
                    activityMultiplier = 1.375;
                    break
                case 'Moderate':
                    activityMultiplier = 1.55;
                    break;
                case 'Very active':
                    activityMultiplier = 1.725;
                    break;
                case 'Super active':
                    activityMultiplier = 1.9;
                     break;
                default:
                    activityMultiplier = 1.0;
            }

            switch (Phases){
                case 'Pregnancy':
                    phaseAdd = 500
                    break;

                case 'Menstruation':
                    phaseAdd = 300
                    break;
                case 'No':
                    phaseAdd = 0;
                    break;
                case 'Lactation':
                    phaseAdd = 480;
                    break;
                default:
                    phaseAdd = 0;
            }
        
            let calc = 10 * weight + 6.25 * height - 5 * age - 161 * activityMultiplier + phaseAdd;
            setCaloriesVal(calc.toFixed(2));
        }
    }else{
        setIsVisible(false)
    }

        document.getElementById('selectGender').selectedIndex = 'Male';
        document.getElementById('PhysicalActivity').selectedIndex = 'Sedentary';
        document.getElementById('Phases').selectedIndex = "No";

        document.getElementById('weight').value = "";
        document.getElementById('height').value = "";
        document.getElementById('age').value = "";
    }


    return(
        <>
        <div id={style.header}>
            {/* <img onClick={GoBack} id={style.logo} src="https://www.pikpng.com/pngl/b/246-2465368_back-arrow-comments-back-arrow-icon-png-clipart.png" alt="Logo" /> */}
            <h1>HydroNutriCalc</h1>
            {/* <div id={style.ImgContainer}> */}
                <img
                    // onClick={GoHome}
                    // id={style.home}
                    // src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small_2x/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png"
                    // alt="Home"
                />
            {/* </div> */}
        </div>


            <div className={style.waterCalcContainer}>
                
                <h1 className={style.heading}>Calories Intake Calculator</h1>

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
            <label htmlFor="" className={style.weightLabel}>Height (cm)</label>
            </div>

            <div className={style.selectContainers}>
                <input id="height" type='number' min="0" name="height" className={style.weight} /> 
            </div>

                <div className={style.LabelDiv}>
                <label htmlFor="" className={style.weightLabel}>Physical Activity Level:</label>
                </div>

                <div className={style.selectContainers}>
                    <select id="PhysicalActivity" name="PhysicalActivity" className={style.selectGender}>
                        <option value="Sedentary">Sedentary</option>
                        <option value="Lightly active">Lightly active</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Very active">Very active</option>
                        <option value="Super active">Super active</option>
                    </select>
                </div>

                <div className={style.LabelDiv}>
                <label htmlFor="" className={style.weightLabel}>Enter Your Age:</label>
                </div>

                <div className={style.selectContainers}>
                <input id="age" type='number' min="0" name="age" className={style.weight} /> 
            </div>

                {/* <div className={style.selectContainers}>
                    <select id="SelectAge" name="Age" className={style.selectGender}>
                        <option value="Sedentary">0-3 years</option>
                        <option value="Moderate">4-8 years</option>
                        <option value="Active">9-18 years</option>
                        <option value="Active">19-50 years</option>
                        <option value="Active">51+ years</option>
                    </select>
                </div> */}


            <div className={style.LabelDiv}>
            <label id="labelPhases" htmlFor="" className={style.LabelPhases} >Phases</label>
            </div>

            <div className={style.selectContainers}>
                <select id="Phases" className={style.Phases} name="Phases" >
                    <option value="No">No</option>
                    <option value="Pregnancy">Pregnancy</option>
                    <option value="Menstruation">Menstruation</option>
                    <option value="Lactation">Lactation</option>
                </select>
            </div>


                <button onClick={CalculateCalories} className={style.CalculateBtn}>{isVisible ? '' : ''}Calculate</button>
                {isVisible && (
                <>
                    <div className={style.LastCalcContainer}>
                        <div className={style.LastCalcDiv}>
                            <h1 className={style.LastCalcHead}>Recommended Daily Intake</h1>
                            <p className={style.LastCalc}>
                                You should take approximately <b>{CaloriesVal} grams</b> of calories daily.
                            </p>
                        </div>
                    </div>

                    <div className={style.LastCalcContainer}>
                        <div className={style.TipsContainer}>
                            <h1 className={style.LastCalcHead}>Tips for Staying Calorie-rich</h1>
                            <p className={style.TipsPara}>Add Healthy Fats: Include avocados, nuts, and oils in your diet.</p>
                            <p className={style.TipsPara}>Increase Portion Sizes: Gradually eat larger portions at meals.</p>
                            <p className={style.TipsPara}>Drink smoothies.</p>
                        </div>
                    </div>
                </>
            )}
    
        </>
    )
}

export default CaloriesCalc