import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import classes from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "icons/Facebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.leftPart}>
          <span className={classes.name}>NADIA BUER HAUGEN</span>
          <p className={classes.description}>
            Arkitekt innen stedstilpasning og stedsidentitet, og ekspert i
            fargebruk, basert i Oslo.
          </p>
          <p>nadiabuer@gmail.com</p>
          <p> +47 12 34 56 78</p>
        </div>
        <div className={classes.rightPart}>
          <div className={classes.logoContainer}>
            <Img
              style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
              fluid={data.facebook.childImageSharp.fluid}
            />
            <Img
              style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
              fluid={data.facebook.childImageSharp.fluid}
            />
            <Img
              style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
              fluid={data.facebook.childImageSharp.fluid}
            />
          </div>
          <div className={classes.menuContainer}>
            <Link
              to="/about"
              className={classes.headerLinks}
              activeClassName={classes.active}
            >
              OM MEG
            </Link>
            <Link
              to="/portfolio"
              className={classes.headerLinks}
              activeClassName={classes.active}
            >
              PORTFOLIO
            </Link>
            <Link
              to="/kontakt"
              className={classes.headerLinks}
              activeClassName={classes.active}
            >
              KONTAKT
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.copyright}> © 2020 Nadia Buer Haugen </div>
    </footer>
  )
}

export default Footer
