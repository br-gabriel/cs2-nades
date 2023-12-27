import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./stack.routes";
import FilterContextProvider from "../context/filterContext";
import SelectedContextProvider from "../context/selectedContext";

export function Routes() {
  return (
    <FilterContextProvider>
      <SelectedContextProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </SelectedContextProvider>
    </FilterContextProvider>
  );
};