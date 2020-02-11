import React from "react";
import "./Outcome.css";

const outcome = props => {
	return (
		<React.Fragment>
			<div
				className={
					"Outcome" + (props.visibility ? "" : " Outcome_hidden")
				}
			>
				<h2 className="Outcome__label">{props.outcome}</h2>
				<button className="Outcome__button" onClick={props.reset}>
					PLAY AGAIN
				</button>
			</div>
		</React.Fragment>
	);
};

export default outcome;
