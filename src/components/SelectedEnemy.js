import Button from "./Button"

export default function SelectedEnemy({selectedEnemy, onAttack, onDefend, player1Stats}) {
    
    // player1Stats is prop drilled so it can be passed into the onAttack function below as an argument.

    return (
        <>
        <div className="vs-spacing">
        <h1 > VS. !</h1>
        <div className="by2grid-rows">
            <Button onClick={() => onAttack(selectedEnemy, player1Stats)}>Attack!</Button>
            <Button onClick={() => onDefend(selectedEnemy, player1Stats)}>Defend!</Button>
        </div>
        </div>
        <div className="border">
            {
            selectedEnemy.hp > 0 ? 
            <>
            <img src={selectedEnemy.image} alt="enemy"/>
            <h2>{selectedEnemy.name} </h2>
                <ul>
                    <li>HP: {selectedEnemy.hp}</li>
                    <li>Attack: {selectedEnemy.minimumAttack} - {selectedEnemy.maximumAttack}</li>
                    <li>Defense: {selectedEnemy.defense}</li>
                </ul>
            </>
            : 
            `You have killed ${selectedEnemy.name}!`
            }
            
        </div>
        </>
    )
}