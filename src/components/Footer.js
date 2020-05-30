import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Fade from "react-reveal/Fade"

const Footer = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit } = useForm()

  const onSubmitFooter = data => {
    console.log(data.emailFromUpdates)
    const email = data.emailFromUpdates
    addToMailchimp(email)
      .then(data => setSubmitted(true))
      .catch(e => console.error(e))
  }

  return (
    <div className="container bg_black">
      <div className="footer_wrapper">
        <div className="footer_heading">
          <h1>
            <Fade bottom cascade>
              <div className="text">GokenGo.</div>
            </Fade>
          </h1>
          <p>
            An operations Management Platform for the Factory Floor. Never miss
            a beat , stay connected always !
          </p>
        </div>
        <div className="signup">
          {!submitted ? (
            <div>
              <div className="signup_heading">
                <Fade bottom cascade>
                  <div className="inner_text">Sign up for updates</div>
                </Fade>
              </div>
              <form onSubmit={handleSubmit(onSubmitFooter)}>
                <input
                  type="text"
                  placeholder="enter your email"
                  name="emailFromUpdates"
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                <input className="submitBtn" type="submit" />
              </form>
            </div>
          ) : (
            <h1>Thank you for your submission!!</h1>
          )}
        </div>
        <div className="offices_section">
          <div className="offices_heading">
            <Fade bottom cascade>
              <div className="office_text">Offices</div>
            </Fade>
          </div>
          <h1>
            <div className="office_heading_text">India</div>
            <div className="anim_text_wrapper">
              <Fade bottom cascade>
                <div className="office_text">
                  3rd Floor, Alacrity India Innovation Center, Pune, Maharashtra
                  411057, IN
                </div>
              </Fade>
            </div>
          </h1>
          <h1>
            <div className="office_heading_text">United States</div>
            <div className="anim_text_wrapper">
              <Fade bottom cascade>
                <div className="office_text">
                  5100 Parkcenter Avenue Dublin, Ohio 43017 USA
                </div>
              </Fade>
            </div>
          </h1>
        </div>
        <div className="footer_links">
          {/* <ul>
            <li>
              <div className="link">
                <a href="#">Industries</a>
              </div>
            </li>
            <li>
              <div className="link">
                <a href="#">Platform</a>
              </div>
            </li>
            <li>
              <div className="link">
                <a href="#">Case Studies</a>
              </div>
            </li>
          </ul> */}
          <ul>
            <Fade bottom cascade>
              <li>
                <div className="link">
                  <Link to="/about">About.</Link>
                </div>
              </li>
              <li>
                <div className="link">
                  <a className="link" href="#">
                    Blog.
                  </a>
                </div>
              </li>
              <li>
                <div className="link">
                  <a className="link" onClick={() => scrollTo("#demo")}>
                    Contact.
                  </a>
                </div>
              </li>
            </Fade>
          </ul>
        </div>
      </div>
      <div className="copyright">
        copyright © 2020 GokenGo , All rights reserved.
      </div>
    </div>
  )
}

export default Footer
