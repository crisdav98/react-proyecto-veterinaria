import React from "react";
import PropTypes from 'prop-types';

const Header = ({titulo}) => (
  <header>
    <h1 className="text-center">{titulo}</h1>
  </header>
);

// PropTypes es una forma de documentar nuestra aplicacion indicando que tipo de valor se pasa y si es necesario o no
Header.propTypes = {
  titulo : PropTypes.string.isRequired
}
export default Header;
