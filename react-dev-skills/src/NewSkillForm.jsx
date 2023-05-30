// import Form from './Form'
// import Select from './Select'
import './NewSkillForm.css'
import { useState } from "react";

function NewSkillForm({addSkill}){
    const [newSkillInput, setNewSkillInput] = useState('')
    const [newLevelInput, setNewLevelInput] = useState('1')

    function handleAddSkill(e){
        e.preventDefault()
        addSkill({name:newSkillInput, level:newLevelInput})
        setNewSkillInput('');
        setNewLevelInput('1');
    }

    return(
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
            {/* <Form /> */}
            Skill <input value={newSkillInput} onChange={(evt)=> setNewSkillInput(evt.target.value)} type="text" required pattern=".{4,}" />
            <br></br>
            Level
            <select value={newLevelInput} onChange={(evt)=> setNewLevelInput(evt.target.value)} name="numbers">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            
            <button>ADD SKILL</button>
        </form>
    )
}

export default NewSkillForm;