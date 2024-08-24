import React, {useState} from 'react'
import style from './watercal.module.css'

function Test(){

    const [select , setSelect] = useState()


    function Calculate(){
        
        let selectGender = document.getElementById('selectGender').value
        let weight = document.getElementById('weight').value

        if(selectGender === 'Male'){
            setSelect(weight * 0.04)
        }
    }


    return(
        <>
            <select id="selectGender">
                <option>Male</option>
                <option>Female</option>
            </select>

            <input id="weight" type="number" />

            <button onClick={Calculate} id='btn'>calculate</button>

            <h1>{select}</h1>

        </>
    )
}

export default Test






// if(selectGender === 'Female' , SelectAge === '0-3 years' , PhysicalActivity === 'Sedentary' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Sedentary' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Sedentary' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Sedentary' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Sedentary' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '0-3 years'  , PhysicalActivity === 'Moderate' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Moderate' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Moderate' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Moderate' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Moderate' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '0-3 years'  , PhysicalActivity === 'Active' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Active' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Active' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Active' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Active' , Phases === 'No'){

// }else if(selectGender === 'Female' , SelectAge === '0-3 years' , PhysicalActivity === 'Sedentary' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Sedentary' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Sedentary' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Sedentary' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Sedentary' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '0-3 years'  , PhysicalActivity === 'Moderate' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Moderate' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Moderate' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Moderate' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Moderate' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '0-3 years'  , PhysicalActivity === 'Active' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Active' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Active' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Active' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Active' , Phases === 'Pregnancy'){

// }else if(selectGender === 'Female' , SelectAge === '0-3 years' , PhysicalActivity === 'Sedentary' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Sedentary' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Sedentary' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Sedentary' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Sedentary' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '0-3 years'  , PhysicalActivity === 'Moderate' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Moderate' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Moderate' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Moderate' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Moderate' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '0-3 years'  , PhysicalActivity === 'Active' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '4-8 years' , PhysicalActivity === 'Active' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '9-18 years' , PhysicalActivity === 'Active' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '19-50 years' , PhysicalActivity === 'Active' , Phases === 'Menstruation'){

// }else if(selectGender === 'Female' , SelectAge === '51+ years' , PhysicalActivity === 'Active' , Phases === 'Menstruation'){

// }