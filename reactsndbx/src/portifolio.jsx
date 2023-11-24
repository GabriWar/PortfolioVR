/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import animateonmouseover from "./AnimaTxt";
import "./hoveranim.css";
import generateRandomString from "./randomstring";
function Portifolio() {


	const [bg, setBg] = useState("GabriWar".repeat(1000));

	function handleMouseMove() {
		setBg(generateRandomString(3000));
	}

	return (

		<div className="bg" onMouseMove={handleMouseMove}>
				<div
					id="animate"
					className="name" href="https://github.com/GabriWar"
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

export default Portifolio;
