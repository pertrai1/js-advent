
const featureTitleText = document.querySelector('.feature > h1');
const featureDescriptionText = document.querySelector('.feature > p');
const iframeElement = document.querySelector('.feature > .embed > iframe');
const galleryElement = document.querySelector('.gallery');

const loadVideos = async () => {
    try {
        const res = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCQtKw-UIpnYNk2HE2ssqEjjMJTFA6ucDg&channelId=UC-T8W79DN6PBnzomelvqJYw&part=snippet,id&order=date&maxResults=20');
        const {items} = await res.json();
        return items;
    }catch(err) {
        console.error(err);
    }
}

const displayVideos = async () => {
    const videos = await loadVideos();
  console.log(videos)
    const {title, description} = videos[0].snippet;
    const {videoId} = videos[0].id;
    featureTitleText.innerText = title;
    featureDescriptionText.innerText = description;
    iframeElement.src = `https://www.youtube.com/embed/${videoId}`;

    const galleryHTMLString = videos.slice(1).map( video => {
        const {videoId} = video.id;
        const {title, thumbnails} = video.snippet;
        const thumbnail = thumbnails.default.url;
        const href = `https://www.youtube.com/watch?v=${videoId}`;
        return `
            <li>
                <a id="${videoId}" class="video" href="#" onclick="playVideo(this)">
                    <img src="${thumbnail}" alt="${title}">
                    <h3>${title.substring(0,20)}...</h3>
                </a>
            </li>
        `;
    }).join('')
    galleryElement.innerHTML = galleryHTMLString;
}

function playVideo(target) {
  console.log(target.id)
  iframeElement.src = `https://www.youtube.com/embed/${target.id}`;
}
displayVideos();
