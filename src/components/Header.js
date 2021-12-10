import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapped>
      <div>
        <h2>Find the best UI/UX Designer jobs</h2>
        <p>
          It takes just one job to develop a successful relationship that can
          propel your career forward.
        </p>
        <div>
          <ButtonCallToAction type="button">Find work</ButtonCallToAction>
          <LinkTo href="#top">Want tio hire a Web Designer?</LinkTo>
        </div>
      </div>
      <div>
        <h2>Professionals on TalentHunt rate clients</h2>
        <StarsContainer>
          <div>
            <span className="material-icons icons-brown">star</span>
            <span className="material-icons icons-brown">star</span>
            <span className="material-icons icons-brown">star</span>
            <span className="material-icons icons-brown">star</span>
            <span className="material-icons icons-brown">star_half</span>
          </div>
          <p>4,5/5</p>
        </StarsContainer>
        <p>on average from 2M+ reviews</p>
      </div>
    </Wrapped>
  );
};

const Wrapped = styled.div`
  display: flex;
  margin-top: 25px;
  background-color: #352b21;
  border-radius: 25px;

  & > div {
    padding: 50px;
    width: 50%;
    height: 300px;
  }

  div:first-child div button {
    margin-right: 15px;
  }

  & > div h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 1.2;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
  }

  & > div:first-child h2 {
    color: #f5a52c;
  }

  & > div p {
    font-size: 15px;
  }

  & > div:nth-child(2) {
    margin: 10px;
    border-radius: 25px;
    background-color: #f5a52c;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > div:nth-child(2) h2 {
    color: #352b21;
  }

  & > div:nth-child(2) p {
    color: #352b21;
    font-weight: 600;
    margin-top: 0px;
  }
`;

const ButtonCallToAction = styled.button`
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  background-color: #f5a52c;
  font-weight: 500;
`;

const LinkTo = styled.a`
  color: #f5a52c;
  font-weight: 300;
  font-size: 13px;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Header;
