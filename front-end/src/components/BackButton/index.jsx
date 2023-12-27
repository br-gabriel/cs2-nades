import { Header, BackBtn, Title, Container, ClearBtn, BtnTitle } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { useContext } from 'react';
import { SelectedContext } from '../../context/selectedContext';
import { Text } from 'react-native';

export function BackButton({ title }) {
  const { goBack } = useNavigation();
  const {clickedNade, setClickedNade} = useContext(SelectedContext)

  return (
    <Header>
      <Container>
        <BackBtn onPress={goBack}>
          <Entypo
            name="chevron-small-left"
            size={30}
            color={"#fff"}
          />
        </BackBtn>

        <Title>
          {title}
        </Title>
      </Container>
      {clickedNade && (
        <ClearBtn
          onPress={() => setClickedNade(null)}
        >
          <BtnTitle>CLEAR</BtnTitle>
        </ClearBtn>
      )}
    </Header>
  );
};