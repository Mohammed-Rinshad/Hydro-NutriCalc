import style from './watercal.module.css'
// import CalculateWater from './WaterCalc'
import React, {useState} from "react"
// import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProteinCalc(){

    const navigate = useNavigate();


    
    function GoHome(){
        navigate('/');

    }

    function GoBack(){
        navigate(-1);

    }

    const [isVisible, setIsVisible] = useState(false);

    const [ProteinVal , setProteinVal] = useState()

    function CalculateProtein(){
        let selectGender = document.getElementById('selectGender').value
        let weight = document.getElementById('weight').value
        let PhysicalActivity = document.getElementById('PhysicalActivity').value
        let SelectAge = document.getElementById('SelectAge').value
        let Phases = document.getElementById('Phases').value

        setIsVisible(!isVisible);

                // ...............MALE EQUATIONS....................


    
        let activityMultiplier;
        let ageMultiplier;
        
        if (selectGender === 'Male') {
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
                    activityMultiplier = 1.3;
                    break;
                case 'Active':
                    activityMultiplier = 1.6;
                    break;
                default:
                    activityMultiplier = 1.0;
            }
        
            let calc = weight * 0.8 * ageMultiplier * activityMultiplier;
            setProteinVal(calc.toFixed(2));
        }
        

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
                    activityMultiplier = 1.3;
                    break;
                case 'Active':
                    activityMultiplier = 1.6;
                    break;
                default:
                    activityMultiplier = 1.0;
            }

            switch (Phases){
                case 'Pregnancy':
                    phaseAdd = 15
                    break;

                case 'Menstruation':
                    phaseAdd = 20
                    break;
                case 'No':
                    phaseAdd = 0;
                default:
                    phaseAdd = 0;
            }
        
            let calc = weight * 0.7 * ageMultiplier * activityMultiplier + phaseAdd;
            setProteinVal(calc.toFixed(2));
        }
    }


    return(
        <>
        <div id={style.header}>
            <img onClick={GoBack} id={style.logo} src="https://www.pikpng.com/pngl/b/246-2465368_back-arrow-comments-back-arrow-icon-png-clipart.png" alt="Logo" />
            <h1>HydroNutriCalc</h1>
            <div id={style.ImgContainer}>
                <img
                    onClick={GoHome}
                    id={style.home}
                    src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small_2x/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png"
                    alt="Home"
                />
            </div>
        </div>


            <div className={style.waterCalcContainer}>
                
                <h1 className={style.heading}>Protein Intake Calculator</h1>

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


                <button onClick={CalculateProtein} className={style.CalculateBtn}>{isVisible ? '' : ''}Calculate</button>
      {isVisible && (
        <div className={style.LastCalcContainer}>
          <div className={style.LastCalcDiv}>
            <h1 className={style.LastCalcHead}>Recommended Daily Intake</h1>
            <p className={style.LastCalc}>
              You should take approximately <b>{ProteinVal} grams</b> of protein daily.
            </p>
          </div>
        </div>
      )}


{isVisible && (
        <div className={style.LastCalcContainer}>
          <div className={style.TipsContainer}>
            <h1 className={style.LastCalcHead}>Tips for Staying Protein-rich</h1>
            <p className={style.TipsPara}>Snack on nuts.</p>
            <p className={style.TipsPara}>Add eggs to breakfast.</p>
            <p className={style.TipsPara}>Choose lean meats for meals.</p>
            <p className={style.TipsPara}>Include chicken in meals.</p>
          </div>
        </div>
      )}
    
        </>
    )
}

export default ProteinCalc