const TurnNumberSequence = require('./turn-number-sequence');
const TurnTicket = require('./turn-ticket');

TicketDispenser = function () {
};

TicketDispenser.prototype = {

	getTurnTicket: function () {

			var newTurnNumber = TurnNumberSequence.getNextTurnNumber();
			var newTurnTicket = new TurnTicket(newTurnNumber);

			return newTurnTicket;
	}

};

module.exports = TicketDispenser;