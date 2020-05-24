import React, { useEffect } from "react"
import { TimelineLite, Power3 } from "gsap"

const TeamHeader = () => {
  let tl = new TimelineLite()
  useEffect(() => {
    tl.from(".team_header_inner_text", 1, {
      y: 100,
      ease: Power3.easeOut,
    }).from(
      ".team_header p",
      0.6,
      { opacity: 0, y: 20, ease: Power3.easeOut },
      "-=0.6"
    )
  }, [tl])

  return (
    <div className="container">
      <div className="team_header_wrapper">
        <div className="team_header">
          <h1>
            <div className="team_header_inner_text">Meet our team.</div>
          </h1>
          <p>
            What are we splashing from the screen, huh? Believe it or not, we
            are even more beautiful in real life. Because give us something to
            think about, build, create or improve and our eyes are really
            starting to shine. Even Photoshop can't compete with that (although
            we are also quite handy with that).
          </p>
        </div>
      </div>
    </div>
  )
}

export default TeamHeader
