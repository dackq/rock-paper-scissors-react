import React from "react";

import "./ChoiceButton.css";

const ChoiceButton = props => {
	return (
		<div
			className={
				"ChoiceButton ChoiceButton_" +
				props.configuration.position +
				"-position"
			}
			onClick={() => props.clickHandler(props.configuration.type)}
		>
			<div
				className={
					"ChoiceButton__border ChoiceButton__border_" +
					props.configuration.type
				}
			>
				<div className={"ChoiceButton__middle"}>
					<img
						src={props.configuration.icon}
						alt={props.configuration.type}
						className="ChoiceButton__icon"
					/>
				</div>
			</div>
		</div>
	);
};

export default ChoiceButton;
