import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import config from '../theme/config';

const Theme = ({ children }) => {
  return <ThemeProvider theme={{ config }}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
