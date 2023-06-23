import React from "react"
import { useState } from "react"
import "./Contato.css"
import emailjs from "@emailjs/browser"

const Contato = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')

  const handleClickScroll = () => {
    const element = document.getElementById('home');
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  };
     

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_frjy9rv','template_vonfawn', templateParams, 'OHRJ6326BTh9481RK')
    .then((response)=> {
      console.log(response.status, response.text)
      alert("Email enviado")
      setName('')
      setEmail('')
      setMessage('')

    }, (err)=>{
      alert('Email não enviado', err)
      console.log("Erro: ", err)
    })
    
  }

    return(
      <div className="contato" id="contato">
        <div className="container-contato"  >
            <h1 className="title"> Entre em contato</h1>
            <form className="form" onSubmit={sendEmail}>
              <input
                className="input"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name} 
              />
              <input
                className="input"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
              />
              <textarea
                className="textarea"
                type="text"
                placeholder="Digite sua mensagem"
                onChange={(e) => setMessage(e.target.value)}
                value={message} 
              />
              <input className="button" type="submit" value="Enviar" />
            </form>
            
        </div>
        <button className="btn-scroll" onClick={handleClickScroll}></button>
      <div className="footer">© Wgleyberton Alencar 2023</div>
      </div>
    )
}
export default Contato