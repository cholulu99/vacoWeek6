export default function VideoPlayer({ video }) {
	return (
		<div>
			<div>영상제목: {video.snippet.title}</div>
			<br />
			<div></div>
			<iframe
				width={700}
				height={400}
				src={"https://www.youtube.com/embed/" + video.id.videoId}
			></iframe>
			<div>업로드 날짜: {video.snippet.publishTime}</div>
			<div>영상 설명: {video.snippet.description}</div>
			<div>야호</div>
		</div>
	);
}

// 가로수 치면 문자열중에 가로수가 연속으로 나온게 있는지 확인한다.
