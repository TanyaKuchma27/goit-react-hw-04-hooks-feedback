import {Container, Title} from './Section.styled';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};
export default Section;