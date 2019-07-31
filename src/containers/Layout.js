import React from "react";
import { QAContextProvider } from "../context/QAcontext";
import QuestionList from "../components/QuestionList";

const Layout = () => (
  <QAContextProvider>
    <div style={{textAlign:"center", marginTop:"16px"}}> 
      <h1>Care QA!</h1>
      <QuestionList />
    </div>
  </QAContextProvider>
);

export default Layout;
