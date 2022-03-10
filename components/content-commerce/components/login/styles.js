import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 100vh;
`;

export const LoginStyle = styled.div`
  text-align: center;
  form {
    background: var(--color-box-background);
    margin: 0px auto 0;
    max-width: 700px;
  }
  svg {
    width: 200px;
  }
  input {
    border: 1px solid #000;
    outline: none;
  }

  h4 {
    margin: 0 auto;
    max-width: 400px;
  }

  p {
    margin: 50px 20px;
  }
`;

export const Fields = styled.div`
  display: flex;
  margin: 40px 0 60px;
  align-items: center;
  flex-direction: column;
  input {
    border-radius: 4px;
    flex: 1 1 auto;
    text-align: center;
    border: 1px solid #000;
    /* border-right-width: 0; */
    padding: 15px;
    width: 400px;
    margin: 0;
  }
`;

export const Btn = styled.a`
  border: 2px solid #000;
  background: transparent;
  font-size: 16px;
  color: #000;
  font-weight: 800;
  padding: 10px 25px;
  border-radius: 5px;
  max-width: 200px;
  margin-top: 25px;
  &:hover {
    color: #fff;
    background: #000;
  }
`;
