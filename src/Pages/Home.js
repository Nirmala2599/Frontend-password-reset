import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import Header from "../Components/Header";
function Home() {
  const navigate = useNavigate();
 return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="input">
          <form>
           <div>Welcome to my dream world </div>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgctPv7eOjPXBZnGNTsk0pmFXf8pwfVF3lQ&usqp=CAU'></img>
           
         </form>
       </div>
     </div>
    </>
  );
}

export default Home;