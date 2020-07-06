import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import classes from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { relativeDirectory: { eq: "icons/footericon" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <footer style={{ backgroundColor: "#F39A82" }}>
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
            {data.images.nodes.map((image, index) => {
              let goodLink = ""
              switch (index) {
                case 0:
                  goodLink = "https://www.facebook.com/"
                  break

                case 1:
                  goodLink = "https://www.instagram.com"
                  break

                case 2:
                  goodLink = "https://www.linkedin.com"
                  break

                default:
                  break
              }

              return (
                <a key={index} href={goodLink}>
                  <Img
                    style={{
                      width: `40px`,
                      height: "40px",
                      marginBottom: `1.45rem`,
                    }}
                    fluid={image.childImageSharp.fluid}
                  />
                </a>
              )
            })}
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
