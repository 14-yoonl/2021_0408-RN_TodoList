import { StatusBar, Dimensions } from "react-native";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./Theme";
import TodoInput from "./components/InputBox";
import Task from "./components/Task";

export default function App() {
  //현재 보여지고있는 디바이스의 width값을 가져옴
  const width = Dimensions.get("window").width;

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(tempData);

  const tempData = {
    1: { id: "1", text: "React-native", isCompleted: false },
    2: { id: "2", text: "expo", isCompleted: false },
    3: { id: "3", text: "React", isCompleted: false },
  };

  const addTask = () => {
    if (newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, isCompleted: false },
    };
    setNewTask("");
    setTasks({ ...tasks, ...newTaskObject });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle="light-content" />
        <Title>오늘 뭐함?</Title>
        <TodoInput
          placeholder="+ 할 일을 추가하세요"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
        />
        <List width={width}>
          {tasks.map((task) => (
            <Task key={tesk.id} text={tesk.text} />
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}

//ios의 노치 디자인을위한 기본 padding값을 주는 태그
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;
