import React from 'react';
import {productsCart} from './produtos-cart';
import { Grid, List, ListItem, ListItemAvatar, Stack, Typography, IconButton, TextField, Button,  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import "./cart.css";
import { Link } from "react-router-dom"



const Cart = () => {
    const totals = [
        [110.99, null],
        [100.99,null],
        [96.19, 23.8]
    ]
    
    const total = totals.reduce((pValue, cValue) =>{
        return cValue[0] + pValue;
    }, 0 )

    const totalPromo = totals.reduce((pValue, cValue) =>{
        if(cValue[1]){
            return (cValue[1]) + pValue;
        }
        return 0 + pValue;
    }, 0 )
    console.log(totalPromo)

return <Grid container spacing={2} sx={{
    padding: '40px',
    boxSizing: 'border-box'
}}>
 <Grid item xs={12} md={12} lg={8} sx={{
    padding: '20px !important',
}}>
        <div style={{
            boxSizing: 'border-box',
            backgroundColor: "#fff",
            borderRadius: '15px',
            boxShadow: '4px 4px 12px -6px rgba(0,0,0,0.6)'
        }}>

      <List sx={{width: '100%'}}>

        {
          Object.keys(productsCart).map(id => {
            return  <ListItem sx={{
                alignItems: 'center'
             }}
               secondaryAction={
                    <IconButton sx={{
                        right: '10px'
                    }}
                    edge="end"           aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
               } 
                alignItems="flex-start">
                 <ListItemAvatar 
                    sx={{
                        flexGrow: 1,
                    }}
                    className="stackImage">
                     {/*<Avatar alt="Remy Sharp" src="https://cdn.awsli.com.br/1650/1650992/produto/69627385/4b5d1ff266.jpg" /> */}
                     <div style={{
                        backgroundImage: `url("${productsCart[id].images[1]}")`
                     }}>
    
                     </div>
                 </ListItemAvatar>
    
                <Stack
                    sx={{
                        flexGrow: 2,
                    }}
                    direction="row">
                    <Stack direction="column" sx={{
                        justifyContent: 'center',
                        paddingLeft: '10px',
                        boxSizing: 'border-box',
                        flexGrow: 2,
                    }}>
                        <Typography
                        sx={{ 
                            display: 'inline',
                            fontWeight: '600',
                            fontSize: '1.2em',
                            }}
                        component="h6"
                        variant="h6"
                        >
                        {productsCart[id].name}
                        </Typography>
                        <Typography
                            sx={{
                             display: 'inline',
                             fontSize: '0.9em',
                             color: "color",
                            }}
                        component="p"
                        variant="p"
                        >
                        {
                            productsCart[id].description.substring(0, 70)
                        }
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        alignItems: 'center',
                        flexGrow: 1,
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        boxSizing: 'border-box'
                    }}>
                      {
                        productsCart[id].promo_price ?       <Typography
                            sx={{ 
                                display: 'inline',
                                color: 'red',
                                fontWeight: '700',
                                fontSize: '16px',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                boxSizing: 'border-box'
                             }}
                        component="p"
                        variant="p"
                     >
                        {productsCart[id].promo_price.toLocaleString('en-US', { style:'currency',currency: 'USD' })}
                      </Typography> : <span 
                            style={{
                              minWidth: '70px'
                            }}/>  
                      }
                      <Typography
                        sx={{ 
                            display: 'inline',
                            paddingLeft: '5px',
                            paddingRight: '5px',
                            boxSizing:
                            'border-box',
                            textDecoration: productsCart[id].promo_price ? 'line-through' : "none",
                            fontSize: productsCart[id].promo_price ? '12px' : "14px"
                             }}
                        component="p"
                        variant="p"
                     >
                        {productsCart[id].price.toLocaleString('en-US', { style:'currency',currency: 'USD' })}
                      </Typography>
                    </Stack>
                    <Stack className="stackQuantity" direction="row" sx={{
                        alignItems: 'center',
                        flexGrow: 1,
                    }}>
                        <TextField 
                        size="sma ll" 
                        type="number"
                        />
                    </Stack>
                </Stack>
             </ListItem> 
           })
        }  
     </List>
  </div>
</Grid>

<Grid item xs={12} md={12} lg={4} sx={{
    padding: '20px !important',
}}>
    <div className="boxCompras">
        <ul className="listTotal">
            <li>
                <span>Total:</span>
                <span>{total.toLocaleString('en-US', { style:'currency',currency: 'USD' })}</span>
            </li>
            <li>
                <span>Desconto:</span>
                <span>
                    {totalPromo.toLocaleString('en-US', { style:'currency',currency: 'USD' })}
                </span>
            </li>
            <li>
                <span>Subtotal:</span>
                <span>{(total - totalPromo).toLocaleString('en-US', { style:'currency',currency: 'USD' })}</span>
            </li>
        </ul>
         <Link to="checkout">
            <Button variant="contained" fullWidth>Finalziar</Button>
         </Link>   
    </div>
        
</Grid>
 </Grid>

}

export default Cart;