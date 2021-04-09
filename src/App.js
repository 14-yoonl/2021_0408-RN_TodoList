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

  const tempData = {
    1: { id: "1", text: "React-native", isCompleted: false },
    2: { id: "2", text: "expo", isCompleted: false },
    3: { id: "3", text: "React", isCompleted: false },
  };
  // 데이터를 선언하고 나서 hooks 사용하기 코드 위치 , 순서가 중요!!
  const [tasks, setTasks] = useState(tempData);

  const addTask = () => {
    if (newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    //ID라는 텍스트가 아닌 ID에 할당된 값을 키값으로 활용하기 위해 []를 씌워준다
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, isCompleted: false },
    };
    setNewTask("");
    setTasks({ ...tasks, ...newTaskObject });
  };

  const removeTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    // 객체 복사 .assign(target,source) 가 들어간다 1번째 인자로 대상 , 2번째 인자로 출처 객체가 들어간다.
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]["isCompleted"] = !currentTasks[id]["isCompleted"];
    setTasks(currentTasks);
  };

  const updateTask = (task) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[task.id] = task;
    setTasks(currentTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* styled-componenet 적용한 ScorllView */}
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
          {Object.values(tasks)
            .reverse()
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                removeTask={removeTask}
                toggleTask={toggleTask}
                updateTask={updateTask}
              />
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
