import { List, BgImage, ButtonMap, BtnTitle, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function MapsList() {
  const { navigate } = useNavigation();
  
  return (
    <List>
      <Container>
        <BgImage 
          source={require('../../../assets/maps-thumbs/mirage4.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => navigate('Map', {selectedMap: 'Mirage'})}>
            <BtnTitle>Mirage</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/inferno8.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => navigate('Map', {selectedMap: 'Inferno'})}>
            <BtnTitle>Inferno</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/overpass5.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => navigate('Map', {selectedMap: 'Overpass'})}>
            <BtnTitle>Overpass</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/dust4.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => navigate('Map', {selectedMap: 'Dust'})}>
            <BtnTitle>Dust II</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/nuke1.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => navigate('Map', {selectedMap: 'Nuke'})}>
            <BtnTitle>Nuke</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/ancient3.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => navigate('Map', {selectedMap: 'Ancient'})}>
            <BtnTitle>Ancient</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/anubis9.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => navigate('Map', {selectedMap: 'Anubis'})}>
            <BtnTitle>Anubis</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/vertigo6.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => navigate('Map', {selectedMap: 'Vertigo'})}>
            <BtnTitle>Vertigo</BtnTitle>
          </ButtonMap>
        </BgImage>
      </Container>
    </List>
  );
};