import "./App.css";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
	const [deck, setDeck] = useState({});
	function getCards() {
		fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
			.then((res) => res.json())
			.then((data) => {
				setDeck(data);
			});
	}
	console.log(deck);
	return (
		<div className="App">
			<h1>BLACKJACK</h1>
			<Cards />
			<p>Draw a Card</p>
			<h2>Sum: 0</h2>
			<div>
				<button onClick={getCards}>Start A Game </button>
				<button className="blue">Draw A Game </button>
			</div>
		</div>
	);
}

export default App;
