import React, { useState } from "react"
import { useForm } from "react-hook-form"
import addToMailchimp from "gatsby-plugin-mailchimp"

const RequestDemo = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    addToMailchimp(data.email, data)
      .then(res => {
        setSubmitted(true)
      })
      .catch(e => console.error(e))
  }

  console.log(errors)

  return (
    <div className="container bg_white" id="demo">
      {!submitted ? (
        <div className="request_demo_wrapper">
          <h1>Request Demo</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input_wrapper">
              <input
                type="text"
                placeholder="First Name"
                name="FNAME"
                ref={register({ required: true, maxLength: 80 })}
              ></input>
              {errors.FNAME && (
                <div className="error">First name is required</div>
              )}
            </div>
            <div className="input_wrapper">
              <input
                type="text"
                placeholder="Last Name"
                name="LNAME"
                ref={register({ required: true, maxLength: 100 })}
              ></input>
              {errors.LNAME && (
                <div className="error">Last name is required</div>
              )}
            </div>
            <div className="input_wrapper">
              <input
                type="text"
                placeholder="Email"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.EMAIL && <div className="error">email is required</div>}
            </div>
            <div className="input_wrapper">
              <input
                type="text"
                placeholder="Company"
                name="COMPANY"
                ref={register}
              />
            </div>
            <div className="input_wrapper">
              <input
                type="text"
                placeholder="Country"
                name="COUNTRY"
                ref={register}
              />
            </div>
            <div className="input_wrapper">
              <input
                type="tel"
                placeholder="Mobile"
                name="PHONE"
                ref={register({ pattern: /^([+]\d{2})?\d{10}$/ })}
              />
              {errors.PHONE && (
                <div className="error">enter valid phonenumber</div>
              )}
            </div>

            <div className="submit_btn_wrapper">
              <input className="submitBtn" type="submit" />
            </div>
          </form>
        </div>
      ) : (
        <div className="form_submitted">
          <h1>Thank you for your submission!!</h1>
        </div>
      )}
    </div>
  )
}

export default RequestDemo
