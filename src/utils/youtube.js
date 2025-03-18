export const YOUTUBE_API_KEY =
  "환경변수_설정하여_유튜브_API_KEY를_이곳에_넣으세요";


  export async function getVideoList() {
    const response = await fetch();
    const data = await response.json();
    return data.items;
  }