import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { Button } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

import classes from "./project.module.scss"
import arrow from "../images/icons/Arrow.png"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark: projectPage } = data

  const mainImageName = projectPage.frontmatter.mainImageName

  const mainImageID = data.allImages.nodes.findIndex(element => {
    return mainImageName === element.childImageSharp.fluid.originalName
  })

  const [imageNumber, setImageNumber] = useState(
    mainImageID === -1 ? 0 : mainImageID
  )

  // const [projectNumber] = useState() // DANS LE FUTUR IL FAUT LE RENDRE CONSCIENT DE QUEL PROJET ON PARLE
  const projectNumber = projectPage.frontmatter.projectID

  return (
    <Layout>
      <SEO title="Project" />

      <section className={classes.normalView}>
        <div className={classes.goBack}>
          <Link to={`/portfolio?project=${projectNumber}`}>
            <img
              src={arrow}
              alt="arrow"
              style={{ marginBottom: "0", marginRight: ".8rem" }}
            />
            TILBAKE
          </Link>
        </div>
        <BackgroundImage
          style={{
            backgroundSize: "contain",
            backgroundPosition: "right top",
          }}
          fluid={data.allImages.nodes[imageNumber].childImageSharp.fluid} // first image in the folder
        >
          <div style={{ width: "80%", margin: "0 auto" }}>
            <div className={classes.contentHolder}>
              <h2>{projectPage.frontmatter.title} </h2>
              <p>{projectPage.frontmatter.projectinfo}</p>

              <p className={classes.contentDescription}>{projectPage.html}</p>
            </div>
          </div>
        </BackgroundImage>
      </section>

      <section className={classes.mobileView}>
        <div className={classes.goBack}>
          <Link to={`/portfolio?project=${projectNumber}`}>
            <img
              src={arrow}
              alt="arrow"
              style={{ marginBottom: "0", marginRight: ".8rem" }}
            />
            TILBAKE
          </Link>
        </div>
        <Img
          fluid={data.allImages.nodes[imageNumber].childImageSharp.fluid} // first image in the folder
        ></Img>

        <div style={{ width: "80%", margin: "0 auto" }}>
          <div className={classes.contentHolder}>
            <h2>{projectPage.frontmatter.title} </h2>
            <p>{projectPage.frontmatter.projectinfo}</p>

            <p className={classes.contentDescription}>{projectPage.html}</p>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.imageContainer}>
          {data.allImages.nodes.map((image, index) => {
            return (
              <a
                key={index}
                className={classes.imageThumb}
                onClick={() => setImageNumber(index)}
              >
                <Img
                  style={{
                    width: `224px`,
                    height: "155px",
                    border:
                      index === imageNumber
                        ? "5px solid #f39a82"
                        : "1px solid #f39a82",
                  }}
                  fluid={image.childImageSharp.fluid}
                />
              </a>
            )
          })}
        </div>
      </section>

      <div className={classes.buttonHolder}>
        <Link to="/kontakt">
          <Button className={classes.buttonBlack} variant="outlined">
            KONTAKT
          </Button>
        </Link>

        <Link to="/portfolio">
          <Button className={classes.buttonLined} variant="outlined">
            LAST NED PORTFOLIO
          </Button>
        </Link>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectByID($projectID: String!, $imagefolder: String!) {
    markdownRemark(frontmatter: { projectID: { eq: $projectID } }) {
      html
      id
      frontmatter {
        title
        imagefolder
        projectinfo
        projectID
        mainImageName
      }
    }

    allImages: allFile(filter: { relativeDirectory: { eq: $imagefolder } }) {
      nodes {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`
