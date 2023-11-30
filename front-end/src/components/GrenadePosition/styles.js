import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0
})`
  position: absolute;
  top: ${(props) => props.y}%;
  left: ${(props) => props.x}%;
  
  align-items: center;
  justify-content: center;
`

export const NadeIcon = styled.Image`
  width: 30px;
  height: 30px;
`