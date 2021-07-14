import { Container, Title } from './Container.styled';

export const Section = ({title, children}) => {
    return (
        <Container>
            {title && <Title>{title}</Title>}
                {children}
        </Container>
    )
}

export default Section;