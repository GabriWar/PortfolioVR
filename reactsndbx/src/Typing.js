import React, { useEffect, useRef, useState } from "react";
import NameAnimation from "./test";
import Typed from "typed.js";

const TypedJsPlay = () => {
	const typedRef = useRef(null);
	const [location, setLocation] = useState("");
	const [ipAddress, setIpAddress] = useState("");

	useEffect(() => {
		const fetchLocation = async () => {
			const response = await fetch("https://ipapi.co/json/");
			const data = await response.json();
			const ip = data.ip;
			setIpAddress(ip);
			setLocation(`${data.region}, ${data.country_name}`);
		};
		fetchLocation();
	}, []);

	useEffect(() => {
		const options = {
			strings: skip
				? [" "]
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
							ipAddress.toUpperCase() +
							" (" +
							location.toUpperCase() +
							")</i>!",
						"",
				  ],
			typeSpeed: 10,
			backSpeed: 10,
			backDelay: 300,
			startDelay: 30,
			smartBackspace: true,
			loop: false,
			onComplete: () => {
				typedRef.current.destroy();
			},
		};
		typedRef.current = new Typed(".typed-js", options);
		return () => {
			typedRef.current.destroy();
		};
	}, [ipAddress, location]);
};

export default TypedJsPlay;
