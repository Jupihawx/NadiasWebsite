import React from "react"
import { Link, graphql } from "gatsby"
import { Button } from "@material-ui/core"
import Layout from "../components/layout"
import Img from "gatsby-image"

import SEO from "../components/seo"

import classes from "./index.module.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className={classes.backgroundWrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.textWrapper}>
          <h2>Nadia Buer Haugen</h2>
          <h1>
            Arkitekt innen stedstilpasning og stedsidentitet. Ekspert i
            fargebruk. Basert i Oslo.
          </h1>
          <p>
            Jeg ønsker å bruke min spissede kunnskap til å skape bedre
            stedstilpassede og historisk forankrede bygg og byer. Min store
            lidenskap er farger i arkitekturen, et felt jeg mener er svært
            viktig men dessverre underprioritert i vår utdannelse og virke.
          </p>
          <Button
            style={{ color: "#F39A82", borderColor: "#F39A82" }}
            variant="outlined"
          >
            KONTAKT
          </Button>
          {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Img fluid={data.image1.childImageSharp.fluid} />
            <Img fluid={data.image2.childImageSharp.fluid} />
          </div> */}
          {/* <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        </div>
      </div>
    </section>

    <section className={classes.cvsection}>
      <div className={classes.cvcontainer}>
        <div className={classes.leftPart}>
          <div
            style={{
              maxWidth: `200px`,
              marginBottom: `1.45rem`,
            }}
          >
            <Img fluid={data.nadiapicture.childImageSharp.fluid} />
          </div>
          <div className={classes.cvcontent}></div>
          <h1>LYS, FARGE OG IDENTITET </h1>
          <p>
            I andre klasse på arkitektstudiet ved NTNU fant jeg min lidenskap -
            farger i arkitekturen. For å utvide min forståelse for farger har
            jeg i 2018 jobbet et semester som paktikant for Dagny Fargestudio (i
            dag Koi Fargestudio).
          </p>
          <div className={classes.buttonContainer}>
            <Button
              style={{
                color: "white",
                borderColor: "#332F2E",
                backgroundColor: "#332F2E",
              }}
              variant="outlined"
            >
              KONTAKT
            </Button>
            <Button
              style={{
                color: "#332F2E",
                borderColor: "#332F2E",
                backgroundColor: "transparent",
              }}
              variant="outlined"
            >
              KONTAKT
            </Button>
          </div>
        </div>
        <div className={classes.rightPart}></div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    nadiapicture: file(relativePath: { eq: "NadiaMain.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image2: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
