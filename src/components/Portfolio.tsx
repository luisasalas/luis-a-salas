import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import project1 from '../images/html-css-javascript-lg.jpg'
import project2 from '../images/javascript-fullstack.jpg'
import project4 from '../images/mern-stack.jpg'
import project3 from '../images/react-redux.jpg'
import Navbar from './Navbar'

const userStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    }
})
const Portfolio = () => {
    const classes = userStyles()
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center'>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 1'
                                height='140'
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 1
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 2'
                                height='140'
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 2
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 3'
                                height='140'
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 3
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 4'
                                height='140'
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 4
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
