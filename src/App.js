import React, {Component} from 'react';
import classes from './App.module.css';
import ProductData from './ProductData/ProductData';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductPreview from './ProductPreview/ProductPreview';
import TopBar from './Topbar/TopBar';

class App extends Component { 
  
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: false
  }

  onColorOptionClick = (pos) =>{
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureOptionClick = (pos) =>{
    this.setState({currentSelectedFeature : pos});
  }

  render(){
    return (
      <div className="App">

        <header> 
          <TopBar/>
        </header>

        <div className={classes.MainContainer}>          
        
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature = {this.state.currentSelectedFeature}/>
          </div>

          <div className={classes.ProductInfo}>
            <ProductInfo data={this.state.productData} onColorOptionClick = {this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureOptionClick = {this.onFeatureOptionClick} currentSelectedFeature = {this.state.currentSelectedFeature}/>
          </div>          

        </div>

      </div>
    );
  }
}

export default App;
