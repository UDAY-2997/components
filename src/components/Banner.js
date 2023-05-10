function Banner(props) {
  return (
    <div className={props.BannerClass}>
      <video autoPlay loop muted>
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
          
      </video>
    
   <div className="banner-content">{props.children}</div>
    </div>
  );
}

export default Banner;
