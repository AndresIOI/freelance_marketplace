import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = ({ children }) => <Wrapped>{children}</Wrapped>;

const Wrapped = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Container;
