import { registerRootComponent } from "expo";
import Login from "./screens/Login";
import React from "react";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

registerRootComponent(App);
