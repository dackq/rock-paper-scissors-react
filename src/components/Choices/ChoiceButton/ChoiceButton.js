import React from "react";

import "./ChoiceButton.css";

const ChoiceButton = props => {
	const hidden = props.configuration.visibility ? "" : "ChoiceButton_hidden";
	return (
		<div
			className={
				"ChoiceButton ChoiceButton_" +
				props.configuration.position +
				"-position " +
				hidden
			}
			onClick={() => props.clickHandler(props.configuration.type)}
		>
			<div
				className={
					"ChoiceButton__border ChoiceButton__border_" +
					props.configuration.type
				}
			>
				<div className={"ChoiceButton__middle-circle"}>
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
