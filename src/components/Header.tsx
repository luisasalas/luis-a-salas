import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ReactTyped } from "react-typed";
import avatar from '../avatar.png'

const typedContainer = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1
}
const subtitle = {
    color: 'tan',
    marginBottom: '3rem'
} 

const avatar2 = {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
}


const Header = () => {
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
                <Avatar className={classes.avatar} src={avatar} alt='Luis Salas' />
            </Grid>
            <Typography className={classes.title} variant='h4'>
                <ReactTyped strings={['Luis Salas']} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant='h5'>
                <ReactTyped
                    strings={['Full Stack Web Development', 'AWS Cloud Development', '.NET Core', 'TypeScript']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>

        </Box>
    )
}

export default Header
