import { Link } from "gatsby"
import React from "react"
import classes from "./header.module.scss"

const Header = () => (
  <header className={classes.headerContainer}>
    <Link to="/" className={`${classes.headerLinks} ${classes.headerTitle}`}>
      NADIA BUER HAUGEN
    </Link>
    <span style={{ flex: "1" }}></span>
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
  </header>
)

export default Header
