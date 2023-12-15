import React from "react";
import '../css/skills.css';
import Skill from "./skillItem";

const Skills = () => {
  return (
		<div id="skills">
			
    	<div id="front-end">
				<p> Front End</p>
				<div id="front-end-skill">
					<Skill value={'HTML'} />
					<Skill value={'CSS'} />
					<Skill value={'React'} />
					<Skill value={'React Native'} />
					<Skill value={'Javascript'} />
					
				</div>
    	</div>

		<div id="back-end">
				<p>Back End</p>
				<Skill value={'Java'} />
				<Skill value={'Python'} />
				<Skill value={'PostgreSQL'} />
				<Skill value={'MongoDB'} />
				<Skill value={'IndexedDB'} />
				<Skill value={'Spring '} />
				<Skill value={'Falcon'} />
		</div>

		{/* <div id="soft-skills">
				<p>Soft skills</p>
				<Skill value={'Java'} />
					
		</div> */}
	</div>
    )
}

const styles = {
    image: {
        width: '100%',
        marginTop: '1em',
        borderRadius: 20
    }
}
export default Skills;