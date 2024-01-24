import React from "react";
import styled from "styled-components";
import Landing from "./Screens/Landing";

const App = () => {
  return (
    <Container>
      <Landing/>
    </Container>
  )
}

export default App

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #22272e;

  .page1{
    height: calc(100vh - 60px);
    min-height: 500px;
    width: 100vw;
    position: relative;

    .bg{
      height: calc(100vh - 60px);
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 1;

      img{
        height: calc(100vh - 60px);
        min-height: 500px;
        width: 100vw;
        filter: brightness(0.25);
      }
    }

    .middle-main{
      height: calc(100vh - 60px);
      min-height: 500px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 2;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 100px;

      h1{
        font-size: 80px;
        font-weight: 500;
        text-align: center;
        line-height: 100px;
        margin: 30px 0;
        font-family: 'Rubik Scribble', sans-serif;
      }

      h3{
        font-size: 30px;
        font-weight: 400;
        text-align: center;
      }

      p{
        font-size: 20px;
      }

      .reg-btn{
        padding: 20px 50px;
        font-size: 20px;
        background-color: #ffffff;
        margin-top: 50px;
        border-radius: 100px;
        color: cornflowerblue;
        font-weight: 500;
        text-decoration: none;
      }
    }
  }

  .page2{
    min-height: 500px;
    /* background-color: pink; */
  }
`

const Navbar = styled.div`
  height: 60px;
  width: 100vw;
  background-color: orange;

  overflow: hidden;

  display: flex;
  align-items: center;
`