import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Navbar, NavbarBrand } from 'reactstrap';
import ProductList from './ProductList';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './Home';
import Contact from './ContactUs';
import Watches from './Watches';
import Perfumes from './Perfumes';
import Points from './Points';
import Wishlist from './Watches';

const mapStateToProps = state => {
  return {
    products: state.products,
    users: state.users, 
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

render() {

  const HomePage = () => {
    return(
        <Home 
            product={this.props.products.filter((product) =>product.featured)[0]}
            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
    );
  }

  
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/ProductList' component={() => <ProductList products={this.props.products} />} />
          <Route exact path='/contactUs' component={Contact}  />
          <Route exact path='/Watches' component={Watches}  />
          <Route exact path='/Perfumes' component={Perfumes}  />
          <Route exact path='/Wishlist' component={Wishlist}  />
          <Route exact path='/Points' component={Points}  />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
 
export default withRouter(connect(mapStateToProps)(MainComponent));
