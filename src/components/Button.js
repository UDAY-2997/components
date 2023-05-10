function Button(props) {
  return (
    <div>
      <button className="primary">{props.isLoggedIn}
        Primary
      </button>
      <button className="secondary">{props.isLoggedOut}
        Secondary
      </button>
      
    </div>
  );
}

export default Button;
