import { makeStyles } from '@material-ui/core'
import React from 'react'
import Particles from 'react-particles-js'
import Header from './Header'
import Navbar from './Navbar'

const useStyles = makeStyles({
    particlesCanvas: {
        position: 'absolute',
        opacity: '0.3'
    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <div>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900,
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: 'tomato'
                            }
                        },
                        size: {
                            value: 8,
                            reandom: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default Home
