import React from "react";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";
import PropTypes from "prop-types";

const TodoInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.text};
`;

export default function InputBox({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) {
  //기기환경의 맞는 값을 알려주는 Dimensions
  // const width = Dimensions.get("window").width;
  const width = useWindowDimensions().width;
  return (
    <TodoInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
    />
  );
}

InputBox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};
