import React from "react"
import { Link, graphql } from "gatsby"
import { Button } from "@material-ui/core"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo"

import classes from "./index.module.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className={classes.intro}>
      <BackgroundImage
        className={classes.bgimage}
        fluid={data.backgroundstairs.childImageSharp.fluid}
      >
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
            <Button className={classes.buttonPink} variant="outlined">
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
      </BackgroundImage>
    </section>

    <section className={classes.introMobile}>
      <div className={classes.contentWrapper}>
        <div
          style={{
            maxWidth: `500px`,
            margin: "1.45rem auto",
          }}
        >
          <Img fluid={data.backgroundstairs.childImageSharp.fluid} />
        </div>

        <div className={classes.textWrapper}>
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
            href="#kontakt"
            className={classes.buttonPink}
            variant="outlined"
            style={{ marginBottom: "2rem" }}
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

    <section className={classes.cvsection} id="about">
      <div className={classes.cvcontainer}>
        <div className={classes.leftPart}>
          <div
            style={{
              width: `200px`,
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
              href="/portfolio"
              className={classes.buttonBlack}
              variant="outlined"
            >
              PROSJEKTER
            </Button>
            <Button className={classes.buttonLined} variant="outlined">
              LAST NED CV
            </Button>
          </div>
        </div>
        <div className={classes.rightPart}>
          <h3>SPISSKOMPETANSE</h3>
          <ul>
            <li>Fargesetting</li>
            <li>Stedsutvikling</li>
            <li>Illustrasjon</li>
            <li>Teamarbeid</li>
          </ul>
          <h3>FERDIGHETER</h3>
          <div className={classes.scoreHolder}>
            <ul>
              <li>AutoCAD</li>
              <li>ArchiCAD</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Indesign</li>
              <li>Adobe Illustrator</li>
            </ul>
            <div className={classes.dotHolder}>
              <div className={classes.dotContainer}>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleEmpty}></div>
              </div>
              <div className={classes.dotContainer}>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleEmpty}></div>
              </div>
              <div className={classes.dotContainer}>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleEmpty}></div>
              </div>
              <div className={classes.dotContainer}>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleEmpty}></div>
                <div className={classes.circleEmpty}></div>
              </div>
              <div className={classes.dotContainer}>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleFull}></div>
                <div className={classes.circleEmpty}></div>
                <div className={classes.circleEmpty}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={classes.contactSection} id="kontakt">
      <div className={classes.contactContainer}>
        <h1>Har du et prosjekt i tankene?</h1>
        <h4>Ikke nøl med å kontakte meg for en uforpliktende samtale.</h4>

        <div className={classes.contactInfoContainer}>
          <div className={classes.contactInfo}>
            <div
              style={{
                width: `50px`,
                height: "50px",
                marginBottom: `1.45rem`,
                filter:
                  "invert(68%) sepia(13%) saturate(1368%) hue-rotate(325deg) brightness(99%) contrast(93%)",
              }}
            >
              <Img fluid={data.phoneicon.childImageSharp.fluid} />
            </div>
            <h3>Ring meg</h3>
            <p>+47 95 93 95 19</p>
          </div>
          <div className={classes.contactInfo}>
            <div
              style={{
                width: `50px`,
                height: `50px`,
                marginBottom: `1.45rem`,
                filter:
                  "invert(63%) sepia(84%) saturate(315%) hue-rotate(321deg) brightness(96%) contrast(97%)",
              }}
            >
              <Img fluid={data.mailicon.childImageSharp.fluid} />
            </div>
            <h3>Send en email</h3>
            <p>nadiabuer@gmail.com </p>
          </div>
        </div>
      </div>
    </section>

    <section className={classes.nicePark}>
      <Img fluid={data.village.childImageSharp.fluid} />
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

    phoneicon: file(relativePath: { eq: "icons/Phone.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mailicon: file(relativePath: { eq: "icons/Mail.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    backgroundstairs: file(relativePath: { eq: "BackgroundMain.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    village: file(relativePath: { eq: "projects/1/2.0.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
