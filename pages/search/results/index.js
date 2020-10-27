import styled from "styled-components";
import { Outer } from "./styles";
import Link from "next/link";
export default function SearchResults({ edges = [] }) {
  console.log(edges);
  return (
    <Outer>
      <ul>
        {edges.map(({ cursor, node }) => (
          <Item key={cursor}>
            <Link href={node.path}>
              <a>
                {console.log(node)}
                {node.name}
              </a>
            </Link>
          </Item>
        ))}
      </ul>
    </Outer>
  );
}
const Item = styled.li``;
