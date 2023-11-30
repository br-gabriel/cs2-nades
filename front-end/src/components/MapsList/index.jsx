import { useContext } from "react";
import { List, BgImage, ButtonMap, BtnTitle, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FilterContext } from "../../context/filterContext";

export function MapsList() {
  const { navigate } = useNavigation();
  const { setSelectedMap } = useContext(FilterContext)

  const handleSelectMap = (map) => {
    setSelectedMap(map)
  }
  
  return (
    <List>
      <Container>
        <BgImage 
          source={require('../../../assets/maps-thumbs/mirage4.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => {
            navigate('Map', {chosenMap: 'Mirage'});
            handleSelectMap('mirage');
          }}>
            <BtnTitle>Mirage</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/inferno8.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => {
            navigate('Map', {chosenMap: 'Inferno'});
            handleSelectMap('inferno');
          }}>
            <BtnTitle>Inferno</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/overpass5.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => {
            navigate('Map', {chosenMap: 'Overpass'});
            handleSelectMap('overpass');
          }}>
            <BtnTitle>Overpass</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/dust4.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => {
            navigate('Map', {chosenMap: 'Dust II'});
            handleSelectMap('dust2');
          }}>
            <BtnTitle>Dust II</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/nuke1.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => {
            navigate('Map', {chosenMap: 'Nuke'});
            handleSelectMap('nuke')
          }}>
            <BtnTitle>Nuke</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/ancient3.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => {
            navigate('Map', {chosenMap: 'Ancient'});
            handleSelectMap('ancient');
          }}>
            <BtnTitle>Ancient</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/anubis9.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => {
            navigate('Map', {chosenMap: 'Anubis'});
            handleSelectMap('anubis');
          }}>
            <BtnTitle>Anubis</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/vertigo6.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap onPress={() => {
            navigate('Map', {chosenMap: 'Vertigo'});
            handleSelectMap('vertigo');
          }}>
            <BtnTitle>Vertigo</BtnTitle>
          </ButtonMap>
        </BgImage>
      </Container>
    </List>
  );
};