import style from './Card.module.css';
import user from '../../assets/user.avif';

function Card() {
    return (
        <>
            <div className={style.card}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, rem.</p>
                
                <div className={style.author}>
                    <img src={user} alt="Author" />
                    <div className={style.authorDes}>
                        <h3>Gladis Lennon</h3>
                        <p>Head of SEO</p>
                    </div>
                </div>
                </div>
        </>
    );
}

export default Card;