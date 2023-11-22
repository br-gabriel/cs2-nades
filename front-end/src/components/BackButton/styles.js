import styled from "styled-components/native";

export const Header = styled.View`
  background-color: #26264E;

  paddingHorizontal: 20px;
  paddingTop: 45px;
  paddingBottom: 15px;

  flex-direction: row;
  align-items: center;
  gap: 12px;
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