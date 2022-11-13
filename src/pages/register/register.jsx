import '../../assets/css/auth.css';
import cover from '../../assets/img/cover-login.jpg';
import logo from '../../assets/img/Logo3.png';
import register from '../../assets/img/Registro.png';

import { Link } from 'react-router-dom';

import {
    Grid,
    Box,
    TextField,
    Button,
    Stack,
    InputAdornment,
    OutlinedInput,
    IconButton,
    FormControl,
    InputLabel,
} from "@mui/material";

import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import React, { useState } from 'react';
import { width } from '@mui/system';

const Register = () => {
    const [visibilityToggle, setvisibilityToggle] = useState(false);

    const toggleVisibility = () => {
        setvisibilityToggle(!visibilityToggle)
    }

    return <Grid container spacing={2} style={{
        height:'100vh'
    }}> 
                <Grid className='leftSide' item sx={{
                    padding: '20',
                    boxSizing: 'border-box'
                }}  xs={0} md={7} lg={8} >

                    <Stack spacing={2} style={{
                        height:'100%',
                        justifyContent: 'center',
                        alignItems:'center'
                    }}>
                    <img src={register} style={{
                        width: '65%',
                    }} alt="Logo"/>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Stack spacing={2} style={{
                        height:'100%',
                        justifyContent: 'center',
                        alignItems:'center',
                        paddingLeft: 16,
                        paddingRight:16,
                        boxSizing: 'border-box',
                    }}>
                        <Stack>
                            <img src={logo} style={{
                                width: '85%',
                                marginLeft: '35px'
                            }} alt="Logo"/>
                        </Stack>
                        <h1>Register your user</h1>
                        <Grid container >
                        <Grid item xs={12} sx={{
                                marginBottom:'10px'
                            }}>
                                <TextField fullWidth label="User" type="text" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom:'10px'
                            }}>
                                <TextField fullWidth label="E-mail" type="email" variant="outlined" />
                            </Grid>
                            <Grid 
                                item xs={12} sx={{
                                marginBottom:'10px'
                            }}>
                                <FormControl sx={{
                                    width: '100%' }} >
                                <InputLabel>Password </InputLabel>
                                <OutlinedInput  
                                color='primary'
                                fullWidth 
                                label="Password" 
                                id='password'
                                type={visibilityToggle ? 'text' : 'password'} 
                                endAdornment={<InputAdornment position="end">
                                <IconButton
                                 aria-label="Clique aqui"
                                 onClick={toggleVisibility}
                                >
                                {
                                    visibilityToggle ?<VisibilityOff/>  : <Visibility/>
                                }
                                </IconButton>
                                </InputAdornment>}
                                variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom:'10px'
                            }}>
                                 <TextField  
                                color='primary'
                                fullWidth 
                                label="confirm password" 
                                type={visibilityToggle ? 'text' : 'password'} 
                                variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom:'10px'
                             }}>
                             <Button style={{display: 'inline'}} fullWidth variant="contained" endIcon={<LoginIcon/>}>Register</Button>
                            </Grid>
                            <Link
                             style={{
                                textAlign: 'center',
                                display:'block',
                                width: '100%',
                             }} 
                             to="/login">Sign</Link>
                        </Grid>
                    </Stack>
                </Grid>
           </Grid>
} 

export default Register;