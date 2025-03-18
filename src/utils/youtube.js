export const YOUTUBE_API_KEY = 'AIzaSyD-b8gXxG_FBCHydHZwF79giZbPL4opxKA';
export const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${YOUTUBE_API_KEY}`;



export async function getVideoList() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}