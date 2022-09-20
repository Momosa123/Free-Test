import React from "react";

export default function Auth(){
  return(
    <div className='container'>
    <h1>Bienvenue sur Freebook</h1>
    <h2>Se connecter </h2>
    <form action="">
    
      <div className='input-field'>
        
        <input id='username' type="text" placeholder="username" />
      </div>

      <div>
        
        <input id='password' type="password" placeholder="password"/>
      </div>
      <button>Me connecter</button>
    </form>
    <h2>Ou créer un compte utilisateur </h2>
    <form action="">
    
      <div className='input-field'>
        
        <input id='username' type="text" placeholder="username" />
      </div>

      <div>
        
        <input id='password' type="password" placeholder="password" />
      </div>
      <button>Créer mon compte</button>
    </form>
    
  </div>
  )
}