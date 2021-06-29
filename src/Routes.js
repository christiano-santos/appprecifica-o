import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

import ResultFinal from './ResultFinalComponent/ResultFinal';
import Product from './ProductComponent/Product';
import ProductFraction from './ProductFractionComponent/ProductFraction';
import Home from './HomeComponent/Home';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/product-fraction" component={ProductFraction} />
                <Route exact path="/result-final" component={ResultFinal} />
            </Switch>
        </Router>
    );
}

export default Routes;