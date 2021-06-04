import React from 'react';
import './App.css';
import Homepage from './Pages/HomePage/HomePage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './Pages/Shop/Shop.component';
import Header from './Component/header/header.component';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      currentUser : null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

      }
      this.setState({currentUser : userAuth});
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>

      </div>

    );
  }
}

export default App;
