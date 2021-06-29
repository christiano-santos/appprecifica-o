import React from 'react';

const GlobalState = {
    products: [],
    productFraction: []
};

const GlobalContext = React.createContext();

export default GlobalContext;