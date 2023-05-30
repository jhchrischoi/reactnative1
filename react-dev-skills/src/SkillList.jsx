import SkillListItem from "./SkillListItem"


export default function SkillList({skills}){
    return(
        <>
        <ul className="SkillList">
            {skills.map((skill, idx) => (
                 <SkillListItem name={skill.name} level={skill.level} key={idx} index={idx}/>
            ))
            }
        </ul>
        </>
    )
}