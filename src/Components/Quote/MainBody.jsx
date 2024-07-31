import './MainBody.css'

function MainBody({quote,author}){

    return (<>
       <br /> <br />
        <div className="quoteCard">

        <p className="quoteText">{quote}</p>

        <p className="quoteAuthor">{author}</p>

    </div>
    
    
    </>)
}

export default MainBody