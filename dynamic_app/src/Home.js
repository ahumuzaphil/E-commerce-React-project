import { Link } from "react-router-dom"
export default function Home(){
    return(
    <div className="home_page">
    <div className="home_txt">
    <h2 className="about ">About Us</h2>
    <h1 className="ontrade">In Wholesale And Retail Trading</h1>
    <p className="home-ex">Here we deal in selling high quality shirts and pants in Wholesale and Retail.We do delivery on request at a good and negotiable price.</p>
    <Link to="/check" className="btn">Checkout</Link>
    </div>

    <img src="/home.png" className="home" width="350rem" alt="home" />
    </div>
    )
}