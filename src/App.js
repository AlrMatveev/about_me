import Menu from "./Menu";
import Body from "./Body";
import About from "./About";
import Education from "./Education";
import Technologies from "./Technologies";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import { useState } from "react";

const pages = [
  { name: "About_me", component: <About /> },
  { name: "Обучение", component: <Education /> },
  { name: "Технологии", component: <Technologies /> },
  { name: "Портфолио", component: <Portfolio /> },
  { name: "Контакты", component: <Contacts /> },
];

function App() {
  const [page, setPage] = useState(pages[0].name);

  return (
    <>
      <Menu pages={pages} setPage={setPage} />
      <Body pages={pages} page={page} />
    </>
  );
}

export default App;
