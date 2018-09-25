import React from 'react'
import { Link } from 'gatsby'
import KenticoLogo from '../images/kentico_rgb_small.png';
import { StaticQuery, graphql } from 'gatsby'


const Header = () =>
  <StaticQuery
    query={graphql`
      query HeaderBackgroundQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <div style={{
          position: 'relative',
          top: '0',
          left: '20px'
        }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}>
            <img
              src={KenticoLogo}
              alt="Kentico logo"
              style={{
                width: '143px',
                height: '66px'
              }} />
          </Link>
        </div>
      </div>
    )}
  />


export default Header
