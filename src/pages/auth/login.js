import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './login.module.css';

class Login extends Component {
 state = {
  respass: false,
  emailSent: false,
  verificationSuccess: false,
  loading: false
 };
 render() {
  return (
   <form className={classes.form}>
    {!this.state.respass ? (
     <div>
      <h1 className={classes.header}>LOGIN</h1>
      <div className={classes.inputcontainer}>
       <div className={classes.input}>
        <span>Email</span>
        <input placeholder="Aa@domain.com" />
       </div>
       <div className={classes.input}>
        <span>Password</span>
        <input placeholder="Password" type="password" />
       </div>
       <button
        type="submit"
        onClick={e => {
         e.preventDefault();
         this.setState({ loading: true });
        }}
       >
        LOGIN
       </button>
       <span className={classes.signup}>
        New ?{' '}
        <span
         onClick={() => this.props.history.push('/signup')}
        >
         Sign Up
        </span>
       </span>
       <span
        className={classes.fgt}
        onClick={() => this.setState({ respass: true })}
       >
        Forgot password ?
       </span>
      </div>
     </div>
    ) : !this.state.emailSent ? (
     <div>
      <h1 className={classes.header}>
       Forgot your password?
      </h1>
      <p className={classes.emailSent}>
       Enter your email address below and we'll email you
       instructions on how to change your password.
      </p>
      <div className={classes.inputcontainer}>
       <div className={classes.input}>
        <span>Email</span>
        <input placeholder="Enter your email address" />
       </div>
       <button
        type="submit"
        onClick={e => {
         e.preventDefault();
         this.setState({ emailSent: true });
        }}
       >
        CONTINUE
       </button>
      </div>
     </div>
    ) : !this.state.verificationSuccess ? (
     <div>
      <h1 className={classes.header}>Verify Email</h1>
      <p className={classes.emailSent}>
       A four digit verification pin have been sent to your
       email, enter the pin below to continue.
      </p>
      <div className={classes.inputcontainer}>
       <div className={classes.input}>
        <input placeholder="Verification Pin" />
       </div>
       <button
        type="submit"
        onClick={e => {
         e.preventDefault();
         this.setState({ verificationSuccess: true });
        }}
       >
        CONTINUE
       </button>
      </div>
     </div>
    ) : (
     <div>
      <h1 className={classes.header}>Reset Password</h1>

      <div className={classes.inputcontainer}>
       <div className={classes.input}>
        <span>Password</span>
        <input placeholder="Password" type="password" />
       </div>
       <div className={classes.input}>
        <span>Confirm password</span>
        <input placeholder="Password" type="password" />
       </div>
       <button
        type="submit"
        onClick={e => {
         e.preventDefault();
         this.setState({
          respass: false,
          emailSent: false,
          verificationSuccess: false
         });
        }}
       >
        CHANGE PASSWORD
       </button>
      </div>
     </div>
    )}
   </form>
  );
 }
}

export default withRouter(Login);
