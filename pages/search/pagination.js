import styled from "styled-components";

// import { Button } from 'ui';

const Outer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
`;

export default function Pagination({ navigate, pageInfo }) {
  const { hasPreviousPage, hasNextPage } = pageInfo;

  if (!hasPreviousPage && !hasNextPage) {
    return null;
  }

  return (
    <Outer>
      <button
        onClick={() => navigate({ direction: "prevPage" })}
        disabled={!hasPreviousPage}
      >
        Previous page
      </button>
      <button
        onClick={() => navigate({ direction: "nextPage" })}
        disabled={!hasNextPage}
      >
        Next page
      </button>
    </Outer>
  );
}
