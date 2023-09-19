import {useState}   from 'react'
import Button from './Button'
export default function AddEnemyForm({onAddEnemy}) {
    const [name, SetName] = useState('')
    const [hp, SetHp] = useState('0')
    const [minimumAttack, SetMinimumAttack] = useState('0')
    const [maximumAttack, SetMaximumAttack] = useState('0')
    const [defense, SetDefense] = useState('0')

    
    function handleSubmit(e) {
        e.preventDefault()
        if(!name || !hp || !minimumAttack || !maximumAttack  || !defense ) return

        const id = crypto.randomUUID()

        const newEnemy = {
            id,
            name,
            hp,
            minimumAttack,
            maximumAttack,
            defense,
        }
    
        // onAddEnemy(newEnemy)
        SetName('')
        SetHp('')
        SetMinimumAttack('')
        SetMaximumAttack('')
        SetDefense('')
    }

   

    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <p> Enemy name</p>
            <input type="text" value={name} onChange={e => SetName(e.target.value)}/>
            <p> Enemy HP</p>
            <input type="text" value={hp} onChange={e => SetHp(e.target.value)}/>
            <p> Enemy minimum Attack</p>
            <input type="text" value={minimumAttack} onChange={e => SetMinimumAttack(e.target.value)}/>
            <p> Enemy maximum Attack</p>
            <input type="text" value={maximumAttack} onChange={e => SetMaximumAttack(e.target.value)}/>
            <p> Enemy Defense</p>
            <input type="text" value={defense} onChange={e => SetDefense(e.target.value)}/>
            <br />
            <br />
            <Button className="button" handleAddEnemy={onAddEnemy}>Add Enemy!</Button>
        </form>
        
        </>
    ) 
       
}