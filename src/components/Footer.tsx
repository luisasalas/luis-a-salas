import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const theme = {
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: '250px'
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'tomato',
                fontSize: '1.8rem'

            }
        }
    }
}

function Footer() {
    return (
        <BottomNavigation  style={{ background: '#222' , width: 'auto'}}>
            <BottomNavigationAction
                sx={theme}
                style={{ padding: 0 }}
                icon={<LinkedInIcon />}
            />
            <BottomNavigationAction
                sx={theme}
                style={{ padding: 0 }}
                icon={<GitHubIcon />}
            />
            <BottomNavigationAction
                style={{ padding: 0 }}
                sx={theme}
                icon={<InstagramIcon />}
            />
        </BottomNavigation>
    )
}

export default Footer
