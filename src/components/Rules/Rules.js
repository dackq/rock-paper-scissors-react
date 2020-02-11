import React from "react";
import "./Rules.css";

import rulesImage from "../../images/image-rules.svg";
import closeIcon from "../../images/icon-close.svg";

const Rules = props => {
	return (
		<React.Fragment>
			<div
				className={
					"Rules" + (props.modalVisible ? "" : " Rules_hidden")
				}
			>
				<div className="Rules__content">
					<h2 className="Rules__title">RULES</h2>
					<img
						src={rulesImage}
						alt="Rock beats scissors. Scissors beats paper. Paper beats rock."
						className="Rules__image"
					/>
				</div>
				<button
					className="Rules__button Rules__close"
					onClick={() => props.setModalVisibility(false)}
				>
					<img src={closeIcon} alt="X" />
				</button>
			</div>
		</React.Fragment>
	);
};

export default Rules;
