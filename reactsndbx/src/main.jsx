import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TypedApp from "./typedApp.jsx";
import Portfolio from "./portfolio.jsx";
import Resume from "./resume.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <TypedApp /> */}
		<Portfolio />
		<Resume />
	</React.StrictMode>,
);
