import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const data = {
    heading: 'Log In',
    option: 'Create Account',
    forgotPassword: true,
  };

  const handleOptionChange = () => {
    switch (data.heading) {
      case 'Log In':
        console.log('aaa');
        break;

      default:
        break;
    }
  };
  return (
    <Container>
      <LoginWrapper>
        <RocketImage src='assets/rocket.svg' alt='' />
        <MainHeading>{data.heading}</MainHeading>
        <InputWrapper>
          <InputTextbox type='email' required='required' />
          <InputLabel>Email</InputLabel>
        </InputWrapper>
        <InputWrapper>
          <InputTextbox
            type={`${showPassword ? 'text' : 'password'}`}
            required='required'
          />
          <PasswordIcon
            src={`assets/${showPassword ? 'eye-open' : 'eye-closed'}.svg`}
            onClick={() => setShowPassword((p) => !p)}
            alt=''
          />
          <InputLabel>Password</InputLabel>
        </InputWrapper>
        <OtherOptions>
          <Option onClick={handleOptionChange}>{data.option}</Option>
          <Option>{data.forgotPassword && 'Forgot Password'}</Option>
        </OtherOptions>
        <StyledButton buttonType='login'>{data.heading}</StyledButton>
        <StyledButton buttonType='google'>
          <LabelWrapper>
            <StyledIcon src='assets/google.svg' alt='' />
            Sign In With Google
          </LabelWrapper>
          <StyledIcon src='assets/arrow.svg' alt='' />
        </StyledButton>
      </LoginWrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  user-select: none;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 25vw;
  border-radius: 30px;
  gap: 15px;
  color: #7053bc;
  padding-bottom: 30px;
`;

const RocketImage = styled.img`
  border-radius: 30px;
  margin-bottom: 30px;
`;

const MainHeading = styled.h1`
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 75%;

  &:last-child input:valid ~ span,
  &:last-child input:focus ~ span {
    background-color: #7053bc;
    color: #fff;
    border-radius: 2px;
  }
`;

const InputTextbox = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  outline: none;
  font-size: 1.2em;
  transition: 0.5s;

  &:valid ~ span,
  &:focus ~ span {
    color: #7053bc;
    transform: translateX(10px) translateY(-7px);
    font-size: 0.7em;
    padding: 0 10px;
    background-color: white;
    border-left: 1px solid #7053bc;
    border-right: 1px solid #7053bc;
    letter-spacing: 0.2em;
  }

  &:valid,
  &:focus {
    border: 1px solid #7053bc;
  }
`;

const InputLabel = styled.span`
  position: absolute;
  left: 0;
  padding: 10px;
  color: #000;
  pointer-events: none;
  font-size: 1.2em;
  text-transform: uppercase;
  transition: 0.5s;
`;

const StyledIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const PasswordIcon = styled(StyledIcon)`
  position: absolute;
  right: 20px;
  top: 10px;
`;

const OtherOptions = styled.div`
  display: flex;
  gap: 50px;
`;

const Option = styled.div`
  cursor: pointer;
  transition: 0.7s;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #7053bc;
    color: white;
  }
  &:active {
    translate: 0 2px;
  }
`;

const StyledButton = styled.button`
  width: 75%;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
  border-radius: 10px;
  outline: none;
  background-color: white;
  font-size: 1.2em;
  transition: 0.1s;

  ${({ buttonType }) => {
    if (buttonType === 'login') {
      return `background-color: #7053bc;
       color:white;
       justify-content:center;
       border: none;`;
    }
  }}
  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
