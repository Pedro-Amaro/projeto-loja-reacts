import { useState, useEffect } from 'react';
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { products, categories } from '../catalog/products';
import {
    Grid,
    Stack,
    Typography,
    Button,
    TextField,
    Chip,
    IconButton,
}from "@mui/material";
import "./product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Product = () => {
    const params = useParams();
    const [currentImage, setCurrentImage] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setCurrentImage(products[params.id].images[0])
    }, []);

    const setImageToView = (position) => {
        setCurrentImage(products[params.id].images[position])
    }

    const changeQuantityButton = (value) => {
        if(quantity >= 0) {
            let result = quantity + value;
            if(result === -1) {
                result = 0;
            }
            setQuantity(result)
        } else{}
    }

    return <Grid container spacing={2} className="product">
            <Grid item xs={12} sm={5} className="imageSide">
                <Stack   className="mainImage_image">
                    <div className="imageSide_image-item" style={{
                        backgroundImage: `url(${currentImage})`
                    }}>

                    </div>
                </Stack>
                <Stack direction="row" className="iconImage_images">

                    {
                        products[params.id].images.map((image, idx) => <img onClick={()=> setImageToView(idx)} width="auto" height="104px" src={image}/>)
                    }
                    
                </Stack>
            </Grid>
            <Grid item xs={12} sm={7} className="productItem">
                <Typography variant="h4" component="h1" className="productItem_title">{products[params.id].name}</Typography>
                <div className="product_categories">
        
                    {
                    products[params.id].categories.map(categoryId =><Chip className="productItem_categories-label" label={categories[categoryId].name}/>)
                    }
                </div>

                {
                        products[params.id].promo_price ? <Typography variant="p" component="p" className="productItem_promo_price">{products[params.id].promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'USS'})}</Typography>: ""
                }
                
                <Typography variant="p" component="p" className="productItem_price" style={{
                        fontSize: products[params.id].promo_price ? '16px' : '20px',
                        color: products[params.id].promo_price ? '#555555' : '#333333',
                        textDecoration: products[params.id].promo_price ? 'line-through' : 'none',
                    }} >{products[params.id].price.toLocaleString('pt-br',{style: 'currency', currency: 'USS'})}</Typography>



                <Typography variant="p" component="p" className="productItem_descrption">{products[params.id].description}</Typography>

                <div className="productItem_quantity">

                    <IconButton onClick={() => changeQuantityButton(-1)}>
                        <RemoveCircleOutlineIcon color='primary'/>
                    </IconButton>

                    <TextField size="small" type="number" value={quantity} onChange={(event) => {setQuantity(event.target.value)}} />

                    <IconButton onClick={() => changeQuantityButton(1)}>
                        <AddCircleOutlineIcon color='primary'/>
                    </IconButton>
                </div>
                    <Link to={"../cart"}>
                    <Button style={{display: 'inline'}} variant="contained" size="large" endIcon={<ShoppingCartIcon/>}
                className="productItem_buy">Buy</Button> 
                    </Link>
                
            </Grid>

        </Grid>

   // return <h1>
   //            Produto 
   //           
   //         </h1>
}

export default Product;