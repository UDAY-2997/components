function Button(props) {

 const buttonClass = props.isLoggedIn ? "secondary" : "primary";
 const buttonText = props.isLoggedIn ? "Logout" : "Login";

 return (
  <div>
   <button className={buttonClass}>{buttonText}</button>
  </div>
 );
}

export default Button;