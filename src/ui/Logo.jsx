import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="imgs/logocf.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
