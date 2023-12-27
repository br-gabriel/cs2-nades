import styled from "styled-components/native";

export const Header = styled.View`
  background-color: #26264E;

  paddingHorizontal: 20px;
  paddingTop: 45px;
  paddingBottom: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.View`
  flex-direction: row;
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

export const ClearBtn = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: #6E6FFF;
  border-radius: 5px;
  margin-right: 7px;
`

export const BtnTitle = styled.Text`
  color: white;
  letter-spacing: 1px;
  font-weight: 400;
  paddingHorizontal: 14px;
  paddingVertical: 5px;
`