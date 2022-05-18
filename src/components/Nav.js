import { useState } from "react";

const Nav = () => {
	const [style, setStyle] = useState(false);
	function show() {
		setStyle((prev) => !prev);
	}
	function hide() {
		setStyle((prev) => !prev);
	}
	let myStyle = style ? "yes" : "no";
	console.log(myStyle);
	return (
		<nav>
			<div className={`${myStyle} overlay`}>
				<div className="modal">
					<h3>Basic Blackjack Rules:</h3>
					<p>
						The goal of blackjack is to beat the dealer's hand without going
						over 21.
					</p>
					<p>If you go over 21 you bust, and the dealer wins</p>
					<p>
						If you are dealt 21 from the start (Ace & 10), you got a blackjack.
					</p>
					<button className="modal-btn" onClick={hide}>
						Close
					</button>
				</div>
			</div>
			<p className="target" onClick={show}>
				How to play?
			</p>
		</nav>
	);
};

export default Nav;
