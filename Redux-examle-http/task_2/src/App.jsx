import React from "react";
import { Provider } from "react-redux";
import UserInfo from "./users/UserInfo";
import SearchField from "./users/SearchField";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <SearchField />
      <UserInfo />
    </Provider>
  )
}

export default App;