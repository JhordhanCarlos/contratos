import { CardContract } from '../../components/CardContract'
import './styles.css'

export default function Home(){
    return (
        <main className='home'>
            <h2>Home</h2>
            <section>
                <p>Contratos</p>
                {/* Visualização em card ou table */}
                <div>  
                </div>
            </section>
            <section className='cardSection'>
                <CardContract />
                <CardContract />
                <CardContract />
                <CardContract />
            </section>
            
        </main>
    )
}