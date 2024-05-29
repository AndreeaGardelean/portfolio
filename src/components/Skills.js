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
					<Skill value={'JavaScript'} />
					<Skill value={'JQuery'} />

				</div>
			</div>

			<div id="back-end">
				<p>Back End</p>
				<Skill value={'Java'} />
				<Skill value={'Python'} />
				<Skill value={'C'} />
				<Skill value={'PostgreSQL'} />
				<Skill value={'MongoDB'} />
				<Skill value={'IndexedDB'} />
				<Skill value={'Spring Boot'} />
				<Skill value={'Falcon'} />
				<Skill value={'HTML5'} />
				<Skill value={'Node.js'} />
				<Skill value={'Haskell'} />
				<Skill value={'Scala'} />
				<Skill value={'Dafny'} />
				<Skill value={'mcrl2'} />
			</div>

			<div id="other">
				<p>Other</p>
				<Skill value={'Software Verification'} />
				<Skill value={'Functional Programming'} />
				<Skill value={'Malicious Software'} />
				<Skill value={'Computational Optimisation'} />
				<Skill value={'Git/GitHub/GitLab'} />
				<Skill value={'Linux'} />
				<Skill value={'Vue'} />
			</div>
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