import React from "react";
import "./Labels.css";

const labels = props => {
	return (
		<div
			className={
				"label__label-block" +
				(props.labelVisibility ? "" : " label__label-block_hide")
			}
		>
			<div className="label label_player">YOU PICKED</div>
			<div className="label label_house">THE HOUSE PICKED</div>
		</div>
	);
};

export default labels;
