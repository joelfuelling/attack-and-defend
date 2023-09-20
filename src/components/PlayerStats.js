
export default function PlayerStats({player1Stats, selectedEnemy}) {
  
    return(
      <>
      <div className='border'>
        {
        player1Stats.hp > 0 ?
          <>
          <h2> Player: {player1Stats.name} </h2>
            <ul>
              <li>HP: {player1Stats.hp}</li>
              <li>Attack: {player1Stats.minimumAttack} - {player1Stats.maximumAttack}</li>
              <li>Defense: {player1Stats.defense}</li>
            </ul>
            </>
        :
        `You have been killed by ${selectedEnemy.name}`
        }
      </div>
      </>
    )
  }