import React from "react";
import { useState } from "react";

export default function Auth(){
  const [logUsername, setLogUsername] = useState("")
  const [logPassword, setLogPassword] = useState("")

  const [signUsername, setSignUsername] = useState("")
  const [signPassword, setSignPassword] = useState("")



  function logUsernameHandler(event){
    
    setLogUsername(event.target.value)
  }

  function signUsernameHandler(event){
    
    setSignUsername(event.target.value)
  }

  function logPasswordHandler(event){
    
    setLogPassword(event.target.value)
  }

  function signPasswordHandler(event){
    
    setSignPassword(event.target.value)
  }

console.log(logUsername)
  async function connectUser(event){
//     event.preventDefault()
    
//     try {
//       const response = await fetch(
//         'http://localhostl:5000/api/users/login', 
//         'POST',
//         JSON.stringify({
//           username: formState.username,
//           password: formState.password
//         }),
//       {
//         'Content-Type': 'application/json'
//       }
//           )
//  } catch(error){}
  }

  async function createUser(event){
//     event.preventDefault()
//     try {
//       const response = await fetch(
//         'http://localhostl:5000/api/users/signup', 
//         'POST',
//         JSON.stringify({
//           username: formState.username,
//           password: formState.password
//         }),
//       {
//         'Content-Type': 'application/json'
//       }
//           )
//  } catch(error){}
  }
  
  return(
    <div className='container'>

      <h1>Bienvenue sur Freebook</h1>

      <h2>Se connecter </h2>

      <form onSubmit={connectUser}>
      
        <div className='input-field'>        
          <input value={logUsername} 
          id='username' type="text" 
          placeholder="username" onChange={logUsernameHandler} />
        </div>

        <div>  
          <input value={logPassword}
            id='password' type="password" 
            placeholder="password" onChange={logPasswordHandler}/>
        </div>

        <button type="submit">Me connecter</button>

      </form>

      <h2>Ou créer un compte utilisateur </h2>

      <form onSubmit={createUser}>
      
        <div className='input-field'>  
          <input value={signUsername} 
          id='username' type="text" 
          placeholder="username" onChange={signUsernameHandler} />
        </div>

        <div>        
          <input value={signPassword} 
          id='password' type="password" 
          placeholder="password" onChange={signPasswordHandler} />
        </div>

        <button type="submit">Créer mon compte</button>
        
      </form>
    
  </div>
  )
}