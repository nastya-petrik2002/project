import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  authActionLogin,
  clearAuth,
  clearErrorSignUpAndLogin,
} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';

const LoginPage = ({ authClear, loginUser, ...restProps }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.headerSignUpPage}>
          <a href="/">
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
          </a>
          <div className={styles.linkLoginContainer}>
            <Link to="/registration" style={{ textDecoration: 'none' }}>
              <span>Signup</span>
            </Link>
          </div>
        </div>
        <div className={styles.loginFormContainer}>
          <div className={styles.loginForm}>
            {error && (
              <Error
                data={error.data}
                status={error.status}
                clearError={authClear}
              />
            )}
            <h2>LOGIN TO YOUR ACCOUNT</h2>
          </div>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearErrorSignUpAndLogin()),
    loginUser: (value) => dispatch(authActionLogin(value)),
    authClear: () => dispatch(clearAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
