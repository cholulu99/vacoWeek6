import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import Modal from "../Modal";
import { useState, useRef } from "react";
import AlertModal from "../AlertModal";

const Main = styled.main`
	margin-top: 110px;
`;

export default function App() {
	const [text, setText] = useState("");
	const [isEmpty, setIsEmpty] = useState(false);
	const [alertModalOpen, setAlertModalOpen] = useState(false);
	const inputRef = useRef(null);
	//inputRef.current.blur();

	return (
		<>
			<AppHeader
				text={text}
				setText={setText}
				setIsEmpty={setIsEmpty}
				setAlertModalOpen={setAlertModalOpen}
				inputRef={inputRef}
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
