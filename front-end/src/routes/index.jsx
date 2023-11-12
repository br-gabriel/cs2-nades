import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};