# jsbg
Write a single-player betting game that runs in the browser. The player starts off with a bankroll of $100 and bets money to guess a number randomly chosen by the game. If the player loses all their money, the game ends.

The game should ask the player to place a bet between $5 and $10, then to guess a number between 1 and 10.

If the player guesses the exact number chosen by the game, they win the bet and their bankroll increases by the amount they bet. For example, if the player has $50, bets $10 on number 7, and the game chose the number 7, then the player wins $10 and now has a bankroll of $60.

If the player guesses a number that is off by 1, that is, the player guesses either one number higher or one number lower than the computer's pick, they don't lose any money. For example, if the player has $50, bets $10 on number 7, and the game chose the number 8, then the player keeps their bet and still has a bankroll of $50.

If the player guesses any other number, they lose the bet and their bankroll decreases by the amount they bet. For example, if the player has $50, bets $10 on number 7, and the game chose the number 2, then the player loses $10 and now has a bankroll of $40.
