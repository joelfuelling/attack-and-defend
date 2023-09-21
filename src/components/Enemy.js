import  Button  from "./Button"

export default function Enemy({enemy, onSelection, selectedEnemy, className}) {
 
    const isSelected = selectedEnemy?.id === enemy.id
    

    return (
        <li className={`border ${className}`}>
        <div>
            <p>{enemy.image}</p>
            <h4 >{enemy.name} </h4>
                <Button className="enemy-select-button" onClick={() => onSelection(enemy)}>
                    {
                    isSelected ?  'Close' : 'Select' 
                    }
                </Button>
        </div>
            <p>HP: {enemy.hp}</p>
            <p>Attack: {enemy.minimumAttack} - {enemy.maximumAttack}</p>
            <p>Defense: {enemy.defense}</p>

        </li>
    )
}