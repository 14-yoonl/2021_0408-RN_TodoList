import React from "react";
import styled from "styled-components/native";
// import PropTypes from "prop-types";
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
  color: ${({ theme, isCompleted }) => (isCompleted ? theme.done : theme.text)};
  text-decoration-line: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;

const Task = ({ task, removeTask, toggleTask }) => {
  return (
    <Container>
      <IconBtn
        icon={task.isCompleted ? icons.check : icons.uncheck}
        task={task}
        onPress={toggleTask}
      />
      <Contents isCompleted={task.isCompleted}>{task.text}</Contents>
      {task.isCompleted || <IconBtn icon={icons.edit} />}
      <IconBtn icon={icons.delete} task={task} onPress={removeTask} />
    </Container>
  );
};

// Task.propTypes = {
//   task: PropTypes.object.isRequired,
//   removeTask: PropTypes.func.isRequired,
//   toggleTask: PropTypes.func.isRequired,
// };

export default Task;
