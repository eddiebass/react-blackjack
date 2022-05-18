import React from "react";

const Cards = (props) => {
	return (
		<section>
			<img className="card" src={props.image} alt="" />
		</section>
	);
};

export default Cards;
