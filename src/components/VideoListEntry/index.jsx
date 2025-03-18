import styled from "styled-components";
import PropTypes from "prop-types";

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

export default function VideoListEntry({ videoId = "", item }) {
  debugger;
  return (
    <EntryWrapper data-test={`video-item-${videoId}`}>
      <div>
        <img
          src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg"
          alt=""
          data-test="video-thumbnail"
        />
      </div>
      <div className="contents">
        <div data-test="video-title">Video Title</div>
        <div data-test="video-description">Video Description</div>
      </div>
    </EntryWrapper>
  );
}

VideoListEntry.propTypes = {
  videoId: PropTypes.string.isRequired,
};
