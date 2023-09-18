
import Enemy from "./Enemy"



export default function EnemyList({enemies, onSelection, selectedEnemy}) {

    return (
        <>
        <ul className='stats-list'>
            {enemies.map(enemy =>
            <Enemy 
            enemy={enemy} 
            key={enemy.id}
            selectedEnemy={selectedEnemy}
            onSelection={onSelection}
            />
            )
            }
        </ul>
        </>
    )
}