export default function getNum(key) {
	switch (key) {
		case "ACE":
			return 11;
		case "KING":
		case "QUEEN":
		case "JACK":
		case "10":
			return 10;
		case "9":
			return 9;
		case "8":
			return 8;
		case "7":
			return 7;
		case "6":
			return 6;
		case "5":
			return 5;
		case "4":
			return 4;
		case "3":
			return 3;
		case "2":
			return 2;
		default:
			break;
	}
}

export const blackjack = (num) => {
	if (num === 0) {
		return "Draw cards";
	} else if (num === 21) {
		return "Its BLACKJACK!! YOU WON!!";
	} else if (num < 21) {
		return "Draw a card, you may hit a Blackjack";
	} else {
		return "Game Over!! Try your luck next time";
	}
};
