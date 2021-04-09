import React from "react";
import { TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { icons } from "../icons";

// import PropTypes from "prop-types";
const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.done : theme.text};
`;

const IconBtn = ({ icon, onPress, task }) => {
  const _onPress = () => {
    onPress(task.id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} isCompleted={task.isCompleted} />
      </View>
    </TouchableOpacity>
  );
};

IconBtn.defaultProps = {
  task: { isCompleted: false },
};

IconBtn.propTypes = {
  //oneOf 는 배열로 들어옴 따라서 객체의 값들만 배열안에 넣어 줘서 그 값들을 이용해야함
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
  onPress: PropTypes.func,
  task: PropTypes.object,
};

export default IconBtn;
