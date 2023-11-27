import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let winMessage = null;
    if (this.props.isWinner) {
      winMessage = <p className="Pokedex-winner">WINNER!</p>
    }

    return (
      <div className="Pokedex">
        <h2 className="Pokedex-title">Pokedex</h2>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p =>
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
          )}
        </div>
        <h4>Total experience: {this.props.exp}</h4>
        {winMessage}
      </div>
    )
  }
}

export default Pokedex;