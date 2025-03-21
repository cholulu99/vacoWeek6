import styled from "styled-components";
import React from "react";

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

export default function AlertModal({ modalClose, setModalClose }) {

    return(
        <>
            {modalClose ? null
            :
                (
                    <BlurContainer>
                        <BaseContainer>
                            <CloseContainer>
                                <button onClick={() => setModalClose(true)}>X</button>
                            </CloseContainer>
                            <VideoContainer>
                                <h1>검색어를 입력하세요!!</h1>
                            </VideoContainer>
                        </BaseContainer>
                    </BlurContainer>
                )
            }
        </>
    )
}