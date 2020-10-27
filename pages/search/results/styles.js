import styled from 'styled-components';

export const Outer = styled.div`
  min-height: 100px;
  max-width: 800px;
  margin: 0 auto;
  display: block;

  ul {
    margin-top: 15px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;

    > li {
      margin: 0;
      padding: 0;
    }
  }
`;
