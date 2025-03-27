import { Routes, Route, useMatch } from "react-router-dom";
import styled from "styled-components";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import Modal from "../Modal";
import { useState, useRef } from "react";
import AlertModal from "../AlertModal";
import { useEffect } from "react";
import getVideoList from "../../utils/youtube.js";
const Main = styled.main`
	margin-top: 110px;
`;

export default function App() {
	const [text, setText] = useState("");
	const [isEmpty, setIsEmpty] = useState(false);
	const [alertModalOpen, setAlertModalOpen] = useState(false);
	const [videoData, setVideoData] = useState([]);
	const [pageToken, setPageToken] = useState("");
	const isLoadingRef = useRef(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	async function run() {
		const { items, nextPageToken } = await getVideoList(pageToken);
		setVideoData((prev) => [...prev, ...items]);
		setPageToken(nextPageToken);
	}

	useEffect(() => {
		run();
		console.log("useEffect!");
	}, []);

	useEffect(() => {
		const handler = async () => {
			console.log("window.scrollY:" + window.scrollY);
			console.log("window.innerHeight: " + window.innerHeight);
			console.log("document: " + document.body.offsetHeight);
			if (
				window.innerHeight + window.scrollY >= document.body.offsetHeight &&
				!isLoadingRef.current
			) {
				run();
				isLoadingRef.current = true;
			}
		};

		window.addEventListener("scroll", handler);

		return () => {
			isLoadingRef.current = false;
			window.removeEventListener("scroll", handler);
		};
	});

	useEffect(() => {
		document.body.style.overflow = "visible";
	}, [isModalOpen]);

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
								<VideoList videoData={videoData} isLoadingRef={isLoadingRef} />
							}
						>
							<Route
								path="/:videoId"
								element={<Modal isModalOpen={isModalOpen} />}
							/>
						</Route>
					</Routes>
				</Container>
			</Main>
		</>
	);
}
