import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BUTTON_SIZE, MARGIN, PADDING } from '../../constants/style';
import { loginAccount } from '../../state/actions/app';
import InputField from '../../modules/common/input-field';
import Button from '../common/button';

const LoginContainer = styled.div`
display: flex;
flex-flow: column;
align-items: center;
`;
const LoginTitle = styled.h2``;
const LoginInputContainer = styled.div`
display: flex;
flex-flow: column;
padding: ${PADDING.HALF};
margin: ${MARGIN.NORMAL};
`;
const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: ${PADDING.HALF};
margin: ${MARGIN.NORMAL};
`;

const mapToStateProps = state => ({
  loggedIn: state.app.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginAccount: loginInfo => dispatch(loginAccount(loginInfo)),
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      pass: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange(id) {
    return event => {
      this.setState({ [id]: event.target.value });
    };
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.isLoggedIn) {
      this.props.history.push('/profile');
    }
  }

  submitLogin(user, pass) {
    let userInfo = {
      user,
      pass,
    };
    this.props.loginAccount(userInfo);
  }

  render() {
    const { user, pass } = this.state;
    return (
      <LoginContainer>
        <LoginTitle>
          Login
        </LoginTitle>
        <LoginInputContainer>
          <InputField placeholder={'User Name'} value={user} onChange={this.handleChange('user')} />
          <InputField placeholder={'Password'} value={pass} onChange={this.handleChange('pass')} />
        </LoginInputContainer>
        <ButtonContainer>
          <Button
            size={BUTTON_SIZE.MEDIUM}
            text={'Login'}
            onClick={() => this.submitLogin(user, pass)}
          />
        </ButtonContainer>
      </LoginContainer>
    );
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(withRouter(Login));
