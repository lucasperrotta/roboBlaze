import {Box, Typography} from '@mui/material'

const Header = ({sx}) => (
    <Box sx={sx}>
        <Typography variant="h1" sx={{
            color: 'white',
            fontSize: '30px'
        }}>
            RoboBlaze
        </Typography>
    </Box>
)

export default Header