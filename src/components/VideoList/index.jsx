import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import { Link, Outlet } from "react-router-dom";

const Wrapper = styled.div`
	display: grid;
	padding: 2em 0 0;
	width: 100%;
	grid-template-columns: repeat(5, minmax(150px, 1fr));
	grid-template-rows: 200px 200px 200px;
	column-gap: 20px;
	row-gap: 100px;
`;

export default function VideoList({ videoData }) {
	return (
		<Wrapper data-test="video-list">
			{videoData.map((item, index) => {
				return (
					<Link to={"/a"} key={item.id.videoId + index} state={{ item }}>
						<VideoListEntry videoId={item.id.videoId} item={item} />
					</Link>
				);
			})}
			<Outlet />
		</Wrapper>
	);
}

// 처음에 렌더링 10개만하고
// 스크롤 할 때 getVideoList호출하기
