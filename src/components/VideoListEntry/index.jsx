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

export default function VideoListEntry({ videoId = "", item},key) {

  return (
    <EntryWrapper data-test={`video-item-${videoId}`} key={key}>
      <div>
        <img
          src={item.snippet.thumbnails.medium.url}
          alt=""
          data-test="video-thumbnail"
        />
      </div>
      <div className="contents">
        <div data-test="video-title">{item.snippet.title}</div>
        <div data-test="video-description">{item.snippet.description}</div>
      </div>
    </EntryWrapper>
  );
}

VideoListEntry.propTypes = {
  videoId: PropTypes.string.isRequired,
};
