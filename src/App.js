import Menu from "./Menu";
import Body from "./Body";
import About from "./About";
import Education from "./Education";
import Technologies from "./Technologies";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPages } from "./redux/pagesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPages());
  }, []);

  return (
    <>
      <Menu />
      <Body />
    </>
  );
}

export default App;
