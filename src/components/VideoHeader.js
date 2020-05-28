import React from "react"
import MainVideo from "../assets/main.mp4"

const VideoHeader = () => {
  return (
    <div className="container">
      <div className="header_video_wrapper">
        <video autoPlay muted>
          <source src={MainVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default VideoHeader
