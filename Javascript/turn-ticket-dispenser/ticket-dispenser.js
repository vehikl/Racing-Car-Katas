const TurnNumberSequence = require('./turn-number-sequence');
const TurnTicket = require('./turn-ticket');

class TicketDispenser {
	getTurnTicket() {
		var newTurnNumber = TurnNumberSequence.getNextTurnNumber();
		var newTurnTicket = new TurnTicket(newTurnNumber);

		return newTurnTicket;
	}
}

module.exports = TicketDispenser;