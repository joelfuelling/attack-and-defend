
import Enemy from "./Enemy"



export default function EnemyList({enemies}) {

    return (
        <>
        <ul className='stats-list'>
            {enemies.map(enemy =>
            <Enemy enemy={enemy} key={enemy.id}/>
            )
            }
        </ul>
        </>
    )
}