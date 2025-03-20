import { Routes, Route } from "react-router-dom"; // SPA를 만들어주는 패키지
import styled from "styled-components";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import Modal from "../Modal";

const Main = styled.main`
  margin-top: 110px;
`;

export default function App() {
  return (
    <>
      <AppHeader />
      <Main>
        <Container>
          <Routes>
            <Route path="/" exact element={<VideoList />} />
            <Route
              path="/:videoId"
              element={
                <Modal />
              }
            />
          </Routes>
        </Container>
      </Main>
    </>
  );
}
