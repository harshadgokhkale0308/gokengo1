import React, { useState } from "react"
import { useForm } from "react-hook-form"
import addToMailchimp from "gatsby-plugin-mailchimp"

const DemoBanner = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit } = useForm()
  const onSubmitAbout = data => {
    const email = data.emailFromBanner
    addToMailchimp(email)
      .then(data => setSubmitted(true))
      .catch(e => console.log(e))
  }

  return (
    <div className="container">
      <div className="demo_banner_wrapper">
        <div className="demo_banner">
          <h1>Request a Demo</h1>
          {!submitted ? (
            <form onSubmit={handleSubmit(onSubmitAbout)}>
              <input
                type="text"
                placeholder="enter your email"
                name="emailFromBanner"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <input className="submitBtn" type="submit" />
            </form>
          ) : (
            <div>
              <h1>Thank you for your submission</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DemoBanner
