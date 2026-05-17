import { useState } from "react"


function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")


    const handleChangeEmail = (evento) => {
        
        setEmail(evento)
        console.log("estoy cambiando el input del email")
        console.log("el evento es el siguiente", evento)
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        console.log("estoy enviando el formulario")
        console.log("el email es el siguiente", email)
        console.log("el password es el siguiente", password)
        console.log("el name es el siguiente", name)

        if(password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
            return
        }
        if(email == ""){
            alert("Todos los campos son obligatorios")
            return
        }

        if(password == ""){
            alert("Todos los campos son obligatorios")
            return
        }


        alert("Sesión iniciada")
        setEmail("")
        setPassword("")
        setName("")
    }

    return (
        <>
        <form className="login-form" action="" onSubmit={(evento)=>handleSubmit(evento)}>
            <h2>Iniciar Sesión</h2>
            {/* Nombre */}
            {/* <label htmlFor="Name">Ingrese su Nombre</label>
            <br />
            <input type="text" id="Name" name="Name" required placeholder="John Doe" value={name} onChange={(e)=>setName(e.target.value)} />
            <br /> */}

            {/* Email */}
            <label htmlFor="email">Ingrese su Email</label>
            <br />
            <input type="email" id="email" name="email" required placeholder="correo@gmail.com" value={email} onChange={(evento)=>{handleChangeEmail(evento.target.value)}} />
            <br />

            {/* Password */}
            <label htmlFor="password">Ingrese su Password:</label>
            <br />            
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" required placeholder="******"/>
            <br />
            <button type="submit">Iniciar Sesión</button>
        </form>
        </>
    );
}

export default LoginForm;