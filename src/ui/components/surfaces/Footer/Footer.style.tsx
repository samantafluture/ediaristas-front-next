import { styled } from '@mui/material/styles';
import { Typography, ListItem } from '@mui/material';

export const FooterContainer = styled('footer')`
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding: ${({ theme }) => theme.spacing(4)} 0;
`;

export const FooterTitle = styled((props) => (
    <Typography variant={'body2'} component={'h2'} {...props} />
))`
    font-weight: bold;
`;

export const FooterListItem = styled((props) => (
    <ListItem disableGutters {...props} />
))``;
