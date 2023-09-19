import {useState}   from 'react'
import Button from './Button'
export default function AddEnemyForm({onAddEnemy, error, setError}) {
    const [name, setName] = useState('')
    const [hp, setHp] = useState('0')
    const [minimumAttack, setMinimumAttack] = useState('0')
    const [maximumAttack, setMaximumAttack] = useState('0')
    const [defense, setDefense] = useState('0')

    
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
            <p> Enemy name</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <p> Enemy HP</p>
            <input type="text" value={hp} onChange={e => setHp(e.target.value)}/>
            <p> Enemy minimum Attack</p>
            <input type="text" value={minimumAttack} onChange={e => setMinimumAttack(e.target.value)}/>
            <p> Enemy maximum Attack</p>
            <input type="text" value={maximumAttack} onChange={e => setMaximumAttack(e.target.value)}/>
            <p> Enemy Defense</p>
            <input type="text" value={defense} onChange={e => setDefense(e.target.value)}/>
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