import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { googleProvider, githubProvider } from '../firebase';

const auth = getAuth();

const Login = ({ setUser }) => {
  const [message, setMessage] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        console.error(errorCode, errorMessage);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        console.error(errorCode, errorMessage);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    heading: 'Log In',
    option: 'Create Account',
    buttonAction: handleLogin,
    forgotPassword: true,
  });

  const handleOptionChange = () => {
    switch (data.heading) {
      case 'Log In':
        setData({
          heading: 'Create Account',
          option: 'Log In',
          buttonAction: handleCreateAccount,
          forgotPassword: false,
        });
        break;
      case 'Create Account':
        setData({
          heading: 'Log In',
          option: 'Create Account',
          buttonAction: handleLogin,
          forgotPassword: true,
        });
        break;
      default:
        break;
    }
  };

  const handleGoogleClick = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        setMessage(errorMessage);
        console.error(errorCode, errorMessage, email);
      });
  };

  const handleGitHubClick = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        setMessage(errorMessage);
        console.error(errorCode, errorMessage, email);
      });
  };

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        setMessage('Please check your mail.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <Container>
      <LoginWrapper>
        <RocketImage src='assets/rocket.svg' alt='' />
        <MainHeading>{data.heading}</MainHeading>
        <InputWrapper>
          <InputTextbox type='email' required='required' ref={emailRef} />
          <InputLabel>Email</InputLabel>
        </InputWrapper>
        <InputWrapper>
          <InputTextbox
            type={`${showPassword ? 'text' : 'password'}`}
            required='required'
            ref={passwordRef}
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
          {data.forgotPassword && (
            <Option onClick={handlePasswordReset}>Forgot Password</Option>
          )}
        </OtherOptions>
        {!!message && <Message>{message}</Message>}
        <StyledButton buttonType='login' onClick={data.buttonAction}>
          {data.heading}
        </StyledButton>
        <StyledButton buttonType='google' onClick={handleGoogleClick}>
          <LabelWrapper>
            <StyledIcon src='assets/google.svg' alt='' />
            Sign In With Google
          </LabelWrapper>
          <StyledIcon src='assets/arrow.svg' alt='' />
        </StyledButton>
        <StyledButton buttonType='github' onClick={handleGitHubClick}>
          <LabelWrapper>
            <StyledIcon src='assets/github.svg' alt='' />
            Sign In With GitHub
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
  width: 100vw;
  border-radius: 30px;
  gap: 15px;
  color: #7053bc;
  padding-bottom: 30px;
  @media screen and (min-width: 650px) {
    width: 60vw;
  }
  @media screen and (min-width: 1000px) {
    width: 40vw;
  }
  @media screen and (min-width: 1400px) {
    width: 25vw;
  }
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

const Message = styled.div``;

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
