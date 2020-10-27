import styled from 'styled-components';

export const Outer = styled.div`
  min-height: 100px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const InputFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const TotalResults = styled.div`
  font-weight: 500;
`;
