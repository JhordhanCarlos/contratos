import './styles.css'

export function CardContract(){
    return(
        <div className='cardContainer'>
            <div className='cardHeader'>
                <label>CT-001</label>
                <label>Active</label>
            </div>
            <div className='cardBody'>
                <label>Nome do Contrato:</label>
                <label>Manutenção TI</label>
            </div>
            <button className='cardButton'>Ver Detalhes</button>
        </div>
    )
}