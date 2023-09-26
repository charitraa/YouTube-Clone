import { videos } from './data/video.js'

let videoHTML = ''

videos.forEach(video => {
  videoHTML += `<div class="video">
                <div class="thumb">
                    <img class="thumbnail" src="${video.thumnail}" alt="">
                    <div class="video-time">
                       ${video.time}
                    </div>
                </div>
                <div class="video-info">
                    <div class="channel-picture">
                        <img src="${video.icon}" alt="">
                    </div>
                    <div class="video-detail">
                        <p class="title">
                            ${video.title}
                        </p>
                        <p class="author">
                        ${video.author}
                        </p>
                        <p class="veiw">
                        ${video.veiw}
                        </p>
                    </div>
                </div>
            </div>`
})

document.querySelector('.container').innerHTML = videoHTML
