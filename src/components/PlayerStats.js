import { useState } from "react";

export default function PlayerStats({player1}) {
    const [playerStats, setPlayerStats] = useState('');
  
    return(
      <>
      <div className='border'>
        <h2> Player: {player1.name} </h2>
        <ul className='stats-list'>
          <li>HP: {player1.hp}</li>
          <li>Attack: {player1.minimumAttack} - {player1.maximumAttack}</li>
          <li>Defense: {player1.defense}</li>
        </ul>
      </div>
      </>
    )
  }