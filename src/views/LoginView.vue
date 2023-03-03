<template>
    <div class="login-form">
      <div class="description">
        <h1>Login</h1>
        <p>By logging in you agree to the ridiculously long terms that you didn't bother to read (probably because there aren't any)</p>
      </div>
      <div class="form">
        <form >
          <label>
            Email:
            <input type="email" placeholder="sinsjohnny69@gmail.com" autocomplete="off" />
          </label>
          <label>
            Password:
            <input type="password" placeholder="123456789"/>
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  </template>
  <script>
  import { useStore } from 'vuex';
  
  export default {
   setup(){
    const store = useStore();

    return{
        store
    }
   }
  };
  </script>
    
    <style scoped>
    * {
      box-sizing: border-box;
      font-family: Verdana, sans-serif;
    }
    
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 50px 0;
    }
    
    .description {
      background-color: #ffffff;
      width: 280px;
      padding: 35px;
    }
    
    .description h1,
    .description p {
      margin: 0;
    }
    
    .description p {
      font-size: 0.8em;
      color: #95a5a6;
      margin-top: 10px;
    }
    
    .form {
      background-color: #34495e;
      border-radius: 5px;
      box-shadow: 0px 0px 30px 0px #666;
      color: #ecf0f1;
      width: 260px;
      padding: 35px;
    }
    
    .form label,
    .form input {
      outline: none;
      width: 100%;
    }
    
    .form label {
      color: #95a5a6;
      font-size: 0.8em;
    }
    
    .form input {
      background-color: transparent;
      border: none;
      color: #ecf0f1;
      font-size: 1em;
      margin-bottom: 20px;
    }
    
    .form ::placeholder {
      color: #ecf0f1;
      opacity: 1;
    }
    
    .form button {
      background-color: #ffffff;
      cursor: pointer;
      border: none;
      padding: 10px;
      transition: background-color 0.2s ease-in-out;
      width: 100%;
    }
    
    .form button:hover {
      background-color: #eeeeee;
    }
    
    @media screen and (max-width: 600px) {
      .login-form {
        padding: 50px 20px;
      }
    
      .description {
        margin: 0 auto;
        max-width: 350px;
        width: 100%;
      }
    
      .form {
        border-radius: unset;
        box-shadow: unset;
        width: 100%;
      }
    
      .form form {
        margin: 0 auto;
        max-width: 280px;
        width: 100%;
      }
    }
    </style>