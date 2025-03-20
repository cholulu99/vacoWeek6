import styled from "styled-components";
import PropTypes from "prop-types";
import {useState} from "react";

const EntryWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  .contents {
    flex-grow: 1;
  }
`;

export default function VideoListEntry({ videoId = "", item}) {
  let isShow=true;
  if(item.snippet.description.length >= 30 || item.snippet.description=== "") {
    isShow = false;
  }
  return (
    <EntryWrapper data-test={`video-item-${videoId}`}>
      <div>
        <img
          src={item.snippet.thumbnails.medium.url}
          alt=""
          data-test="video-thumbnail"
        />
      </div>
      <div className="contents">
        <div data-test="video-title">영상 제목: {item.snippet.title}</div>
        {isShow && <div data-test="video-description">설명: {item.snippet.description}</div>}
      </div>
    </EntryWrapper>
  );
}

VideoListEntry.propTypes = {
  videoId: PropTypes.string.isRequired,
};
