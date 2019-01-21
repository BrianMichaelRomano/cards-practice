import React, { Component } from 'react';
import Card from './Card/Card.js';
import rogueImg from './img/cowled.svg';
import knightImg from './img/visored-helm.svg';
import peasantImg from './img/farmer.svg';
import mageImg from './img/wizard-face.svg';
import './App.css';

class App extends Component {
  state = {
    cards: [
      { isSelected: null, id: "1", imgSrc: rogueImg, title: 'Appprentice Rogue', cost: 2, attack: 2, defense: 1, description: 'A Rookie rogue trying to make a name for himself. With nothing to lose... they can be the most dangerous.' },
      { isSelected: null, id: "2", imgSrc: knightImg, title: 'Master Knight', cost: 6, attack: 4, defense: 4, description: 'A seasoned veteran of war who has slain many beasts and gained honor among these lands.' },
      { isSelected: null, id: "3", imgSrc: peasantImg, title: 'Peasant', cost: 1, attack: 1, defense: 1, description: 'Worn out from farming all day...won"t be putting up much of a fight.' },
      { isSelected: null, id: "4", imgSrc: mageImg, title: 'Old Mage', cost: 4, attack: 5, defense: 1, description: 'He has been casting spells so long he is deadly but also about to die...' }
    ],
    cardSelected: null
  };

  selectCard = (e) => {
    let cardSelected = this.state.cards.find((c) => c.id === e.currentTarget.id);
    let cardIndex = this.state.cards.findIndex((c) => c.id === e.currentTarget.id);
    let cardClone = { ...cardSelected };
    let cardsClone = [...this.state.cards];

    cardsClone[cardIndex] = cardClone;
    cardClone.isSelected = !cardClone.isSelected;

    this.setState({
      cardSelected: cardClone.id,
      cards: cardsClone
    });
  }

  render() {
    let cards = this.state.cards.map((card, i) => {
      return (
        <Card
          onCardClicked={(e) => this.selectCard(e)}
          key={card.id}
          cardStats={this.state.cards[i]}
        />
      );
    });

    return (
      <div className="App">
        <p>{this.state.cardSelected || 'Select a Card'}</p>
        {cards}
      </div>
    );
  }
}

export default App;
