import React from "react";

import "./ChoiceButton.css";

const ChoiceButton = props => {
	return (
		<div
			className={"ChoiceButton ChoiceButton_" + props.type + "-position"}
		>
			<div
				className={
					"ChoiceButton__border ChoiceButton__border_" + props.type
				}
			>
				<div className={"ChoiceButton__center"}>
					<div className="ChoiceButton__icon">{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default ChoiceButton;
