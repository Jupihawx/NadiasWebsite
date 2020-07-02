import { Link } from "gatsby"
import React from "react"
import Headroom from "react-headroom"
import classes from "./header.module.scss"
import { stack as Menu } from "react-burger-menu"

const Header = () => {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#f39a82",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
      color: "white",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#f39a82",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "-0.8em",
    },
    bmItem: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "-2rem",
      color: "white",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  }
  return (
    <React.Fragment>
      <Headroom>
        <header className={classes.headerContainer}>
          <Link
            to="/"
            className={`${classes.headerLinks} ${classes.headerTitle}`}
          >
            NADIA BUER HAUGEN
          </Link>
          <span style={{ flex: "1" }}></span>
          <Link
            to="/portfolio"
            className={classes.headerLinks}
            activeClassName={classes.active}
          >
            PORTFOLIO
          </Link>

          <a href="/#about" className={classes.headerLinks}>
            OM MEG
          </a>
          <a href="/#kontakt" className={classes.headerLinks}>
            KONTAKT
          </a>
        </header>
      </Headroom>

      <header className={classes.headerContainerBurger} id="outer-container">
        <span className={classes.nadiaName}>NADIA BUER HAUGEN</span>
        <Menu
          styles={styles}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <main id="page-wrap">
            <Link
              to="/"
              className={`${classes.headerLinks} ${classes.headerTitle}`}
            >
              NADIA BUER HAUGEN
            </Link>
            <span style={{ flex: "1" }}></span>
            <Link
              to="/portfolio"
              className={classes.headerLinks}
              activeClassName={classes.active}
            >
              PORTFOLIO
            </Link>

            <a href="/#about" className={classes.headerLinks}>
              OM MEG
            </a>
            <a href="/#kontakt" className={classes.headerLinks}>
              KONTAKT
            </a>
          </main>
        </Menu>
      </header>
    </React.Fragment>
  )
}

export default Header
