export const YOUTUBE_API_KEY = "AIzaSyBeFPaXI3_qYOToW6CIJj3d0p1hdL-5RoA";

export default async function getVideoList(nextPageToken, input) {
	const pageToken = nextPageToken;
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&pageToken=${pageToken}&type=video&q=${input}&key=${YOUTUBE_API_KEY}`;
	const response = await fetch(url);
	const data = await response.json();
	const Token = await data.nextPageToken;
	const videoData = await data.items;
	return { items: videoData, nextPageToken: Token };
}
