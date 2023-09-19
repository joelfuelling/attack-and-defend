
export default function PlayerStats({player1}) {
  
    return(
      <>
      <div className='border'>
        <h2> Player: {player1.name} </h2>
        <ul>
          <li>HP: {player1.hp}</li>
          <li>Attack: {player1.minimumAttack} - {player1.maximumAttack}</li>
          <li>Defense: {player1.defense}</li>
        </ul>
      </div>
      </>
    )
  }