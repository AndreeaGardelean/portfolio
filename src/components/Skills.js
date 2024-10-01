import React from "react";
import '../css/skills.css';
import Skill from "./skillItem";

const Skills = () => {
	return (
		<div id="skills">

			<div id="front-end">
				<p> Front End</p>
				<div id="front-end-skill">
					<Skill value={'HTML5'} />
					<Skill value={'CSS'} />
					<Skill value={'React'} />
					<Skill value={'React Native'} />
					<Skill value={'JavaScript'} />
					<Skill value={'JQuery'} />
					<Skill value={'IndexedDB'} />
				</div>
			</div>

			<div id="back-end">
				<p>Back End</p>
				<Skill value={'Java'} />
				<Skill value={'Python'} />
				<Skill value={'PostgreSQL'} />
				<Skill value={'MongoDB'} />
				<Skill value={'Spring Boot'} />
				<Skill value={'Node.js'} />
				<Skill value={'Falcon'} />
			</div>

			<div id="other">
				<p>Other</p>
				<Skill value={'User-Centered Design'} />
				<Skill value={'Software Verification [Dafny, mcrl2]'} />
				<Skill value={'Functional Programming [Haskell, Scala]'} />
				<Skill value={'Malicious Software'} />
				<Skill value={'Computational Optimisation'} />
				<Skill value={'Git/GitHub/GitLab'} />
				<Skill value={'Linux'} />
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