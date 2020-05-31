import React from "react"
import Fade from "react-reveal/Fade"

const Features = () => {
  return (
    <div className="container bg_white" id="features">
      <div className="grid_wrapper">
        <div className="features_wrapper">
          <Fade bottom cascade>
            <div className="feature_content">
              <h1>
                Our platform brings <br></br>it all together.
              </h1>
              <p>
                GokenGo platform can enable manufacturing factory floor, process
                plants, Oil & Gas sites and hospitals ICUs to go digital. It
                captures the essence of continuity in daily operations.
              </p>
            </div>
          </Fade>
          <div className="one">
            <div className="card card_one">
              <div className="content">
                <h2 className="title">Record</h2>
                <div className="copy">
                  Good manufacturing practice (GMP) regulations specify that
                  manufacturer must maintain proper documentation and records.
                  It helps to understand what a manufacturing function has done
                  in the past and what it is doing now and, thus, it provides a
                  basis for planning what it is going to do in the future.
                </div>
              </div>
            </div>
          </div>
          <div className="two">
            <div className="card card_two">
              <div className="content">
                <h2 className="title">Measure</h2>
                <div className="copy">
                  {" "}
                  Measurements records parameters that monitor the condition of
                  an asset. It includes vibration data, acoustic data,
                  temperature, pressure, moisture, humidity , environment data
                  and many more
                </div>
              </div>
            </div>
          </div>
          <div className="three">
            <div className="card card_three">
              <div className="content">
                <h2 className="title">Aggregate</h2>
                <div className="copy">
                  Heterogeneity of data sources and data types require a
                  carefully designed data aggregation process that can receive
                  data passively as well as actively
                </div>
              </div>
            </div>
          </div>
          <div className="four">
            <div className="card card_four">
              <div className="content">
                <h2 className="title">Analyze</h2>
                <div className="copy">
                  Manufacturers need to continually apply analytics – asset by
                  asset, line by line, process by process and plant by plant to
                  capture the full value of the technology. Analytics dashboard
                  is not a one-off exercise
                </div>
              </div>
            </div>
          </div>
          <div className="five">
            <Fade bottom cascade>
              <div className="feature_content">
                <h1>
                  Our platform brings <br></br>it all together.
                </h1>
                <p>
                  GokenGo platform can enable manufacturing factory floor,
                  process plants, Oil & Gas sites and hospitals ICUs to go
                  digital. It captures the essence of continuity in daily
                  operations.
                </p>
              </div>
            </Fade>
          </div>
          <div className="six">
            <div className="card card_six">
              <div className="content">
                <h2 className="title">Delegate</h2>
                <div className="copy">
                  Feedback is the most important part of the delegation process,
                  and it works both ways. A tool that will help you complete the
                  feedback loop can be highly effective for delegation. Without
                  delegation, quality of work diminishes and increases chances
                  of missing deadlines
                </div>
              </div>
            </div>
          </div>
          <div className="seven">
            <div className="card card_six">
              <div className="content">
                <h2 className="title">Act</h2>
                <div className="copy">
                  Effective problem solving in manufacturing requires clear and
                  decisive action. Decision making can be improved by systematic
                  rational approach supported by good data management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
