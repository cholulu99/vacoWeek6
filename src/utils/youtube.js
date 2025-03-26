export const YOUTUBE_API_KEY = "AIzaSyAVNy7yTW7546gSLmxZo_G31ELPPqfo3pU";

export async function getVideoList(nextPageToken) {
	const pageToken = nextPageToken;
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&pageToken=${pageToken}&type=video&q="이문세"&key=${YOUTUBE_API_KEY}`;
	const response = await fetch(url);
	const data = await response.json();
	const Token = await data.nextPageToken;
	const videoData = await data.items;
	return { items: videoData, nextPageToken: Token };
}
