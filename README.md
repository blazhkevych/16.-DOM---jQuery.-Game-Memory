# 16.-DOM---jQuery.-Game-Memory

Implement a memory game.
When the page loads, the user sees all sorts of
cards and to start the game must click on the Start button.

![image](https://github.com/blazhkevych/16.-DOM---jQuery.-Game-Memory/assets/65856963/920a9950-1c1f-48a2-b48d-1aa89dd7c750)

After pressing the Start button, the game starts.
All cards are turned face down to the user.
The Start button changes to a Finish button. Now the user can
click on cards.

![image](https://github.com/blazhkevych/16.-DOM---jQuery.-Game-Memory/assets/65856963/001dd811-ba05-48eb-8d80-138870a237b0)

When you click on a card, it rotates to
user. Only 2 cards can be opened at the same time,
that is, when you try to open the third card, nothing should
take place. When opening a second card, you need to check
whether the drawings on the open cards match. If the drawings are not
match, then close them after 2 seconds.

![image](https://github.com/blazhkevych/16.-DOM---jQuery.-Game-Memory/assets/65856963/680f64f9-f2cf-4e65-ac4e-0919a9f176bf)

If the pictures match, then the cards remain forever.
open and become translucent. After that the user
can open other cards again.

![image](https://github.com/blazhkevych/16.-DOM---jQuery.-Game-Memory/assets/65856963/e4249e51-d1bd-464f-88af-a3049f0bd17a)

When the user opens all pairs of cards, it is necessary
display a message that the game is over.

![image](https://github.com/blazhkevych/16.-DOM---jQuery.-Game-Memory/assets/65856963/f4043911-da29-473f-b33e-9701eb5728bb)

During the game, the user has the opportunity to press
the Finish button.
If the Finish button is pressed before the end of the game, then the user should open all the cards and further possibilities
he will not play.
After the game ends, the inscription on the button changes to Start.
