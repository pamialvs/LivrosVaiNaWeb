import s from './inicio.module.scss'
import community from "../../Assets/community.png"
import reading from '../../Assets/reading.png'
import transform from '../../Assets/transform.png'
import balance from '../../Assets/balance.png'

export default function Inicio(){
    return(
    <main>
        <section className={s.primeiraSessao}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>

        <section className={s.porqueDoar}>
            <h3>Por que devo doar?</h3>
        
        <div className={s.containerCards}>
        <section>
        <img src={community} alt="" />
        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </section>

         <section>
        <img src={reading} alt="" />
        <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
        </section>

         <section>
        <img src={transform} alt="" />
        <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </section>

         <section>
        <img src={balance} alt="" />
        <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </section>
    </div>
    </section>
    </main>
    )
}