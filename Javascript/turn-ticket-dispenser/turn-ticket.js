class TurnTicket {
	constructor(turnNumber) {
		this._turnNumber = turnNumber;
	}

	turnNumber() {
		return this._turnNumber;
	}
}

module.exports = TurnTicket;
