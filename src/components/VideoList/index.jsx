import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import {useEffect,useState} from "react";
import { getVideoList } from "../../utils/youtube.js";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  grid-template-rows: 200px 200px 200px;
  column-gap: 20px;
  row-gap: 100px;
`;


export default function VideoList() {
  const [videoData,setVideoData] = useState([]);

  async function run() {
    const data = await getVideoList();
    setVideoData(data);
      // 과제 제출 때 없애야 함
  }

  useEffect(() => {
    run();
  },[]);

  return (
    <Wrapper data-test="video-list">
      {videoData.map((item) => {
        return (
          <Link to={"/a"} key={item.id.videoId} state={{item}}>
            <VideoListEntry videoId={item.id.videoId} item={item}/>
          </Link>
        )
      })}
    </Wrapper>
  );
}


