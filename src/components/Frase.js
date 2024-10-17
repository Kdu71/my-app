import Styles from './Frase.module.css'

function Frase(){
    return(
        <div className={Styles.fraseContainer}>
            <p className={Styles.fraseContent}>Este é um componente com uma frase</p>
        </div>
    )
}
export default Frase