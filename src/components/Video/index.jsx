export default function VideoPlayer({video}) {
    return (
        <div>
            <div>영상제목: {video.snippet.title}</div>
            <br/>
            <img src={video.snippet.thumbnails.medium.url}/>
            <div></div>
            <br/>
            <div>업로드 날짜: {video.snippet.publishTime}</div>
            <br/>
            <div>영상 설명: {video.snippet.description}</div>
            <br/>
            <div>야호</div>
        </div>
    )
}