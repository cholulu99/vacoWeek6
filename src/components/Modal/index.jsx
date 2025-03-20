import styled from "styled-components";
import VideoPlayer from "../Video";
import React from "react";
import { useLocation } from "react-router-dom";

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

const VideoContainer = styled.div`
  width: 80%;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align:center;
`;

export default function Modal() {
    const location = useLocation();
    const video = location.state.item;
    
    return(
        <BlurContainer>
            <BaseContainer>
                <CloseContainer>
                    <button>X</button>
                </CloseContainer>
                <VideoContainer>
                    <VideoPlayer video={video}/>
                </VideoContainer>
            </BaseContainer>
        </BlurContainer>
    )
}