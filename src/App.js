
import PlayerStats from './components/PlayerStats'
import './index.css';
import Enemy from './components/Enemy';

function randomNumber(min, max) {
  return Number(Math.floor((Math.random() * (max - min + 1)) + min));
}

// I need to assign a function to the attack property so that a new random number is generated each time the function is called

const player1 = {
    name: 'Joel',
    hp: Number(20),
    minimumAttack: 3,
    maximumAttack: 5,
    // Below, we now call the function(), which can allow for a newly generated attack number each time.
    attack: function() {
      return randomNumber(player1.minimumAttack, player1.maximumAttack)
    },
    defense: 3
  }

  const enemies = [
    { name: 'Goblin',
      hp: 12,
      minimumAttack: 2,
      maximumAttack: 4,
      attack: function() {
        return randomNumber(enemies.minimumAttack, enemies.maximumAttack)
      },
      defense: 1
    },
    { name: 'Gloop!',
      hp: 8,
      minimumAttack: 3,
      maximumAttack: 4,
      attack: function() {
        return randomNumber(enemies.minimumAttack, enemies.maximumAttack)
      },
      defense: 3
    },
    { name: 'Smuggler',
      hp: 10,
      minimumAttack: 2,
      maximumAttack: 6,
      attack: function() {
        return randomNumber(enemies.minimumAttack, enemies.maximumAttack)
      },
      defense: 4
    }
  ]

export default function App() {
  return (
    <div className="App">
      <PlayerStats player1={player1}/>
      <Enemy enemies={enemies}/>
    </div>
  );
}

