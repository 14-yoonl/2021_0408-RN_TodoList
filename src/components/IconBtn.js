import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
// import PropTypes from "prop-types";
// import icons from "../icons";
const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme }) => theme.text};
`;

const IconBtn = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon source={icon} />
      </View>
    </TouchableOpacity>
  );
};

// IconBtn.propTypes = {
//   //oneOf 는 배열로 들어옴 따라서 객체의 값들만 배열안에 넣어 줘서 그 값들을 이용해야함
//   icon: PropTypes.oneOf(Object.values(icons)).isRequired,
//   onPress: PropTypes.func,
// };

export default IconBtn;
