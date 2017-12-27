import React from 'react'
import PropTypes from 'prop-types';
const Header=({message})=>{

    return(

        <h3 className="header">
        {message}
        </h3>
    );
}

Header.propTypes={
    name:PropTypes.string
}

export default Header;