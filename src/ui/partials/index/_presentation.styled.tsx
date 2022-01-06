import { styled } from '@mui/material';
import { Container } from '@mui/material';
import RoundedButton from 'ui/components/inputs/RoundedButton/RoundedButton';
import Link, { LinkProps } from 'ui/components/navigation/Link/Link';

export const SectionContainer = styled('section')``;

export const ContainerStyled = styled(Container)``;

export const SectionTitle = styled('h1')``;

export const SectionDescription = styled('p')``;

export const SectionButton = styled((props: LinkProps) => (
    <Link {...props} Component={RoundedButton} />
))``;

export const SectionPictureContainer = styled('div')``;