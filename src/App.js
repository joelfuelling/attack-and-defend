
import { useState } from 'react';
import PlayerStats from './components/PlayerStats'
import './index.css';
import EnemyList from './components/EnemyList';
import AddEnemyForm from './components/AddEnemyForm';
import Button from './components/Button';
import SelectedEnemy from './components/SelectedEnemy';



const player1 = {
    id: 1,
    img: '',
    name: 'Joel',
    hp: Number(20),
    minimumAttack: 3,
    maximumAttack: 5,
    // Below, we now call the function(), which can allow for a newly generated attack number each time.
    attack() {
      return randomNumber(this.minimumAttack, this.maximumAttack)
    },
    defense: 3
  }


const initialEnemies = [
  { id: 1,
    img: 'src/images/Goblin.png',
    name: 'Goblin',
    hp: 12,
    minimumAttack: 2,
    maximumAttack: 4,
    attack: function() {
      return randomNumber(
        this.minimumAttack, 
        this.maximumAttack)
    },
    defense: 1
  },
  { id: 2,
    img: '',
    name: 'Gloop!',
    hp: 8,
    minimumAttack: 3,
    maximumAttack: 4,
    attack: function() {
      return randomNumber(
        this.minimumAttack, 
        this.maximumAttack)
    },
    defense: 3
  },
  { id: 3,
    img: '',
    name: 'Smuggler',
    hp: 15,
    minimumAttack: 2,
    maximumAttack: 7,
    attack: function() {
      return randomNumber(
        this.minimumAttack, 
        this.maximumAttack)
    },
    defense: 4
  }
]


function randomNumber(min, max) {
  return Number(Math.floor((Math.random() * (max - min + 1)) + min));
}

  

export default function App() {
  const [error, setError] = useState(null)
  const [enemies, setEnemies] = useState(initialEnemies)
  const [showAddEnemy, setShowAddEnemy] = useState(false)
  const [selectedEnemy, setSelectedEnemy] = useState(null)
  const [player1Stats, setPlayer1Stats] = useState(player1)



  function handleAddEnemy(enemy) {
  setEnemies(enemies => [...enemies, enemy])
  handleShowAddEnemy()
  }

  function handleShowAddEnemy() {
    setShowAddEnemy((show) => !show)
  }

  function handleSelectedEnemy(enemy) {
    setSelectedEnemy(cur => 
        cur?.id === enemy.id
        ? null
        : enemy
        )
    setShowAddEnemy(false)
}

function onAttack(selectedEnemy, player1Stats) {
  let enemy = {...selectedEnemy}
  if (enemy.hp > 0) {
    enemy.hp = (enemy.hp - player1Stats.attack()) 
  setSelectedEnemy({...enemy})
  } 

}

function onDefend(selectedEnemy, player1Stats) {
  let player1= {...player1Stats}
  if (player1.hp > 0) {
    player1.hp = (player1.hp - selectedEnemy.attack()) 
  setPlayer1Stats({...player1})
  } 

}

function resetGame() {
  setEnemies(initialEnemies)
  setPlayer1Stats(player1)
  setSelectedEnemy(null)
}


  return (
    <div className="App">
      <Button onClick={resetGame}>Reset game</Button>
      <div className="by2grid"> 
      <PlayerStats player1={player1} player1Stats={player1Stats} selectedEnemy={selectedEnemy}/>
        {selectedEnemy && 
        <SelectedEnemy selectedEnemy={selectedEnemy} onAttack={onAttack} onDefend={onDefend} player1Stats={player1Stats}/>
        }
      </div>
      {
      
      showAddEnemy &&
      <AddEnemyForm onAddEnemy={handleAddEnemy}/>
      }

      <Button onClick={handleShowAddEnemy}>
        {showAddEnemy ? 'Close' : 'Add a new enemy to list '}
      </Button>
      <EnemyList 
      enemies={enemies} 
      selectedEnemy={selectedEnemy}
      onSelection={handleSelectedEnemy} 
       />
    </div>
  );
}

