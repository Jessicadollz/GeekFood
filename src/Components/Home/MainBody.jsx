import style from './MainBody.module.css';
import Button from './Button';
import Image from '../../assets/body2.avif';
import Card from './Card'

function MainBody() {
    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.mainText}>
                    <h1>Let Us Find Your <br />
                    <span>Forever Food.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        <br />Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                        <Button title="Search Now" bgColor="red" color="white"/>
                        <Button title="Know More" bgColor="white" color="red"/>
                </div>
            </div>

            <div className={style.mainDes}>
                <div className={style.left}>
                    <img src={Image} alt="" />
                </div>
                <div className={style.right}>
                    <br /><br /><br /><br />
                    <h2>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br />Tempore, debitis.</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Aliquid, molestiae! Quidem est esse numquam odio deleniti, <br />
                        beatae, magni dolores provident quaerat totam eos, aperiam <br />
                        architecto eius quis quibusdam fugiat dicta.</p>
                    <br />
                    <Button title="Get In Touch" bgColor="indigo" color="white" />
                    <br /><br /><br /><br /><br />
                </div>
            </div>
            <div className={style.grid}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />        
                <Card />
            </div>
        </>
    );
}

export default MainBody;