import Navbar from './Navbar';
import Container from '../utils/Container';

function withLayout(Wrapped) {
  // eslint-disable-next-line func-names
  return function () {
    return (
      <div>
        <Navbar />
        <Container>
          <Wrapped />
        </Container>
      </div>
    );
  };
}

export default withLayout;
