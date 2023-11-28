/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import animateonmouseover from "./AnimaTxt";
import "./hoveranim.css";
import generateRandomString from "./randomstring";

function Portfolio() {
	const [bg, setBg] = useState("GabriWar".repeat(1000));

	function handleMouseMove(event) {
		const mouseX = event.clientX;
		const mouseY = event.clientY;
		// Use mouseX and mouseY as needed
		setBg(generateRandomString(3000));
		document.documentElement.style.setProperty("--x", `${mouseX}px`);
		document.documentElement.style.setProperty("--y", `${mouseY}px`);
	}

	return (
		<div className="bg" onMouseMove={handleMouseMove}>
			<div className="hover"></div>

			<div
				id="animate"
				className="name"
				href="https://github.com/GabriWar"
				onMouseOver={() => {
					animateonmouseover("animate", "Gabriel", "Guerra");
				}}
			>
				GABRIWAR
			</div>
			{bg}
		</div>
	);
}

export default Portfolio;
