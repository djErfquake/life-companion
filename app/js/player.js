class Player {

  constructor(playerName) {
    this.name = playerName;

    this.goneThisTurn = false;

    this.color = Please.make_color();

    this.lifepoints = 0;
    this.money = 0;
  }

  startTurn() {

    // add salary

    // subtract money if in debt
    if (this.money < 0) {
      this.money -= this.money / 10;
    }

    // subtract money for gas and add lifepoints

    // add lifepoints for houses

    // feed children

    // marriage

  }
}
