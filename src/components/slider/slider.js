import React from "react"
// import { Link } from "gatsby"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./slider.scss"

// import slide1 from "../../images/Village.png"

export default props => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    initial: props.initial,
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 3000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="textPosition">
              <AniLink
                swipe
                direction="right"
                top="enter"
                entryOffset={100}
                to="/project-0"
              >
                KOMPLEKSE BYGG
              </AniLink>
            </div>
          </div>

          <div className="keen-slider__slide number-slide2">
            <div className="textPosition">
              <AniLink
                swipe
                direction="right"
                style={{ color: "white" }}
                top="enter"
                entryOffset={100}
                to="/project-1"
              >
                MAKING IS THINKING
              </AniLink>
            </div>
          </div>

          <div className="keen-slider__slide number-slide3">
            <div className="textPosition">
              <AniLink
                swipe
                direction="right"
                top="enter"
                entryOffset={100}
                to="/project-2"
                style={{ color: "#f39a82" }}
              >
                VERTICAL TRANSPARENCY
              </AniLink>
            </div>
          </div>

          <div className="keen-slider__slide number-slide4">
            <div className="textPosition">
              <AniLink
                swipe
                direction="right"
                top="enter"
                entryOffset={100}
                style={{ color: "white" }}
                to="/project-3"
              >
                LYS OG FARGE
              </AniLink>
            </div>
          </div>

          <div className="keen-slider__slide number-slide5">
            <div className="textPosition">
              <AniLink
                swipe
                direction="right"
                top="enter"
                entryOffset={100}
                to="/project-4"
              >
                TRANSFORMASJON
              </AniLink>
            </div>
          </div>

          <div className="keen-slider__slide number-slide6">
            <div className="textPosition">
              <AniLink
                swipe
                direction="right"
                top="enter"
                entryOffset={100}
                to="/project-5"
                style={{ color: "white" }}
              >
                WORKSHOP-LEDELSE
              </AniLink>
            </div>
          </div>
        </div>

        {slider && (
          <>
            <ArrowLeft
              onClick={e => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />

            <ArrowRight
              onClick={e => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}
