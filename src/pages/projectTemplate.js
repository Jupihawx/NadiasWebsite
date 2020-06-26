import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { Button } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import classes from "./project.module.scss"
import arrow from "../images/icons/Arrow.png"
const Portfolio = ({ data }) => {
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
              <h2>PROJECT TITLE </h2>
              <p>PROJECT INFO</p>

              <p className={classes.contentDescription}>
                Samarbeid med Borghild Alvestad. Sjette semester ved NTNU var
                oppgaven å tegne et nytt bygg for arkitektur- og designstudiene
                som en del av den pågående campusutviklingen. Den tildelte
                tomten befinner seg på Gløshaugen midt mellom andre
                undervisnings- og forskningsbygg, og det måtte tas stilling til
                et eksisterende bygg på tomta. Vi valgte å ta vare på det
                eksisternde P15, og bygge et tilbygg med en tydelig ny
                identitet. Utfordringene lå i å få plass til begge
                studieretninger, samtidig som bygget skulle huse offentlige
                funksjoner som kantine, utstillingsareal og møteplasser. Vi
                valgte å jobbe med et sirkulært plan, både for å utfordre oss
                selv, men også for å skape inspirerende omgivelser for arkitekt-
                og designstudentene.{" "}
              </p>
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

export default Portfolio

export const query = graphql`
  query {
    allImages: allFile(filter: { relativeDirectory: { eq: "projects/1" } }) {
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
