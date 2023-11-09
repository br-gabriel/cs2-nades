import { List, BgImage, ButtonMap, BtnTitle, Container } from "./styles"

export function MapsList() {
  return (
    <List>
      <Container>
        <BgImage 
          source={require('../../../assets/maps-thumbs/mirage4.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap>
            <BtnTitle>Mirage</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/inferno8.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap>
            <BtnTitle>Inferno</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/overpass5.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap>
            <BtnTitle>Overpass</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/dust4.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap>
            <BtnTitle>Dust II</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/nuke1.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap>
            <BtnTitle>Nuke</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/ancient3.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap>
            <BtnTitle>Ancient</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/anubis9.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap>
            <BtnTitle>Anubis</BtnTitle>
          </ButtonMap>
        </BgImage>

        <BgImage 
          source={require('../../../assets/maps-thumbs/vertigo6.jpg')}
          borderRadius={10}
          resizeMode="cover"
        >
          <ButtonMap>
            <BtnTitle>Vertigo</BtnTitle>
          </ButtonMap>
        </BgImage>
      </Container>
    </List>
  )
}