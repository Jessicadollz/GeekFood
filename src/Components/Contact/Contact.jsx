import style from '../Contact/Contact.module.css';
import Card from './Card/Card';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


function Contact() {

  return (
    <>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <h2>Contact US</h2>
          <h1>GET IN TOUCH WITH US</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
          <Card icon={ <IoHomeOutline /> } heading="Our Location" text="99 S.t Jomblo Park Pekanbaru 28292. Indonesia"/> 
          <Card icon={ <MdOutlinePhone /> } heading="Phone Number" text="(+62)81 414 257 9980"/>
          <Card icon={ <MdOutlineEmail /> } heading="Email Address" text="info@yourdomain.com"/>
        </div>

        <div className={style.rightContainer}>
          <form action="">
            <input type="text" placeholder='Your Name' /> <br />
            <input type="email" placeholder='Your Email' /> <br />
            <input type="number" placeholder='Your Phone' /> <br />
            <textarea name="" id="" cols="50" rows="10" placeholder='Your Message'></textarea>
          <br />
          <button>Submit</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Contact