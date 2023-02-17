import React from "react";
import { BrowserRouter,  Switch,  Route } from "react-router-dom";

import MobileOverLay from "./components/MobileOverLay";
import Header from "./components/Header";
import Home from "./pages/Home";
import MemberBenefit from "./pages/MemberBenefit";
import FindProgram from "./pages/FindProgram";
import About from "./pages/About";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProgramDetails from "./pages/ProgramDetails";
import ApplyUniversity from "./pages/ApplyUniversity";
import MyApplications from "./pages/MyApplications";
import Profile from "./pages/Profile";
import Programs from "./pages/Programs";
import PaymentOption from "./pages/PaymentOption";
import PaymentWithCreditCard from "./pages/PaymentWithCreditCard";
import PaymentDone from "./pages/PaymentDone";
import Payments from "./pages/Payments";
import Loans from "./pages/Loans";
import ApplyForLoan from "./pages/ApplyForLoan";
import UniversityDetail from "./pages/UniversityDetail";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // @ts-ignore
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={'/'} exact={true}> <Home /></Route>
          <Route path={'/programs'} exact={true}> <Programs /></Route>
          <Route path={'/member-benefit'} exact={true}> <MemberBenefit /></Route>
          <Route path={'/find-program'} exact={true}> <FindProgram /></Route>
          <Route path={'/program-detail/:id'} exact={true}> <ProgramDetails /></Route>
          <Route path={'/university-detail/:id'} exact={true}> <UniversityDetail/></Route>
          <Route path={'/apply-university/:id'} exact={true}> <ApplyUniversity /></Route>
          {/*<Route path={'/my-applications'} exact={true}> <MyApplications /></Route>*/}
          {/*<Route path={'/payment-options/:id'} exact={true}> <PaymentOption /></Route>*/}
          {/*<Route path={'/payment-success'} exact={true}> <PaymentDone /></Route>*/}
          {/*<Route path={'/pay-with-credit-card/:id'} exact={true}> <PaymentWithCreditCard /></Route>*/}
          <PrivateRoute path={'/my-applications'} component={MyApplications} />
          <PrivateRoute path={'/payment-options/:id'} component={PaymentOption} />
          <PrivateRoute path={'/payment-success'} component={PaymentDone} />
          <PrivateRoute path={'/pay-with-credit-card/:id'} component={PaymentWithCreditCard} />
          <PrivateRoute path={'/payments'} component={Payments} />
          <PrivateRoute path={'/loans'} component={Loans} />
          <PrivateRoute path={'/apply-for-loan/:id?'} component={ApplyForLoan} />
          <PrivateRoute path={'/my-profile'} component={Profile} />
          {/*<Route path={'/payments'} exact={true}> <Payments /></Route>*/}
          {/*<Route path={'/loans'} exact={true}> <Loans /></Route>*/}
          {/*<Route path={'/apply-for-loan/:id?'} exact={true}> <ApplyForLoan /></Route>*/}
          {/*<Route path={'/my-profile'} exact={true}> <Profile /></Route>*/}
          <Route path={'/about'} exact={true}> <About /></Route>
          <Route path={'/login'} exact={true}> <Login /></Route>
          <Route path={'/register'} exact={true}> <Register /></Route>
        </Switch>

        <MobileOverLay />
      </BrowserRouter>

    </>
  );
}

export default App;
