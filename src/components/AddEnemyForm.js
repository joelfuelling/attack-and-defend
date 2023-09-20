import {useState}   from 'react'
import Button from './Button'
export default function AddEnemyForm({onAddEnemy, error, setError}) {
    const [name, setName] = useState('')
    const [hp, setHp] = useState('')
    const [minimumAttack, setMinimumAttack] = useState('')
    const [maximumAttack, setMaximumAttack] = useState('')
    const [defense, setDefense] = useState('')

    
    function handleSubmit(e) {
        e.preventDefault()
        if(!name || !hp || !minimumAttack || !maximumAttack  || !defense ) {
            setError("All fields must be filled out")
        return;
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
        setName('')
        setHp('')
        setMinimumAttack('')
        setMaximumAttack('')
        setDefense('')
    }

   

    return(
        <>
        
        <form className="enemy-form-grid" onSubmit={handleSubmit}>
            <p> Name</p>
            <input type="text" className="enemy-input-grid" value={name} placeholder=""onChange={e => setName(e.target.value)}/>
            <p> HP</p>
            <input type="text" className="enemy-input-grid" value={hp} onChange={e => setHp(e.target.value  > 0 ? e.target.value : '')}/>
            <p> Minimum Attack</p>
            <input type="text" className="enemy-input-grid" value={minimumAttack} onChange={e => setMinimumAttack(e.target.value  > 0 ? e.target.value : '')}/>
            <p> Maximum Attack</p>
            <input type="text" className="enemy-input-grid" value={maximumAttack} onChange={e => setMaximumAttack(e.target.value  > 0 ? e.target.value : '')}/>
            <p> Defense</p>
            <input type="text" className="enemy-input-grid" value={defense} onChange={e => setDefense(e.target.value  > 0 ? e.target.value : '')}/>
            <br />
            {
                error && <p>All fields must be filled out</p>
            }
            <br />
            <Button className="button" onAddEnemy={onAddEnemy}>Add Enemy!</Button>
        </form>
        
        </>
    ) 
       
}