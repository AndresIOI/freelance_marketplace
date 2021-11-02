import Navbar from './Navbar';

function withLayout(Wrapped) {
  // eslint-disable-next-line func-names
  return function () {
    return (
      <div>
        <Navbar />
        <Wrapped />
      </div>
    );
  };
}

export default withLayout;
