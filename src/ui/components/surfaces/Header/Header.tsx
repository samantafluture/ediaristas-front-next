import { Container, Toolbar } from '@mui/material';
import Link from 'ui/components/navigation/Link/Link';
import RoundedButton from 'ui/components/inputs/RoundedButton/RoundedButton';
import { HeaderAppBar, HeaderLogo, ButtonsContainer } from './Header.style';

const Header = () => {
    return <HeaderDesktop />;
};

const HeaderDesktop = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <Link href={'/'}>
                    <HeaderLogo
                        src={'/img/logos/logo.svg'}
                        alt={'e-diaristas'}
                    />
                </Link>

                <div>&nbsp;</div>
                <div>&nbsp;</div>

                <ButtonsContainer>
                    <Link
                        href={'/cadastro/diarista'}
                        Component={RoundedButton}
                        mui={{ color: 'primary', variant: 'contained' }}
                    >
                        Seja um(a) diarista
                    </Link>
                    <Link href={'/login'} Component={RoundedButton}>
                        Login
                    </Link>
                </ButtonsContainer>
            </Toolbar>
        </HeaderAppBar>
    );
};

export default Header;
