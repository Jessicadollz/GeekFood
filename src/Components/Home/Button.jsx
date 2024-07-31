import style from './Button.module.css';

function Button(props) {
    let stylebtn = {
        backgroundColor:props.bgColor,
        color:props.color,
    }
    console.log(stylebtn);

    return(
        <>
            <button className={style.btn} style={stylebtn}>{props.title || 'click ME'}</button>
        </>
    );
}

export default Button;