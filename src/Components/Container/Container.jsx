import { Container, Title } from './Container.styled';
import PropTypes from "prop-types";

const Section = ({title, children}) => {
    return (
        <Container>
            {title && <Title>{title}</Title>}
                {children}
        </Container>
    )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;