import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Navbar from './Navbar'

const textFieldTheme = {
    root: {
        '& label.Mui-focused': {
            color: 'tomato',
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'tan'
            }
        }
    }
}
const Contacts = () => {
    return (
        <Box component='div' style={{ background: '#233', height: '100vh' }}>
            <Navbar />
            <Grid container style={{ justifyContent: 'center'}}>
                <Box component='form'         
                    sx={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        position: 'absolute'
                    }}>
                    <Typography variant='h5' style={{ color: 'tomato', textAlign: 'center', textTransform: 'uppercase' }}>
                        hire or contact me...
                    </Typography>
                    <TextField
                        sx={textFieldTheme}
                        fullWidth={true}
                        label='Name'
                        variant='outlined'
                        inputProps={{
                            style: {
                                color: 'white'
                            }
                        }}
                        margin='dense'
                        size='medium' />
                    <br />
                    <TextField
                        sx={textFieldTheme}
                        fullWidth={true}
                        label='Email'
                        variant='outlined'
                        inputProps={{
                            style: {
                                color: 'white'
                            }
                        }}
                        margin='dense'
                        size='medium' />
                    <br />
                    <TextField
                        sx={textFieldTheme}
                        fullWidth={true}
                        label='Company name'
                        variant='outlined'
                        inputProps={{
                            style: {
                                color: 'white'
                            }
                        }}
                        margin='dense'
                        size='medium' />
                    <br />
                    <Button  
                        sx={{
                            marginTop: '1rem',
                            color: 'tan',
                            borderColor: 'tomato'
                        }} 
                        variant='outlined' 
                        fullWidth={true} 
                        endIcon={<SendIcon />}>
                        Contact me
                        </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
