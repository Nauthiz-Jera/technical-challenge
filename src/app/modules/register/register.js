import React, { Component } from 'react';
import { history } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { PADDING, BUTTON_SIZE } from '../../constants/style';
import { registerAccount } from '../../state/actions/app';
import InputField from '../common/input-field';
import Button from '../common/button';
import { withRouter } from 'react-router-dom';

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

const RegisterTitle = styled.h2``;

const RegisterInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: ${PADDING.LARGE};
`;
const mapStateToProps = state => ({
  registered: state.app.registered,
});
const mapDispatchToProps = dispatch => ({
  registerAccount: registryInfo => dispatch(registerAccount(registryInfo)),
});
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      pass: '',
      confirmPass: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitRegistry = this.submitRegistry.bind(this);
  }

  handleChange(id) {
    return event => {
      this.setState({ [id]: event.target.value });
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.registered) {
      this.props.history.push('/login');
    } else {
      console.log('Username already Exists');
    }
  }

  submitRegistry(user, pass, confirmPass) {
    if (user.length <= 0 || pass.length <= 0) {
      alert('User Name and Password length cannot be less than 0');
      return;
    }
    if (pass !== confirmPass) {
      alert('Passwords do not match.');
      return;
    }

    let registryInfo = {
      user,
      pass,
    };
    console.log(registryInfo);
    this.props.registerAccount(registryInfo);
  }

  render() {
    const { user, pass, confirmPass } = this.state;
    return (
      <RegisterContainer>
        <RegisterTitle>
          Register an Account
        </RegisterTitle>
        <RegisterInputContainer>
          <InputField placeholder={'User Name'} value={user} onChange={this.handleChange('user')} />
          <InputField placeholder={'Password'} value={pass} onChange={this.handleChange('pass')} />
          <InputField
            placeholder={'Confirm Password'}
            value={confirmPass}
            onChange={this.handleChange('confirmPass')}
          />
        </RegisterInputContainer>
        <ButtonContainer>
          <Button
            size={BUTTON_SIZE.LARGE}
            text="Register"
            onClick={() => this.submitRegistry(user, pass, confirmPass)}
          />
        </ButtonContainer>
      </RegisterContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
