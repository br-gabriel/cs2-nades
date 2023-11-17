import { useState } from "react";
import { Text } from "react-native";
import { Container, Title, SelectSide, TrSide, CtSide, SelectGrenade, RadioBtn, SelectContainer } from "./styles";
import { FontAwesome } from '@expo/vector-icons';

export function Filter() {
  const [side, setSide] = useState("TR");
  const [type, setType] = useState("smoke");

  return (
    <Container>
      <Title>Side</Title>

      <SelectSide>
        <TrSide value={side} onPress={() => setSide("TR")}>
          <Text style={{ color: '#fff', fontSize: 17 }}>
            TR
          </Text>
        </TrSide>

        <CtSide value={side} onPress={() => setSide("CT")}>
          <Text style={{ color: '#fff', fontSize: 17 }}>
            CT
          </Text>
        </CtSide>
      </SelectSide>

      <Title>Type</Title>

      <SelectContainer>

        <SelectGrenade onPress={() => setType("smoke")}>
          <RadioBtn>
            <FontAwesome name="circle" size={14} color={type == "smoke" ? "#6E6FFF" : "rgba(255, 255, 255, 0), 255, 255)"} />
          </RadioBtn>

          <Text style={{ color: '#fff', fontSize: 17 }}>Smoke</Text>
        </SelectGrenade>

        <SelectGrenade onPress={() => setType("molotov")}>
          <RadioBtn>
            <FontAwesome name="circle" size={14} color={type == "molotov" ? "#6E6FFF" : "rgba(255, 255, 255, 0), 255, 255)"} />
          </RadioBtn>

          <Text style={{ color: '#fff', fontSize: 17 }}>Molotov</Text>
        </SelectGrenade>

        <SelectGrenade onPress={() => setType("flash")}>
          <RadioBtn>
            <FontAwesome name="circle" size={14} color={type == "flash" ? "#6E6FFF" : "rgba(255, 255, 255, 0), 255, 255)"} />
          </RadioBtn>

          <Text style={{ color: '#fff', fontSize: 17 }}>Flash</Text>
        </SelectGrenade>

        <SelectGrenade onPress={() => setType("grenade")}>
          <RadioBtn>
            <FontAwesome name="circle" size={14} color={type == "grenade" ? "#6E6FFF" : "rgba(255, 255, 255, 0), 255, 255)"} />
          </RadioBtn>

          <Text style={{ color: '#fff', fontSize: 17 }}>Grenade</Text>
        </SelectGrenade>

      </SelectContainer>

    </Container>
  );
};