import { Header, BackBtn, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export function BackButton({title}) {
  const { goBack } = useNavigation();

  return(
    <Header>
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
    </Header>
  );
};