import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import { useEffect, useState } from "react";
import { getVideoList } from "../../utils/youtube.js";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	display: grid;
	padding: 2em 0 0;
	width: 100%;
	grid-template-columns: repeat(5, minmax(150px, 1fr));
	grid-template-rows: 200px 200px 200px;
	column-gap: 20px;
	row-gap: 100px;
`;

const BlurContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(4px);
	z-index: 1;
`;

const BaseContainer = styled.div`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 75vw;
	height: 85vh;
	border-radius: 20px;
	background-color: white;
	z-index: 2;
	padding: 10px 20px;
`;

const CloseContainer = styled.div`
	width: 100%;
	height: 30px;
	justify-content: end;
	position: relative;
	text-align: right;
`;

export default function VideoList() {
	const [videoData, setVideoData] = useState([]);
	const [pageToken, setPageToken] = useState("");
	const [page, setPage] = useState(0);
	const [item, setItem] = useState(1);
	async function run() {
		const { items, nextPageToken } = await getVideoList(pageToken);
		setVideoData((prev) => [...prev, ...items]);
		setPageToken(nextPageToken);
	}
	useEffect(() => {
		run();
	}, []);

	useEffect(() => {
		const handler = () => {
			console.log(1);
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				setPage((prevPage) => prevPage + 1);
				window.removeEventListener("scroll", handler);
				run();
			}
		};

		window.addEventListener("scroll", handler);

		return () => {
			window.removeEventListener("scroll", handler);
		};
	}, [page]);
	return (
		<Wrapper data-test="video-list">
			{videoData.map((item) => {
				return (
					<Link to={"/a"} key={item.id.videoId} state={{ item }}>
						<VideoListEntry videoId={item.id.videoId} item={item} />
					</Link>
				);
			})}
		</Wrapper>
	);
}

// 처음에 렌더링 10개만하고
// 스크롤 할 때 getVideoList호출하기
