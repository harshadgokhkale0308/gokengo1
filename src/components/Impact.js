import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Fade from "react-reveal/Fade"

// Icons

import { AiOutlineFieldTime, AiOutlineFileDone } from "react-icons/ai"
import { TiGroupOutline } from "react-icons/ti"
import { DiGoogleAnalytics } from "react-icons/di"

const Impact = () => {
  return (
    <div className="container bg_white">
      <div className="impact_wrapper">
        <div className="impact_content">
          <div className="heading_text">
            <Fade bottom cascade>
              <h1>Impact of</h1>
              <h1>Workflow</h1>
              <h1>Optimisation</h1>
            </Fade>
          </div>
          <p>
            a simple tool to aggregate shift-wise information helped one of our
            clients create huge economic impact
          </p>
          <div className="money_text">
            $250,000
            <Fade bottom cascade>
              <span>saved annually</span>
            </Fade>
          </div>

          <button onClick={() => scrollTo("#demo")} className="requestDemoBtn">
            Request a Demo
          </button>
        </div>
        <div className="impact_nodes">
          <div className="impact_node">
            <AiOutlineFieldTime className="icon"></AiOutlineFieldTime>
            <p>
              Reduced time for data collection from <span>8</span> hours to{" "}
              <span>2</span> minutes
            </p>
          </div>
          <div className="impact_node">
            <TiGroupOutline className="icon"></TiGroupOutline>
            <p>
              Impacted <span>60 employees</span> every shift
            </p>
          </div>
          <div className="impact_node">
            <AiOutlineFileDone className="icon"></AiOutlineFileDone>
            <p>
              Published daily, weekly and monthly report on a{" "}
              <span>single click</span>
            </p>
          </div>
          <div className="impact_node">
            <DiGoogleAnalytics className="icon"></DiGoogleAnalytics>
            <p>
              Reduced chances of manual errors by <span>25%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Impact
