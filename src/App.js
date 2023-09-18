
import { useState } from 'react';
import PlayerStats from './components/PlayerStats'
import './index.css';
import EnemyList from './components/EnemyList';
import AddEnemyForm from './components/AddEnemyForm';
import Button from './components/Button';



const player1 = {
    id: 1,
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


const initialEnemies = [
  { id: 1,
    name: 'Goblin',
    hp: 12,
    minimumAttack: 2,
    maximumAttack: 4,
    attack: function() {
      return randomNumber(
        initialEnemies.minimumAttack, 
        initialEnemies.maximumAttack)
    },
    defense: 1
  },
  { id: 2,
    name: 'Gloop!',
    hp: 8,
    minimumAttack: 3,
    maximumAttack: 4,
    attack: function() {
      return randomNumber(
        initialEnemies.minimumAttack, 
        initialEnemies.maximumAttack)
    },
    defense: 3
  },
  { id: 3,
    name: 'Smuggler',
    hp: 10,
    minimumAttack: 2,
    maximumAttack: 6,
    attack: function() {
      return randomNumber(
        initialEnemies.minimumAttack, 
        initialEnemies.maximumAttack)
    },
    defense: 4
  }
]


function randomNumber(min, max) {
  return Number(Math.floor((Math.random() * (max - min + 1)) + min));
}

  

export default function App() {
  const [enemies, setEnemies] = useState(initialEnemies)
  const [showAddEnemy, SetShowAddEnemy] = useState(false)
  const [selectedEnemy, setSelectedEnemy] = useState(null)

  function handleAddEnemy(enemy) {
  setEnemies(enemies => [...enemies, enemy])
  handleShowAddEnemy()
  }

  function handleShowAddEnemy() {
    SetShowAddEnemy((show) => !show)
  }
  function handleSelectedEnemy(enemy) {
    setSelectedEnemy(cur => 
        cur?.id === enemy.id
        ? null
        : enemy
        )
}
  
  return (
    <div className="App">
      <PlayerStats player1={player1}/>
      
      {
      showAddEnemy &&
      <AddEnemyForm onAddEnemy={handleAddEnemy}/>
      }

      <Button onClick={handleShowAddEnemy}>
        {showAddEnemy ? 'Close' : 'Add Enemy to list'}
      </Button>
      <EnemyList 
      enemies={enemies} 
      selectedEnemy={selectedEnemy}
      onSelection={handleSelectedEnemy} 
       />
    </div>
  );
}

