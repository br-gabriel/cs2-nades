import styled from "styled-components/native"

export const List = styled.ScrollView`
  paddingTop: 18px;
  width: 100%;
`

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const ButtonMap = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 90%;
  height: 150px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 24px;
  background-color: gray;
`

export const BtnTitle = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
`