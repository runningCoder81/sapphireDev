import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaRegGem } from 'react-icons/fa'

const Header = ({ siteTitle, menu }) => (
  <div
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <FaRegGem />
        </Link>
      </h1>

      <nav>
        {menu.map(item => (
          <Link key={item.object_id} to={`/${item.object_slug}`}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
