import React from 'react';
import classes from './ProductPreview.module.css'

const ProductPreview = (props)=>{

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()  ;
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return(
        <div className = {classes.ProductPreview}>
            <img src = {props.currentPreviewImage} alt = "Black Strap"/>
            { props.currentSelectedFeature ? 
                <div className={classes.FeatureData}>
                <i className="fas fa-heartbeat"></i>
                <p>78</p>
                </div>
                :
                <div className={classes.FeatureData}>
                <p >{`${currentHour} : ${currentMinutes}`}</p>
                </div>
                
            }

        </div>
    );
}

export default ProductPreview;
