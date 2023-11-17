import styled from "styled-components/native"

export const List = styled.ScrollView`
  paddingVertical: 16px;
  width: 100%;
  background-color: #26264E;
`

export const Container = styled.View`
  width: 90%;

  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`

export const BgImage = styled.ImageBackground`
  width: 100%;
  height: 160px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`

export const ButtonMap = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const BtnTitle = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
`