import React from 'react';
import { categories } from './products';
import { Button, Grid, Typography, } from '@mui/material';
import './catalog.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Catalog = () => {
    const [products, setProducts] = useState({});
    const getProducts = () => {
        setProducts({
            3: {   
        
                name: 'Perfume Savage',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec pulvinar urna. Nullam eleifend lacinia tristique. Suspendisse tempus nec nibh euismod accumsan. Nunc est elit, laoreet non varius et, hendrerit vel arcu. Quisque nunc nunc, feugiat eget est ac, ultrices blandit libero. Suspendisse potenti. Donec ut elementum nulla, in tristique arcu. Nam commodo consequat ultricies. Nullam malesuada libero erat, quis varius lectus porta a. Quisque feugiat ullamcorper varius. Quisque facilisis eget turpis quis ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rhoncus, erat in pretium finibus, ligula metus ullamcorper lorem, at pulvinar est risus vitae leo.',
                images:  [
                    'https://api-beauty.dior.com/couture/var/dior/storage/images/horizon/fragrance/mens-fragrance/sauvage-le-parfum/slider-3-sauvage-edt/image1/17896318-1-fre-FR/image1_1440_1200.jpg',
                    'https://cdn.shopify.com/s/files/1/0388/7287/5140/products/dior-sauvage-edp-perfume-for-him-913162_800x.jpg?v=1626324714',
                    'https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw2b25e1a0/assets/Y0998004/Y0998004_E05_GHC_en_US.jpg?sw=715&sh=773&sm=fit&imwidth=800',
                    
                ],
                price: 119.99,
                promo_price: 96.19,
                percent: 15,
                categories: [1, 2, 3],
                button: "ver produto"
            },
            1: {
        
                name: 'Perfume One Million',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec pulvinar urna. Nullam eleifend lacinia tristique. Suspendisse tempus nec nibh euismod accumsan. Nunc est elit, laoreet non varius et, hendrerit vel arcu. Quisque nunc nunc, feugiat eget est ac, ultrices blandit libero. Suspendisse potenti. Donec ut elementum nulla, in tristique arcu. Nam commodo consequat ultricies. Nullam malesuada libero erat, quis varius lectus porta a. Quisque feugiat ullamcorper varius. Quisque facilisis eget turpis quis ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rhoncus, erat in pretium finibus, ligula metus ullamcorper lorem, at pulvinar est risus vitae leo.',
                images: [
        
                    'https://cdn.awsli.com.br/1650/1650992/produto/69627385/4b5d1ff266.jpg',
                    'https://www.sephora.pt/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5a221e25/images/hi-res/alternates/PID_alternate5/PID_alternate5_274/P3310002_5.jpg?sw=265&sh=265&sm=fit',
                    'https://cf.shopee.com.br/file/e9c21d98d4475f8380dbd224dc052206',
                ],
                price: 110.99,
                percent: 15,
                categories: [4, 5, 6],
            },
            4:{
                
                name: 'Perfume Calvin Klein ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec pulvinar urna. Nullam eleifend lacinia tristique. Suspendisse tempus nec nibh euismod accumsan. Nunc est elit, laoreet non varius et, hendrerit vel arcu. Quisque nunc nunc, feugiat eget est ac, ultrices blandit libero. Suspendisse potenti. Donec ut elementum nulla, in tristique arcu. Nam commodo consequat ultricies. Nullam malesuada libero erat, quis varius lectus porta a. Quisque feugiat ullamcorper varius. Quisque facilisis eget turpis quis ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rhoncus, erat in pretium finibus, ligula metus ullamcorper lorem, at pulvinar est risus vitae leo.',
                images: [
                    'https://www.eclock.com.br/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/p/e/perfume-ck-be-de-calvin-klein-100ml-04.jpg',
                    'https://m.media-amazon.com/images/I/51Pd9TjUTYL.jpg',
                    'https://d2cc85u81ew8co.cloudfront.net/wp-content/uploads/CK-Free-de-Calvin-Klein-para-hombre-flyer-2.jpg'
                ],
                price: 90.99,
                promo_price: 72.99,
                percent: 15,
                categories: [7, 8, 9],
                button: "ver produto",
            },
            2:{
                name: 'Perfume Chanel',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec pulvinar urna. Nullam eleifend lacinia tristique. Suspendisse tempus nec nibh euismod accumsan. Nunc est elit, laoreet non varius et, hendrerit vel arcu. Quisque nunc nunc, feugiat eget est ac, ultrices blandit libero. Suspendisse potenti. Donec ut elementum nulla, in tristique arcu. Nam commodo consequat ultricies. Nullam malesuada libero erat, quis varius lectus porta a. Quisque feugiat ullamcorper varius. Quisque facilisis eget turpis quis ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rhoncus, erat in pretium finibus, ligula metus ullamcorper lorem, at pulvinar est risus vitae leo.',
                images: [
                    'https://espritdegabrielle.com/wp-content/uploads/2020/08/CHANEL-COCO-MADEMOISELLE-LEAU-PRIVE%CC%81E-4-scaled.jpg',
                    'https://1.bp.blogspot.com/-pyERTWKrevo/YO60n4Yj0uI/AAAAAAACg1Q/2BW1pzmGGd8CZbh5pFouBRlf8v0ENVAVgCLcBGAsYHQ/s1200/bleu-de-chanel-vale-a-pena%2B%25281%2529.jpg',
                    'https://www.souqmar.com/images/thumbs/0010967_chanel-allure-homme-sport-100-ml-edt-men-perfume-original-perfume.jpeg'
                ],
                price: 100.99,
                percent: 15,
                categories: [10, 11, 12],
            }
        })
    }
    
    useEffect(()=> {
        getProducts()
    }, []);




    return <Grid container spacing={6} className="Grid">
        {
            Object.keys(products).map(id => {
                return  <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
                    <span className="desconto-item">20%</span>
                    
                    <img className="img-item" src={products[id].images[1]}/>
                    <Link to={"../product/" + id}>
                    {
                        products[id].categories.map(categoryId => {
                            return <span className='category-label'> {categories[categoryId].name} </span>
                        })
                        
                    }
                    </Link>
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
                    <div>
                        <Link to={"../product/" + id}>
                            <Button fullWidth variant="contained" sx={{
                                display: 'inline'
                            }} >
                                {
                                    products[id].button ? <Typography fullWidth  variant="p" component="p" >{products[id].button}</Typography> 
                                    : <Typography fullWidth variant="p" component="p">Ver produto</Typography> 
                                }
                            </Button>
                        </Link>
                    </div>
                    
                </Grid>
            })
        }

    </Grid>
}

export default Catalog;