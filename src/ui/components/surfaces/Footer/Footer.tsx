import { FooterContainer, FooterTitle, FooterListItem } from './Footer.style';
import { List } from '@mui/material';
import Link from 'ui/components/navigation/Link/Link';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTitle>Menu</FooterTitle>
            <List>
                <FooterListItem>
                    <Link
                        href={'/encontrar-diarista'}
                        mui={{ color: 'inherit', variant: 'body2' }}
                    >
                        Encontrar um(a) diarista
                    </Link>
                </FooterListItem>
                <FooterListItem>
                    <Link
                        href={'/cadastro/diarista'}
                        mui={{ color: 'inherit', variant: 'body2' }}
                    >
                        Seja um(a) diarista
                    </Link>
                </FooterListItem>
                <FooterListItem>
                    <Link
                        href={'/'}
                        mui={{ color: 'inherit', variant: 'body2' }}
                    >
                        Por que usar o E-Diaristas?
                    </Link>
                </FooterListItem>
                <FooterListItem>
                    <Link
                        href={'/'}
                        mui={{ color: 'inherit', variant: 'body2' }}
                    >
                        Principais Dúvidas
                    </Link>
                </FooterListItem>
            </List>
        </FooterContainer>
    );
};

export default Footer;
