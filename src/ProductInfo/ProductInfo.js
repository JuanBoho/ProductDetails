import React from 'react';
import classes from './ProductInfo.module.css'

const ProductInfo = (props)=>{

    //Item optionsa
    const colorOptions = props.data.colorOptions.map((item,pos) =>{
        const classArr = [classes.ProductOption];
        if (pos === props.currentPreviewImagePos){
            classArr.push(classes.ProductOptionSelected);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
        );
    }
    )

    const featureList = props.data.featureList.map((item,pos) => {
        
        const classArr = [classes.FeaturesBtn];
        if (pos === props.currentSelectedFeature){
            classArr.push(classes.FeaturesBtnSelected)
        }
        
        return(
            <button key={pos} className={classArr.join(' ')} onClick={()=>props.onFeatureOptionClick(pos)}>{item} </button>
        );
    }
    )


    return(

        <div className = {classes.ProductInfo}>

            <h1 className = {classes.ProductTitle}>{props.data.title}</h1>
            <p className = {classes.ProductDescription}>{props.data.description}</p>
            <div className={classes.Line}></div>
            <h3 className ={classes.Heading}> Select Color:</h3>


            <div className={classes.OptionsContainer}>
                {colorOptions}
            </div>

            <h3 className={classes.Heading}>Features</h3>

            <div className={classes.FeaturesContainer}>
                {featureList}
            </div>

            <button className={classes.BuyBtn}>Buy Now</button>


        </div>

    );

}

export default ProductInfo;