import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import Modal from "../Modal";
import { useState, useRef } from "react";
import AlertModal from "../AlertModal";
import { useEffect } from "react";
const Main = styled.main`
	margin-top: 110px;
`;

export default function App() {
	const [text, setText] = useState("");
	const [isEmpty, setIsEmpty] = useState(false);
	const [alertModalOpen, setAlertModalOpen] = useState(false);
	const [videoData, setVideoData] = useState([]);
	const [pageToken, setPageToken] = useState("");

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
						<Route
							path="/"
							exact
							element={
								<VideoList
									videoData={videoData}
									setVideoData={setVideoData}
									pageToken={pageToken}
									setPageToken={setPageToken}
								/>
							}
						/>
						<Route path="/:videoId" element={<Modal />} />
					</Routes>
				</Container>
			</Main>
		</>
	);
}
