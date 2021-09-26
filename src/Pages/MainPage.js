import React, { useContext } from "react";
import Details from '../Components/Details/Details'
import Title from '../Components/Title/Title'
import Grid from "../Components/Grid/Grid";
import ImageOptions from "../Components/ImageOptions/ImageOptions";
import DisplayContent from "../Components/DisplaySavedContent/DisplayContent";
import CheckUserContent from "../Components/SwitchPage/CheckUserContent";
import LogInButton from "../Components/LoginandSignIn/Buttons/loginButton";
import SignInButton from "../Components/LoginandSignIn/Buttons/signInButton";
import LogOut from "../Components/LoginandSignIn/Buttons/logout";
import {AuthContext} from '../Context/AuthContext'
import { auth } from "../Firebase/firebase";
import bgImg from '../img/landscape.jpg'


function MainPage() {

  const authCtx = useContext(AuthContext)

  return (
    <React.Fragment>
      <img className="bgImg" src={bgImg} alt="background img loading shortly"/>
      <Title />
      <div className="titleBtnContainer">
       
        <CheckUserContent />
        
        {!authCtx.currentUser && <LogInButton />}
        {!authCtx.currentUser && <SignInButton />}
        {auth.currentUser && <LogOut />}
      </div>
      <div className="mainContainer">

        <div className="row">
          <Details />
          <Grid />
        </div>
        
        <ImageOptions />
        <DisplayContent />
      </div>
    </React.Fragment>
  );
}

export default MainPage;
