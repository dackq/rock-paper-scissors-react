import React from "react";
import "./Title.css";

const Title = props => {
	return (
		<div className="Title">
			<h1 className="Title__logo">ROCK PAPER SCISSORS</h1>
			<div className="Title__score-box">
				<p className="Title__score-box-title">SCORE</p>
				<p className="Title__score-box-number">{props.score}</p>
			</div>
		</div>
	);
};

export default Title;
