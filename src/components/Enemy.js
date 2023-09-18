import { useState } from "react"
import  Button  from "./Button"

export default function Enemy({enemy}) {
    const [selectedEnemy, setSelectedEnemy] = useState(null)
    

    return (
        <>
        <li className='border'>
            <div>
            <h4>{enemy.name} </h4>
            <Button>Battle!</Button>
            </div>
                <p>HP: {enemy.hp}</p>
                <p>Attack: {enemy.minimumAttack} - {enemy.maximumAttack}</p>
                <p>Defense: {enemy.defense}</p>
                  
        </li>
        </>
    )
}