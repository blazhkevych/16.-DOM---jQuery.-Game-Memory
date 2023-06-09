// Wait for the document to be fully loaded
$(document).ready(function () {
	var cards = [];  // Array to store all the cards
	var openedCards = [];  // Array to store opened cards
	var matchedCards = [];  // Array to store matched cards
	var isGameStarted = false;

	// Generate the cards
	function generateCards() {
		var cardTypes = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

		// Create two instances of each card type
		for (var i = 0; i < cardTypes.length; i++) {
			cards.push(cardTypes[i]);
			cards.push(cardTypes[i]);
		}

		// Shuffle the cards
		cards.sort(function () { return 0.5 - Math.random(); });
	}

	// Render the cards on the page
	function renderCards() {
		var cardContainer = $('#cards');
		cardContainer.empty();

		var cardRow1 = $('<div>').addClass('card-row');
		var cardRow2 = $('<div>').addClass('card-row');

		for (var i = 0; i < cards.length; i++) {
			var card = $('<img>')
				.attr('src', 'img/7.png')
				.attr('alt', 'Card ' + cards[i])
				.attr('data-card', cards[i])
				.click(cardClickHandler);

			if (i < 6) {
				cardRow1.append(card);
			} else {
				cardRow2.append(card);
			}
		}

		cardContainer.append(cardRow1).append(cardRow2);
	}

	// Card click event handler
	function cardClickHandler() {
		var currentCard = $(this);

		// Check if the card is already matched or opened
		if (currentCard.hasClass('matched') || openedCards.length >= 2) {
			return;
		}

		// Open the current card
		currentCard.attr('src', 'img/' + currentCard.data('card'));

		// Add the current card to the opened cards array
		openedCards.push(currentCard);

		// Check if two cards are opened
		if (openedCards.length === 2) {
			var card1 = openedCards[0];
			var card2 = openedCards[1];

			// Check if the opened cards match
			if (card1.data('card') === card2.data('card')) {
				// Add matched class to the matched cards
				card1.addClass('matched');
				card2.addClass('matched');
				matchedCards.push(card1, card2);

				// Clear the opened cards array
				openedCards = [];

				// Check if all pairs are matched
				if (matchedCards.length === cards.length) {
					// Delay showing the game over message to display the last matched pair
					setTimeout(function () {
						// Display game over message
						alert('Congratulations, you have won!');
					}, 1000);
				}
			} else {
				// Delay closing the unmatched cards
				setTimeout(function () {
					card1.attr('src', 'img/7.png');
					card2.attr('src', 'img/7.png');
					openedCards = [];
				}, 2000);
			}
		}
	}

	// Add click event handler to start button
	$('#start-button').click(function () {
		if (!isGameStarted) {
			isGameStarted = true;
			$(this).text('Finish');

			generateCards();
			renderCards();
		} else {
			// Finish button pressed, reveal all cards and reset the game
			cards = [];
			openedCards = [];
			matchedCards = [];
			isGameStarted = false;

			renderCards();

			$(this).text('Start');
		}
	});
});
