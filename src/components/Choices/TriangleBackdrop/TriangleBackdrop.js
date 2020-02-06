import React from "react";
import "./TriangleBackdrop.css";

const TriangleBackdrop = props => {
	return (
		<div className="Triangle">
			<div className="Triangle__connection Triangle__connection_top"></div>
			<div className="Triangle__connection Triangle__connection_right"></div>
			<div className="Triangle__connection Triangle__connection_left"></div>
		</div>
	);
};

export default TriangleBackdrop;
