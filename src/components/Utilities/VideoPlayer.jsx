"use client"

import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {

    return (
        <div className="w-full pt-2">
            <YouTube
                iframeClassName="w-full md:h-[64.3vh] h-[244px]"
                videoId={youtubeId}
                onReady={(event) => { event.target.pauseVideo() }}
            />
        </div>
    )
}

export default VideoPlayer