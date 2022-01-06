import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const HeaderAppBar = styled(AppBar)`
    &.MuiAppBar-root {
        background-color: ${({ theme }) => theme.palette.background.paper};
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    .MuiToolbar-root {
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        gap: ${({ theme }) => theme.spacing(9)};
        justify-content: space-between;
        height: 100px;
    }
`;

export const HeaderLogo = styled('img')`
    height: 25px;

    ${({ theme }) => theme.breakpoints.up('md')} {
        height: 47px;
    }
`;

export const ButtonsContainer = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: ${({ theme }) => theme.spacing(2)};
`;
