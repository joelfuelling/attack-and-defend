
import Enemy from "./Enemy"



export default function EnemyList({enemies, onSelection, selectedEnemy}) {

    

    return (
        <>
        <ul className='stats-list'>
            {enemies.map(enemy => {
                const isAlive = selectedEnemy?.id === enemy.id && selectedEnemy?.hp > 0;
                return (      
                <Enemy 
                enemy={enemy} 
                key={enemy.id}
                image = {enemy.img}
                selectedEnemy={selectedEnemy}
                onSelection={onSelection}
                className={ isAlive  ? 'dead' : ''}
                />
                )
            })
            }
        </ul>
        </>
    )
}