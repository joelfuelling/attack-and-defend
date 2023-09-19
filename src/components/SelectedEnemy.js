import Button from "./Button"

export default function SelectedEnemy({selectedEnemy}) {
    
    return (
        <>
        <div className="vs-spacing">
        <h1 > VS. !</h1>
        <Button>Attack!</Button>
        </div>
        <div className="border">
            <h2>  {selectedEnemy.name} </h2>
            <ul>
                <li>HP: {selectedEnemy.hp}</li>
                <li>Attack: {selectedEnemy.minimumAttack} - {selectedEnemy.maximumAttack}</li>
                <li>Defense: {selectedEnemy.defense}</li>
            </ul>
        </div>
        </>
    )
}