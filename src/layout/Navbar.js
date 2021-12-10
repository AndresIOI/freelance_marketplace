import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapped>
      <div>
        <div>
          <span className="material-icons icons-orange md-36">stars</span>
        </div>
        <Menu>
          <li>Work</li>
          <li>Freelancers</li>
        </Menu>
      </div>
      <div>
        <div>
          <span className="material-icons icons-orange">sync_alt</span>
        </div>
        <div>
          <span className="material-icons icons-orange">
            chat_bubble_outline
          </span>
        </div>
        <div>
          <span className="material-icons icons-orange">
            notifications_none
          </span>
        </div>
        <div>
          <span className="material-icons icons-orange">account_circle</span>
        </div>
      </div>
    </Wrapped>
  );
};

const Wrapped = styled.div`
  padding: 15px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #353535;

  & > div {
    width: 25%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  & > div:first-child {
    justify-content: start;
    align-items: center;
  }

  & > div:last-child div {
    margin-left: 30px;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  & li {
    margin-left: 30px;
  }
`;

export default Navbar;
