import { Header, BackBtn, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function BackButton({title}) {
  const { goBack } = useNavigation();

  return(
    <Header>
      <BackBtn onPress={goBack}>
        <Feather 
          name="arrow-left"
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