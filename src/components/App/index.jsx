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
	const [clickHome, setClickHome] = useState(false);

	async function scrollRun() {
		const { items, nextPageToken } = await getVideoList(pageToken, text);
		setVideoData((prev) => [...prev, ...items]);
		setPageToken(nextPageToken);
	}

	async function searchRun(inputText) {
		window.scrollTo(0, 0);
		const { items, nextPageToken } = await getVideoList("", inputText);
		setVideoData(items);
		setPageToken(nextPageToken);
	}

	useEffect(() => {
		searchRun(text);
	}, [clickHome]);

	useEffect(() => {
		const handler = async () => {
			console.log("window.scrollY:" + window.scrollY);
			console.log("window.innerHeight: " + window.innerHeight);
			console.log("document: " + document.body.offsetHeight);
			if (
				window.innerHeight + window.scrollY >= document.body.offsetHeight &&
				!isLoadingRef.current
			) {
				scrollRun();
				isLoadingRef.current = true;
			}
		};

		window.addEventListener("scroll", handler);

		return () => {
			isLoadingRef.current = false;
			window.removeEventListener("scroll", handler);
		};
	});

	return (
		<>
			<AppHeader
				setText={setText}
				setIsEmpty={setIsEmpty}
				setAlertModalOpen={setAlertModalOpen}
				searchRun={searchRun}
				setClickHome={setClickHome}
				clickHome={clickHome}
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
