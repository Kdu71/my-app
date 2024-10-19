import { useState } from "react"

function FormUseStates(){

    function cadastrarUsuario(e){
        e.preventDefault() //Metodo para pausar a execução afim de mostrar no console.
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return(
        <div>
            <h1>Meu Cadastro Com useState</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome" 
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                    <input type="submit" value="Cadastrar"/>

            </form>
        </div>
    )
}

export default FormUseStates