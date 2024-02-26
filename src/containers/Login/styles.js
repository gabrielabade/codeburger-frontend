import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 90%;
  width: auto;
  max-width: 100%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 90%;
  width: auto;
  max-width: 100%;
  padding: 90px 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 10vh;
  }

  @media screen and (max-width: 600px) {
    padding: 50px 5%;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 70px 10%;
  }
  @media screen and (min-width: 1025px) {
    padding: 90px 15%;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 5vh;
  margin-bottom: 1vh;
`

export const Input = styled.input`
  width: 20vw;
  height: 5vh;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 1vw;
  border: ${props => (props.error ? ' 2px solid #cc1717' : 'none')};
  padding-left: 2vw;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
