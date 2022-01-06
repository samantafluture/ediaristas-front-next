import {
    ContainerStyled,
    SectionContainer,
    SectionTitle,
    SectionDescription,
    SectionButton,
    SectionPictureContainer
} from './_presentation.styled';

const Presentation = () => {
    return (
        <SectionContainer>
            <ContainerStyled>
                <SectionTitle>Encontre agora mesmo um(a) diarista</SectionTitle>

                <SectionDescription>
                    São mais de 5.000 profissionais esperando por você!
                </SectionDescription>

                <SectionButton
                    mui={{ variant: 'contained' }}
                    href={'/encontrar-diarista'}
                >
                    Encontrar um(a) diarista
                </SectionButton>

                <SectionPictureContainer>
                    <img src={'/img/home/housekeeper.png'} alt={'Diarista'} />
                </SectionPictureContainer>
            </ContainerStyled>
        </SectionContainer>
    );
};

export default Presentation;
