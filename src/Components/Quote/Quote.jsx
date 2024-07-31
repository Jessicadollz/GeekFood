import React from "react";
import MainBody from './MainBody.jsx'
import quoteArr from './Quote.json'
import Footer from './Footer.jsx'

function Quote() {
    return(
        <>
            {/* <MainBody /> */}
            {quoteArr.map((quote,index)=>{
                return <MainBody key={index} quote={quote.quote} author={quote.author}/>
            })}
            <Footer />
        </>
    );
}

export default Quote;