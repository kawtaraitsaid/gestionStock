const Login = () => {
  return (
    <div className="general">
      {/* <h1>login</h1> */}
      <input placeholder="adresse e-mail ou numéro de tél"className="btn1"></input>
      <input placeholder="mot de passe" className="btn1"></input>
      <button className="connect">login</button>
      <a href="#">password forgeted ?</a>
      <button className="btn3">create new account</button>
    </div>
  );
};

export default Login;
