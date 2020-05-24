import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const TeamGrid = () => {
  const data = useStaticQuery(graphql`
    query TeamImages {
      MemberOne: file(relativePath: { eq: "team_member_one.jpg" }) {
        id
        childImageSharp {
          fixed(width: 300, height: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <div className="team_grid">
        <div className="member_card">
          <Img
            className="image"
            fixed={data.MemberOne.childImageSharp.fixed}
          ></Img>
          <h1>
            John Doe <span>CEO</span>
          </h1>
        </div>
        <div className="member_card">
          <Img
            className="image"
            fixed={data.MemberOne.childImageSharp.fixed}
          ></Img>
          <h1>
            John Doe <span>CEO</span>
          </h1>
        </div>
        <div className="member_card">
          <Img
            className="image"
            fixed={data.MemberOne.childImageSharp.fixed}
          ></Img>
          <h1>
            John Doe <span>CEO</span>
          </h1>
        </div>
        <div className="member_card">
          <Img
            className="image"
            fixed={data.MemberOne.childImageSharp.fixed}
          ></Img>
          <h1>
            John Doe <span>CEO</span>
          </h1>
        </div>
        <div className="member_card">
          <Img
            className="image"
            fixed={data.MemberOne.childImageSharp.fixed}
          ></Img>
          <h1>
            John Doe <span>CEO</span>
          </h1>
        </div>
        <div className="member_card">
          <Img
            className="image"
            fixed={data.MemberOne.childImageSharp.fixed}
          ></Img>
          <h1>
            John Doe <span>CEO</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default TeamGrid
