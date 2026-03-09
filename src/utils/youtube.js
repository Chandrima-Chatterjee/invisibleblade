const API_KEY = "AIzaSyCqxjgf_4O_f0Ihic3LK4mJbs4Z5xxWsRU";
const CHANNEL_ID = "UCRel61i1pJDs9dBk6tCwSbQ";

export async function fetchYouTubeVideos() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=30`
  );

  const data = await response.json();

  const videoIds = data.items
    .filter(item => item.id.kind === "youtube#video")
    .map(item => item.id.videoId)
    .join(",");

  // Fetch extra details (views, duration)
  const detailsRes = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,statistics,contentDetails`
  );

  const details = await detailsRes.json();

  return details.items.map((video, index) => ({
    id: `ep${index + 1}`,
    title: video.snippet.title,
    description: video.snippet.description,
    cover: video.snippet.thumbnails.high.url,
    link: `https://youtu.be/${video.id}`,
    views: video.statistics.viewCount,
    published: video.snippet.publishedAt,
    duration: video.contentDetails.duration
  }));
}