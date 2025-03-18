import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import {useEffect} from "react";
import { getVideoList } from "../../utils/youtube";

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: 200px 200px 200px;
  column-gap: 20px;
  row-gap: 20px;
`;

export default function VideoList() {
  const [videoData, setVideoData] = useState([]);

  async function run() {
    const videoData = getVideoList();
    setVideoData(videoData);

  }
  useEffect(async () => {
    // API 요청하기
    run();
  });

  return (
    <Wrapper data-test="video-list">
      {videoData.items.map((item) => {
        return <VideoListEntry item={item}/>
      })}  
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
      <VideoListEntry />
    </Wrapper>
  );
}
