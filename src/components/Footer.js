import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import { TimelineLite, Power3 } from "gsap"
import InView, { useInView } from "react-intersection-observer"

const Footer = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
    console.log("This is called")
  }

  const [footerref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  let tl = new TimelineLite()
  useEffect(() => {
    if (inView) {
      tl.from(".footer_heading .text", 1, { y: 100, ease: Power3.easeOut }, 0.6)
        .from(
          ".signup_heading .inner_text",
          0.5,
          {
            y: 100,
            ease: Power3.easeOut,
          },
          "-=0.5"
        )
        .from(".footer_heading p", 0.6, {
          opacity: 0,
          y: 20,
          ease: Power3.easeOut,
        })
        .staggerFrom(
          ".offices_section .office_text",
          0.5,
          { y: 100, ease: Power3.easeOut },
          0.2,
          0.5
        )
        .staggerFrom(
          "ul .link",
          0.5,
          { y: 100, ease: Power3.easeOut },
          0.2,
          0.5
        )
    }
  }, [inView])
  return (
    <div className="container bg_black">
      <div className="footer_wrapper">
        <div className="footer_heading" ref={footerref}>
          <h1>
            <div className="anim_text_wrapper">
              <div className="text">Goken Go.</div>
            </div>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="signup">
          <div className="signup_heading">
            <div className="inner_text">Sign up for updates</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="enter your email"
              name="emailFromUpdates"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <input className="submitBtn" type="submit" />
          </form>
        </div>
        <div className="offices_section">
          <div className="offices_heading">
            <div className="office_text">Offices</div>
          </div>
          <h1>
            <div className="anim_text_wrapper">
              <div className="office_text">
                26 rue Burdeau 69001 Lyon France
              </div>
            </div>
          </h1>
          <h1>
            <div className="anim_text_wrapper">
              <div className="office_text">
                5100 Parkcenter Avenue Dublin, Ohio 43017 USA
              </div>
            </div>
          </h1>
        </div>
        <div className="footer_links">
          <ul>
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
          </ul>
          <ul>
            <li>
              <div className="link">
                <Link to="/about">About</Link>
              </div>
            </li>
            <li>
              <div className="link">
                <Link className="link" to="/team">
                  Team
                </Link>
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
                <a className="link" href="#">
                  Contact
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer