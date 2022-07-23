import {Box} from '@mui/material'

const Container = ({sx, children}) => (
    <Box sx={sx}>
        {children}
    </Box>
)

export default Container