import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { Button } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import classes from "./project.module.scss"
import arrow from "../images/icons/Arrow.png"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark: projectPage } = data

  const [imageNumber, setImageNumber] = useState(0)

  // const [projectNumber] = useState() // DANS LE FUTUR IL FAUT LE RENDRE CONSCIENT DE QUEL PROJET ON PARLE
  const projectNumber = 1

  return (
    <Layout>
      <SEO title="Project" />

      <section>
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

      <section>
        <div className={classes.imageContainer}>
          {data.allImages.nodes.map((image, index) => {
            return (
              <a
                style={{ cursor: "pointer" }}
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
      }
    }

    allImages: allFile(filter: { relativeDirectory: { eq: $imagefolder } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
