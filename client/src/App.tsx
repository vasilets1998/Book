import jwt from "jsonwebtoken";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BookPage } from "../src/page";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { role } from "../src/redux/actions";
import AdminBook from "../src/components/admin/admin-book/admin-book";
import CreateBook from "../src/components/admin/admin-book/create-book";
import Author from "../src/components/admin/authors/admin-author";
import CreateAuthor from "../src/components/admin/authors/create-author";
import AdminOrder from "../src/components/admin/orders/admin-orders";
import User from "../src/components/admin/users/admin-users";
// import Book from "../src/components/book/book";
import Header from "../src/components/header/header";
import Order from "../src/components/order/order";
import Shoping from "../src/components/printing-shoping/shoping";
import "./style.css";

class App extends Component {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     dispatch: this.props.dispatch,
  //   };
  // }

  // componentDidMount() {
  //   if (localStorage.getItem("authToken") !== null) {
  //     let storageAuth: string | null = localStorage.getItem("authToken");
  //     let storageRef: string | null = localStorage.getItem("refToken");
  //     let token: any;

  //     try {
  //       token = jwt.verify(storageAuth, "secretKey");
  //     } catch (error) {
  //       fetch("http://localhost:8800/api/auth/profile", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": storageAuth,
  //           "ref-token": storageRef,
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then(
  //           (data: any) => {
  //             localStorage.setItem("authToken", data.authToken);
  //             localStorage.setItem("refToken", data.refToken);
  //             token = jwt.verify(data.authToken, "secretKey");

  //             if (token.role === true || token.role === "true") {
  //               this.state.dispatch(role("admin"));
  //             }

  //             if (token.role === false || token.role === "false") {
  //               this.state.dispatch(role("user"));
  //             }
  //           },
  //           (err) => {
  //             console.log(err);
  //           }
  //         );
  //     }
  //   }
  // }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/book" component={BookPage} />
            {window.location.pathname === "/" && <Redirect to="/book" />};
            {/* <PrivateRoute path="/adminBook" component={AdminBook} />
            <PrivateRoute path="/adminAuthor" component={Author} />
            <PrivateRoute path="/adminUser" component={User} />
            <Route path="/adminOrder" component={AdminOrder} />
            <PrivateRoute path="/order" component={Order} />
            <Route path="/shoping">
              <Shoping />
            </Route>
            <PrivateRoute path="/adminCreateAuthor" component={CreateAuthor} />
            <PrivateRoute path="/adminCreateBook" component={CreateBook} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

// function PrivateRoute({ component: AdminBook, ...rest }: any) {
//   let storageAuth: any = localStorage.getItem("authToken");
//   let token: any = jwt.verify(storageAuth, "secretKey");

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         token.role === true || token.role === "true" ? (
//           <AdminBook />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/book",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// const mapStateToProps = (state: any) => ({
//   count: state.count,
//   role: state.role,
//   shopping: state.shoping,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   dispatch,
// });

export default App;
// connect(mapStateToProps, mapDispatchToProps)(App);
