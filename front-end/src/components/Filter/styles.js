import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #26264E;
  flex: 1;
  padding: 16px;
  borderTopLeftRadius: 10px;
  borderTopRightRadius: 10px;
`

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 12px;
`

// Select Side
export const SelectSide = styled.View`
  width: 100%;
  height: 40px;
  margin-bottom: 24px;

  flex-direction: row;
  align-items: center;
  gap: 0;
`

export const TrSide = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  max-width: 200px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.value === "TR" ? '#6E6FFF' : '#1E1F34')};
  borderTopLeftRadius: 5px;
  borderBottomLeftRadius: 5px;
`

export const CtSide = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  max-width: 200px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.value === "CT" ? '#6E6FFF' : '#1E1F34')};
  borderTopRightRadius: 5px;
  borderBottomRightRadius: 5px;
`

// Select Grenade
export const SelectContainer = styled.View`
  gap: 8px;
`

export const SelectGrenade = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 35%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`

export const RadioBtn = styled.View`
  width: 17px;
  height: 17px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 100px;
`