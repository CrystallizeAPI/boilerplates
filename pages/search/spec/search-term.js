import React, { useState } from "react";
import styled from "styled-components";
// import { InputGroup, Input, InputButton } from "ui";

const InputGroup = styled.div``;
const Input = styled.div``;
const InputButton = styled.button``;

export default function SearchTerm({ searchTerm, onChange }) {
  const [term, setTerm] = useState(searchTerm || "");
  return (
    <InputGroup
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        onChange(term);
      }}
    >
      <Input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <InputButton type="submit">➔</InputButton>
    </InputGroup>
  );
}
