import React from "react"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"
import * as queryString from "query-string"

import Layout from "../components/layout"
import SEO from "../components/seo"

import classes from "./portfolio.module.scss"

import Slider from "../components/slider/slider"

const Portfolio = ({ location }) => {
  const parameter = queryString.parse(location.search)

  return (
    <Layout>
      <SEO title="Project" />

      <section>
        <div style={{ margin: "5rem 0" }}>
          <Slider
            initial={Object.values(parameter) ? Object.values(parameter) : 0}
          />
          {/* // prend le search dans le query et le done */}
        </div>
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
      </section>
      <Link to="/">Go back to the homepage clicking this link</Link>
    </Layout>
  )
}

export default Portfolio
