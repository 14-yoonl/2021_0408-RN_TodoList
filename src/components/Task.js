import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import IconBtn from "./IconBtn";
import { icons } from "../icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;
const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;

const Task = ({ text }) => {
  return (
    <Container>
      <IconBtn icon={icons.unCheck} />
      <Contents>{text}</Contents>
      <IconBtn icon={icons.edit} />
      <IconBtn icon={icons.delete} />
    </Container>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Task;
