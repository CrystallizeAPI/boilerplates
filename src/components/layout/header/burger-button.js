import React from "react"
import styled from "styled-components"

import { responsive, colors } from "ui"

const Outer = styled.button.attrs(() => ({
  type: "button",
}))`
  appearance: none;
  display: none;
  cursor: pointer;
  background: transparent;
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  right: 15px;
  margin-right: 15px;
  z-index: 100;
  padding: 0;

  ${responsive.smAndLess} {
    display: block;
    margin-right: 5px;
  }
`

const Lines = styled.div`
  width: 100%;
  position: absolute;
  background: ${(p) => (p.open ? "transparent" : colors.frostbite)};
  height: 4px;
  top: 50%;
  margin-top: -2px;
  border-radius: 2px;
  transition: all 0.2s ease-out;

  &:before,
  &:after {
    width: 100%;
    top: -14px;
    background: ${colors.frostbite};
    height: 4px;
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s ease-out;
  }
  &:after {
    transform: ${(p) => (p.open ? "rotate(-45deg)" : "rotate(0deg)")};
    left: ${(p) => (p.open ? "0px" : "8px")};
    width: ${(p) => (p.open ? "100%" : "calc(100% - 8px)")};
    top: ${(p) => (p.open ? "0" : "14px")};
  }
  &:before {
    transform: ${(p) => (p.open ? "rotate(45deg)" : "rotate(0deg)")};
    top: ${(p) => (p.open ? "0" : "-14px")};
  }
`

export default function BurgerButton({ active, onClick }) {
  return (
    <Outer open={active} onClick={onClick}>
      <Lines open={active} />
    </Outer>
  )
}
