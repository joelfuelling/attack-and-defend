
import { Button } from "@mui/material"
export default function Enemy({enemies}) {
    return (
        <>
        { enemies && enemies.map((enemy) =>
        <div className='border'>
            <h2> Enemy: {enemy.name} </h2>
            <ul className='stats-list'>
                <li>HP: {enemy.hp}</li>
                <li>Attack: {enemy.minimumAttack} - {enemy.maximumAttack}</li>
                <li>Defense: {enemy.defense}</li>
                
            </ul>
        </div>
        )
      }
        </>
    )
}