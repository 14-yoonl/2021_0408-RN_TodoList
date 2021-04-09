import React, { useState } from "react";
import styled from "styled-components/native";
// import PropTypes from "prop-types";
import IconBtn from "./IconBtn";
import { icons } from "../icons";
import InputBox from "./InputBox";
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

const Task = ({ task, removeTask, toggleTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [originText, setOriginText] = useState(task.text);

  const _onSubmit = () => {
    if (isEditing) {
      const updateItem = Object.assign({}, task);
      updateItem["originText"] = originText;
      updateTask(updateItem);
      setIsEditing(false);
    }
  };
  return isEditing ? (
    <InputBox
      value={originText}
      onChangeText={(originText) => setOriginText(originText)}
      // 수정버튼을 눌렀을 때의 input value는 기존의 value 여야함 따라서 기존의 value를 state로 관리, 인용한다.
      onSubmitEditing={_onSubmit}
    />
  ) : (
    <Container>
      <IconBtn
        icon={task.isCompleted ? icons.check : icons.uncheck}
        task={task}
        onPress={toggleTask}
      />
      <Contents isCompleted={task.isCompleted}>{task.text}</Contents>
      {task.isCompleted || (
        <IconBtn icon={icons.edit} onPress={() => setIsEditing(true)} />
      )}
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
