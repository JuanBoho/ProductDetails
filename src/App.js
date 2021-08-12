import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {

  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes(); 
  return (
    <div className="App">

      <header>
        <nav className={classes.Topbar}>
          <img src="https://www.nicepng.com/png/detail/20-201280_amazon-video-logo-png-banner-freeuse-amazon-prime.png"/>
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className = {classes.ProductPreview}>
            <img src = "https://imgur.com/iOeUBV7.png" alt = "Black Strap"/>

            {/*<div className={classes.FeatureData}>
              <p >{`${currentHour}:${currentMinutes}`}</p>
              </div>*/}

            <div className={classes.FeatureData}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
            </div>
        </div>

        <div className = {classes.ProductInfo}>
          <h1 className = {classes.ProductTitle}>{ProductData.title}</h1>
          <p className = {classes.ProductDescription}>{ProductData.description}</p>
          <div className={classes.Line}></div>
          <h3 className ={classes.Heading}> Select Color:</h3>
          <div className={classes.OptionsContainer}>

            <img className={[classes.ProductOption, classes.ProductOptionSelected].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Strap"/>
            <img className={classes.ProductOption} src="https://imgur.com/PTgQlim.png" alt="Red Strap"/>
            <img className={classes.ProductOption} src="https://imgur.com/Mplj1YR.png" alt="Blue Strap"/>
            <img className={classes.ProductOption} src="https://imgur.com/xSIK4M8.png" alt="Purple Strap"/>

          </div>

          <h3 className={classes.Heading}>Features</h3>

          <div className={classes.FeaturesContainer}>
            <button className={[classes.FeaturesBtn, classes.FeaturesBtnSelected].join(' ')}>Time</button>
            <button className={classes.FeaturesBtn}>Heart Rate</button>
          </div>

          <button className={classes.BuyBtn}>Buy Now</button>



        </div>

      </div>

    </div>
  );
}

export default App;
