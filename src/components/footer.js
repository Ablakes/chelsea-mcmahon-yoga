import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../data/theme'

const FooterContainer = styled.div`
  background: ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 27%;
  svg {
    fill: ${props => props.theme.secondaryColor};
    height: 1.7rem;
    opacity: 0.8;
    margin: 25px;
    &:hover {
      transform: scale(1.05);
      fill: #00aced;
    }
  }
  .facebook-icon:hover {
    fill: #517fa4;
  }
  .mail-icon {
    position: relative;
    top: 3px;
  }
  .mail-icon:hover {
    fill: #ff6d6d;
  }
`

const Footer = () => (
  <ThemeProvider theme={theme}>
    <FooterContainer>
      <IconContainer>
        <a
          href="https://www.instagram.com/chelseamcmahononline/"
          target="_blank"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 0c-3.26 0-3.667.015-4.947.072-1.278.06-2.148.261-2.913.558-.789.306-1.459.717-2.126 1.384s-1.079 1.336-1.384 2.126c-.297.765-.499 1.635-.558 2.913-.06 1.28-.072 1.687-.072 4.947s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558 1.28.06 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126-.667-.667-1.335-1.079-2.126-1.384-.765-.297-1.636-.499-2.913-.558-1.28-.06-1.687-.072-4.947-.072zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zm0 10.162c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44s.646-1.439 1.44-1.439c.793-.001 1.44.645 1.44 1.439z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/chelsea.margaret.820?ref=br_rs"
          target="_blank"
        >
          <svg
            className="facebook-icon"
            aria-labelledby="simpleicons-facebook-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="simpleicons-facebook-icon">Facebook icon</title>
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
          </svg>
        </a>
        <a href="mailto:chelseamcmahon820@yahoo.com">
          <svg
            className="mail-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23.5 20.625"
            x="0px"
            y="0px"
          >
            <g data-name="Слой 2">
              <g data-name="Слой 1">
                <path d="M20.75,16.5h-18A2.75,2.75,0,0,1,0,13.75v-11A2.75,2.75,0,0,1,2.75,0h18A2.75,2.75,0,0,1,23.5,2.75v11A2.75,2.75,0,0,1,20.75,16.5Zm-18-15A1.25,1.25,0,0,0,1.5,2.75v11A1.25,1.25,0,0,0,2.75,15h18A1.25,1.25,0,0,0,22,13.75v-11A1.25,1.25,0,0,0,20.75,1.5Z" />
                <path d="M11.75,11.67a2.74,2.74,0,0,1-1.94-.8l-9-9,1-1.1,9.07,9.07a1.25,1.25,0,0,0,1.77,0L21.46,1,22.52,2l-8.83,8.83A2.74,2.74,0,0,1,11.75,11.67Z" />
                <polygon points="1.83 15.41 1.26 14.92 0.73 14.38 7.5 7.62 8.56 8.68 1.83 15.41" />
                <rect
                  x="17.97"
                  y="6.78"
                  width="1.5"
                  height="9.24"
                  transform="translate(-2.58 16.58) rotate(-45)"
                />
              </g>
            </g>
            <text
              x="0"
              y="31.5"
              fill="#000000"
              font-size="5px"
              font-weight="bold"
              font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            >
              Created by Evgenii Likhachov
            </text>
            <text
              x="0"
              y="36.5"
              fill="#000000"
              font-size="5px"
              font-weight="bold"
              font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            >
              from the Noun Project
            </text>
          </svg>
        </a>
      </IconContainer>
    </FooterContainer>
  </ThemeProvider>
)

export default Footer
