import React from "react";
import ResearchDescription from "./ResearchDescription";
import ResearchForm from "./ResearchForm";
import Footer from "../Footer";


const Research = () =>{
    return(
        <>
        <ResearchDescription />
        <div className="row">
        <ResearchForm />
        </div>
        <div className="row">
        <Footer />
        </div>
        
        </>
    )
}

export default Research;