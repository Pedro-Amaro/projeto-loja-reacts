import React from 'react';
import { categories, products } from './products';
import { Button, Grid, Typography, } from '@mui/material';
import './catalog.css';
import { Link } from "react-router-dom";

const Catalog = () => {
    return <Grid container spacing={6} className="Grid">
        {
            Object.keys(products).map(id => {
                return  <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
                    <span className="desconto-item"
                    >40%</span>
                    <img className="img-item" src={products[id].images[1]}/>

                    {
                        products[id].categories.map(categoryId => {
                            return <span className='category-label'> {categories[categoryId].name} </span>
                        })
                    }
                    
                    <Typography variant="h4" component="h4" className="nome-produto">{products[id].name}</Typography>

                    {
                        products[id].promo_price ? <Typography variant="p" component="p" className="promo_price" >{products[id].promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'USS'})}</Typography> : ""
                    }

                    <Typography variant="p" component="p" className="price" style={{
                        fontSize: products[id].promo_price ? '16px' : '20px',
                        color: products[id].promo_price ? '#555555' : '#333333',
                        textDecoration: products[id].promo_price ? 'line-through' : 'none',
                    }} >{products[id].price.toLocaleString('pt-br',{style: 'currency', currency: 'USS'})}</Typography>

                    
                    <Typography variant="p" component="p" className="lorem-item" >{products[id].description.substring(0, 300)}...</Typography>

                    <Link to={"../product/" + id}>
                        <Button fullWidth variant="contained">
                            Ver produto
                         </Button>
                    </Link>
                </Grid>
             })
        }

    </Grid>
}

export default Catalog;