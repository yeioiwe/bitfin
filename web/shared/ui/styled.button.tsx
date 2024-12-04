import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)({
    backgroundColor: 'rgb(1,167,129)',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#355a8e',
    },
    paddingLeft: '35px',
    paddingRight: '35px',
    fontWeight: 'bold',
    textTransform: 'none',
});
