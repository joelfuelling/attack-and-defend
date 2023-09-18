import {useState}   from 'react'
import Button from './Button'
export default function AddEnemyForm({onAddEnemy}) {
    const [name, SetName] = useState('')
    const [hp, SetHp] = useState('0')
    const [minimumAttack, setMinimumAttack] = useState('0')
    const [maximumAttack, setMaximumAttack] = useState('0')
    const [defense, setDefense] = useState('0')

    
    function handleSubmit(e) {
        e.preventDefault()
        if(!name || !hp || !minimumAttack|| !maximumAttack  || !defense) return
    }

    const id = crypto.randomUUID()

    const newEnemy = {
        id,
        name,
        hp,
        minimumAttack,
        maximumAttack,
        defense,
    }

    onAddEnemy(newEnemy)
    SetName('')
    SetHp('')
    setMinimumAttack('')
    setMaximumAttack('')
    setDefense('')



    return(
        <>
        {
        <form onSubmit={handleSubmit}>
            <p> Enemy name</p>
            <input type="text" value={name} onChange={e => SetName(e.target.value)}/>
            <p> Enemy HP</p>
            <input type="text" value={hp} onChange={e => SetHp(e.target.value)}/>
            <p> Enemy minimum Attack</p>
            <input type="text" value={minimumAttack} onChange={e => setMinimumAttack(e.target.value)}/>
            <p> Enemy maximum Attack</p>
            <input type="text" value={maximumAttack} onChange={e => setMaximumAttack(e.target.value)}/>
            <p> Enemy Defense</p>
            <input type="text" value={defense} onChange={e => setDefense(e.target.value)}/>
            <br />
            <br />
            <Button onClick={() => onAddEnemy()}>Add Enemy</Button>
        </form>
        }
        </>
    ) 
       
}