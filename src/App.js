import "./App.css";
import Nav from "./components/Nav";
import getNum, { blackjack } from "./utilities";
import { useState } from "react";
function App() {
	let yourPull = 0;

	const [deck, setDeck] = useState({});
	const [play, setPlay] = useState([]);

	const getCards = () => {
		fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
			.then((res) => res.json())
			.then((data) => {
				setDeck(data);
			});
	};
	const drawCards = () => {
		fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`)
			.then((res) => res.json())
			.then((data) => {
				setPlay(data.cards);
			});
	};
	const drawACard = () => {
		fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
			.then((res) => res.json())
			.then((data) => {
				setPlay((prevState) => {
					return [...prevState, data.cards[0]];
				});
			});
	};
	const startNew = () => {
		yourPull = 0;
		setPlay([]);
		getCards();
	};
	const newPlay = play.map((item) => {
		yourPull += getNum(item.value);
		return <img className="card" src={item.image} alt="" />;
	});

	let btn = "";

	if (deck.deck_id && yourPull === 0) {
		btn = (
			<button className="blue" onClick={drawCards}>
				Draw Cards{" "}
			</button>
		);
	}
	if (play.length >= 2 && yourPull < 21) {
		btn = (
			<button className="yellow" onClick={drawACard}>
				Draw A Card{" "}
			</button>
		);
	}
	if (yourPull >= 21) {
		btn = (
			<button className="red" onClick={startNew}>
				Start New Game{" "}
			</button>
		);
	}
	return (
		<div className="App">
			<Nav />
			<h1>BLACKJACK</h1>
			<section>{newPlay}</section>
			<p>{blackjack(yourPull)}</p>
			<h2>Sum: {yourPull}</h2>
			{btn || <button onClick={getCards}>Start A Game </button>}
		</div>
	);
}

export default App;
