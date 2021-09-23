import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const MenuWrapper = styled.div`
    .menu {
        z-index: 1;
    }
    .menu-item {
        cursor: pointer;
        transform: translateX(0);
        transition: 0.2s ease-in;
        &:hover{
            transform: translateX(var(--spacing-1));
        }
    }
    @media screen and (max-width: 960px) {
        .menu {
          display: none;
        }
      }
`

function MenuBar({ menuItems, className }) {
  const goToSection = ((id) => {
    document.getElementById(id)?.scrollIntoView();
  });

  return (
    <MenuWrapper className={`${className} menu`}>
      {menuItems.map((menuItem) => (
        <div className="menu-item mini" key={menuItem.id} onClick={() => { goToSection(menuItem.id) }}>{menuItem.label}</div>
      ))
      }
    </MenuWrapper>
  );
}

MenuBar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  className: PropTypes.string
}

MenuBar.defaultProps = {
  className: null
}

export default MenuBar;