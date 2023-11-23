/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React from "react";
import Typed from "typed.js";
import animateonmouseover from "./AnimaTxt";
function TypedApp(props) {
	const myname = "GabriWar";
	const [location, setLocation] = React.useState("");
	const [ipAddress, setIpAddress] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchLocation = async () => {
			const response = await fetch("https://ipapi.co/json/");
			const data = await response.json();
			setIpAddress(data.ip);
			setLocation(`${data.region}, ${data.country_name}`);
			setIsLoading(false);
		};
		fetchLocation();
	}, []);

	const [ended, setEnded] = React.useState(false);
	const handleClick = (callback) => {
		if (typeof callback === "function") {
			callback();
		}
	};

	const typed1 = React.useRef(null);
	React.useEffect(() => {
		const typed = new Typed(typed1.current, {
			strings: ended
				? [" "]
				: isLoading
				? ["-", "|", "/", "\\", "|", "/", "\\", "|"]
				: [
						"IF YOU'RE READING THIS",
						"HAVE BEEN IN A COMA FOR ALMOST <span style='color: #FF0000'>20 YEARS</span> NOW.",
						"WE ARE TRYING A NEW TECHNIQUE.",
						"WE DON'T KNOW WHERE THIS MESSAGE WILL END UP IN YOUR <span style='color: #06d'>DREAM</span>",
						"BUT WE HOPE WE'RE GETTING THROUGH.",
						"PLEASE WAKE UP, WE MISS YOU!",
						"<span style='font-size: 14px; color: #707070;'>+-------------------------------+</span>" +
							"\n" +
							"<span style='font-size: 14px; color: #707070;'>|</span>" +
							"<span style='font-size: 14px; color: #707070;'>Authenticating...              </span>" +
							"<span style='font-size: 14px; color: #707070;'>|</span>" +
							"\n" +
							"<span style='font-size: 14px; color: #707070;'>|</span>" +
							"<span style='font-size: 14px; font-family: monospace;'>Granting access to</span>" +
							" <span style='font-size: 14px; font-family: monospace;  color: #06d;'>{unknown}</span>" +
							"<span style='font-size: 14px; color: #707070;'>   </span>" +
							"<span style='font-size: 14px; font-family: monospace; color: #707070;'>|</span>" +
							"\n" +
							"<span style='font-size: 14px; font-family: monospace; color: #707070;'>+-------------------------------+</span>" +
							"\n" +
							"\nAccess granted! <span display: inline-block style='font-size: 14px; color: #0f0;'>[success]</span>",
						"Welcome back, <i style='color: #0f0'>" +
							ipAddress +
							" (" +
							location +
							")</i>!",
						"",
				  ],
			typeSpeed: props.typeSpeed || 10,
			backSpeed: props.backSpeed || 10,
			startDelay: props.startDelay || 30,
			backDelay: props.backDelay || 300,
			smartBackspace: props.smartBackspace || true,
			loop: props.loop || false,
			stay: props.stay || false,
			onComplete: (stay) => {
				setEnded(true);
				if (stay) {
					typed.destroy();
				}
			},
		});

		return () => {
			typed.destroy();
		};
	}, [props.strings, ended, location, ipAddress, isLoading]);

	return (
		<div>
			{ended ? null : (
				<div className="button" onClick={() => handleClick(setEnded(true))}>
					skip
				</div>
			)}
			{!ended ? null : (
				<div
					className="name"
					id="animate1"
					onMouseOver={() => animateonmouseover("animate1", "HELLO", "WORLD")}
				>
					HELLO WORLD
				</div>
			)}
			<pre ref={typed1} className="TypedApp" style={{ display: "inline" }} />
		</div>
	);
}

export default TypedApp;
