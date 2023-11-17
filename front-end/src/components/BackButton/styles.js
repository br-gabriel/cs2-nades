import styled from "styled-components/native";

export const Header = styled.View`
  background-color: #26264E;

  padding: 20px;
  paddingTop: 45px;

  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const Title = styled.Text`
  color: #fff;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`

export const BackBtn = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 30px;
`