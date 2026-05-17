import { useState } from "react"


function RegisterForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (evento) => {
        evento.preventDefault()
        console.log("estoy enviando el registro")
        console.log("el email es el siguiente", email)
        console.log("el password es el siguiente", password)
        console.log("el name es el siguiente", name)
        if(password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
            return
        }
        if(password === ""){
            alert("Todos los campos son obligatorios")
            return
        }

        if(confirmPassword === ""){
            alert("Todos los campos son obligatorios")
            return
        }

        if(email === ""){
            alert("Todos los campos son obligatorios")
            return
        }

        if(password !== confirmPassword){
            alert("Las contraseñas no coinciden")
            return
        }
        alert("Cuenta creada exitosamente")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setName("")
    }


    return (
       
            
            <form className="register-form" onSubmit={(evento)=>{handleSubmit(evento)}}>
                <h2>Crear Cuenta</h2>
                {/* <label htmlFor="name">Nombre:</label>
                <br />
                <input value={name} onChange={(evento)=>{setName(evento.target.value)}} type="text" id="name" name="name" required placeholder="John Doe" />
                <br /> */}

                <label htmlFor="email">Email:</label>
                <br />
                <input value={email} onChange={(evento)=>{setEmail(evento.target.value)}} type="email" id="email" name="email" required placeholder="john.doe@example.com" />
                <br />

                <label htmlFor="password">Contraseña:</label>
                <br />
                <input value={password} onChange={(evento)=>{setPassword(evento.target.value)}} type="password" id="password" name="password" required placeholder="••••••••" />
                <br />
                
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <br />
                <input value={confirmPassword} onChange={(evento)=>{setConfirmPassword(evento.target.value)}} type="password" id="confirmPassword" name="confirmPassword" required placeholder="••••••••" />
                <br />


                <button className="btn-success" type="submit">Registrarse</button>
            </form>
      
    );
}

export default RegisterForm