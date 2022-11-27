import { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import {
  ContactsPage,
  EducationPage,
  HomePage,
  PortfolioPage,
  TechnologiesPage,
  NotFoundPage,
} from "./pages";
import Nav from "./components/Nav";
import { Container } from "@mui/material";
import Layout from "./components/Layout";

const App: FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "scale(0.95)", filter: "blur(13px)" },
    enter: { opacity: 1, transform: "scale(1)", filter: "blur(0)" },
    leave: { opacity: 0, transform: "scale(1.05)", filter: "blur(13px)" },
  });
  return (
    <Container maxWidth="md">
      <Nav />
      <div style={{ position: "relative" }}>
        {transitions((props, item) => (
          <animated.div style={props}>
            <div style={{ position: "absolute", width: "100%" }}>
              <Routes location={item}>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="education" element={<EducationPage />} />
                  <Route path="technologies" element={<TechnologiesPage />} />
                  <Route path="portfolio" element={<PortfolioPage />} />
                  <Route path="contacts" element={<ContactsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </div>
          </animated.div>
        ))}
      </div>
    </Container>
  );
};

export default App;
