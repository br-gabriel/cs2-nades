import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./stack.routes";
import FilterContextProvider from "../context/filterContext";

export function Routes() {
  return (
    <FilterContextProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </FilterContextProvider>
  );
};