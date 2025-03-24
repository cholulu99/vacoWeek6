import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import Modal from "../Modal";
import { useState } from "react";
import AlertModal from "../AlertModal";

const Main = styled.main`
	margin-top: 110px;
`;

export default function App() {
	const [text, setText] = useState("");
	const [isEmpty, setIsEmpty] = useState(false);
	const [videomodalOpen, setVideoModalOpen] = useState(false);
	const [alertModalOpen, setAlertModalOpen] = useState(false);

	return (
		<>
			<AppHeader
				text={text}
				setText={setText}
				setIsEmpty={setIsEmpty}
				setAlertModalOpen={setAlertModalOpen}
			/>
			{isEmpty && (
				<AlertModal
					alertModalOpen={alertModalOpen}
					setAlertModalOpen={setAlertModalOpen}
				/>
			)}
			<Main>
				<Container>
					<Routes>
						<Route path="/" exact element={<VideoList />} />
						<Route path="/:videoId" element={<Modal />} />
					</Routes>
				</Container>
			</Main>
		</>
	);
}
