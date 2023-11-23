import "./hoveranim.css";
import { useState } from "react";
function Resumeapp() {
	const [elements, setElements] = useState({
		intro: false,
		webDev: false,
		linux: false,
		edu: false,
		projects: false,
	});
    	function handleClick(element) {
		setElements((prevState) => ({
			...prevState,
			[element]: !prevState[element],
		}));
	}

    return (
        <div className="resumeEN">
				<div className="text">
					<div>
						<h1 className="techskills" onClick={() => handleClick("intro")}>
							<a className="link-color">Resume</a>
						</h1>
						{elements.intro && (
							<p>
								Hello, I'm Gabriel, a passionate Full Stack Developer currently
								studying Computer Science. With a deep-rooted love for Linux, I
								consider myself a power user,I love libre and open-source
								software. My curiosity extends beyond coding, I'm also
								proficient in image manipulation, And my love for debugging apps
								and modding Android phones adds to my technical skills.
							</p>
						)}
					</div>
					<h1 className="techskills" onClick={() => handleClick("webDev")}>
						<a className="link-color-web">WebDev</a>
					</h1>
					{elements.webDev && (
						<p>
							Proficient in both front-end and back-end technologies,
							experienced with HTML, CSS,{" "}
							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=javascript&sort="
								className="link-color-js"
							>
								{" "}
								JavaScript
							</a>{" "}
							(<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=c%2B%2B&sort="
								className="link-color-react"
							>
								React
							</a>, 							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=c%2B%2B&sort="
								className="link-color-rust"
							>
								{" "}
								Svelte
							</a>), and server-side scripting languages (<a
								href="https://github.com/GabriWar"
								className="link-color-projects"
							>
								Node.js
							</a>,{" "}
							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=c%2B%2B&sort="
								className="link-color-cpp"
							>
								{" "}
								C++
							</a>
							,{" "}
							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=rust&sort="
								className="link-color-rust"
							>
								{" "}
								Rust
							</a>
							,{" "}
							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=python&sort="
								className="link-color-py"
							>
								{" "}
								Python
							</a>
							).
						</p>
					)}
					<h1 className="techskills" onClick={() => handleClick("linux")}>
						<a className="link-color-linux">Linux</a>
					</h1>
					{elements.linux && (
						<p>
							Proficient with the 							<a
								href="https://github.com/GabriWar/LARBS"
								className="link-color-linux"
							>
								{" "}
								Linux
							</a> command line operation, comfortable with {" "}
														<a
								href="https://github.com/GabriWar"
								className="link-color"
							>

								Shell Scripting
							</a> and automation, adept at optimizing system
							performance and troubleshooting.
						</p>
					)}
					<h1 className="techskills" onClick={() => handleClick("edu")}>
						<a className="link-color-edu">Education</a>
					</h1>
					{elements.edu && (
						<p>
							Currently pursuing a degree in Computer ScienceI am dedicated to
							expanding my knowledge and staying at theforefront of technology.
							I also speak Portuguese (native), Engish (fluent),
							German(learning)
						</p>
					)}
					<h1 className="techskills" onClick={() => handleClick("projects")}>
						<a className="link-color-projects">Projects</a>
					</h1>

					{elements.projects && (
						<div className="links ">
							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=javascript&sort="
								className="link-color-js"
							>
								JavaScript
							</a> {" "}
							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=c%2B%2B&sort="
								className="link-color-cpp"
							>
								C++
							</a>{" "}
							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=python&sort="
								className="link-color-py"
							>
								Python
							</a>{" "}
							<a
								href="https://github.com/GabriWar?tab=repositories&q=&type=source&language=rust&sort="
								className="link-color-rust"
							>
								
								Rust
							</a>{" "}
							<a
								href="https://github.com/GabriWar"
								className="link-color-projects"
							>
								Github
							</a>
						</div>
					)}
				</div>
			</div>
            );
                    }
export default Resumeapp;