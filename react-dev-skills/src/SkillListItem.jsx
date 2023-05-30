import './SkillListItem.css'

export default function SkillListItem({name, level}){
    return(
        <li className="SkillListItem">
            {name}
            <div class="level">
                <p>Level: {level}</p>
            </div>
        </li>
    )
}