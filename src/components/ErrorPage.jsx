import React from "react";
import styled from "styled-components";


const ErrorPage = () => {
    return (
        <Wrapper>
            <div className="container-lg">
        <div className="Outer-container">
         
        <h1  >404 error</h1>
        <h1 >Page Not Found</h1>
        </div>
        </div>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`

.Outer-container{
    position: absolute;
    top:40%;
    left:40%;
}

`

export default ErrorPage;