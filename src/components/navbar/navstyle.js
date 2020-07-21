import styled from "styled-components";

export const Navsection = styled.div`
  width: 100%;
  background-color: rgb(50, 50, 50, 0.8);
  text-align: center;
  position: fixed;
  z-index: 1;
  opacity: 0;
  visibality: hidden;
  transition: opacity 0.5s, visibality 0.5s;
  &:hover {
    opacity: 1;
    visibality: visiable;
  }
`;
export const Title = styled.h2`
  color: #fff;
  padding-top: 8px;
  font-size: 2em;
`;
export const Ullist = styled.ul`
  list-style: none;
`;
export const Litem = styled.li`
  display: inline-block;
  padding: 5px;
`;
