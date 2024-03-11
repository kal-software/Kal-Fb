import Navbar from "./Navbar";
import { CiShop } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaHouseChimneyCrack } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function MarketPlace(){
    return(
<div>

<div className="Market-c">
    <div>
    <div className="market-left-all">
        <div className="markrt-place-inner">

        <div className="market-div">
            <p className="market-p">Marketplace</p>
            <CiShop className="market-icon"/>
        </div>
        <input type="text" placeholder="Search Marketplace" className="Search-Marketplace"/>
      <a href="#"><BsSearch  className="market-search"/></a> 
      <a href="#" className="browse">
        <CiShop className="brows-icon"/>
        <p className="brows-all-p">Browse all</p>
        </a>
        <div className="noti-div">
<a href="#" className="noti-a">
<IoNotifications className="market-notification"/>
</a>
<a href="#" className="noti-a">
<p className="market-p1">Notifications</p>
</a>

        </div>
        <div className="noti-div">
<a href="#" className="noti-a">
<IoNotifications className="inbox-notification"/>
</a>
<a href="#" className="noti-a">
<p className="inbox-p1">Inbox</p>
</a>

        </div>
        <div className="buy-div">
<a href="#" className="buy-a">
<IoNotifications className="buy-notification"/>
</a>
<a href="#" className="buy-a">
<p className="buy-p1">Buying</p>
</a>
<a href="#" className="buy-aa"><IoMdClose/></a>
</div>
        <div className="sell-div">
<a href="#" className="sell-a">
<IoNotifications className="sell-notification"/>
</a>
<a href="#" className="sell-a">
<p className="sell-p1">Selling</p>
</a>
<a href="#" className="buy-aa"><IoMdClose/></a>
 </div>
 <div className="border-div">
        <a className="a-list">+ Create new listing</a>
        </div>
    </div>
    <div className="filter-div">
    <p className="filters-p">Filters</p>
    <p className="filters-p2">Kombolcha . Within 65 kilometers</p>
    </div>
    <div>
        <p className="categories">Categories</p>
        <div className="car-c">
            <FaCar className="car-icon"/>
            <p className="car-p">Vehicles</p>
        </div>
        <div className="car-c">
            <FaHouseChimneyCrack className="car-icon"/>
            <p className="car-p">Property Rentals</p>
        </div>
        <div className="car-c">
            <FaTshirt className="car-icon"/>
            <p className="car-p">Apparel</p>
        </div>
    </div>
    </div>
    </div>
    <div className="new-xx">
<div className="new-c">
    <div >
    <p className="new-p">New for you</p>
    <div className="new-div">
    <div>
        <img src="./pic28.jpg" width={50} height={40} className="new-image1"/>
    </div>
    <p className="new-p1">40+ items Were just added to your buy and sell groups.<br/><span className="span">6w</span></p>
    </div>
    </div>

    <div className="new-div2">
    <div>
        <img src="./pic30.jpg" width={45} height={40} className="new-image2"/>
    </div>
    <p className="new-p1">40+ items Were just added to your buy and sell groups.<br/><span className="span2">6w</span></p>
    </div>
</div>
<div>
<div className="locat-div">
<p className="today">Today's picks</p>
<p className="p-i"><FaLocationDot/>Kalu .65 km</p>
</div>
<div className="middle-promotion-div">
    <div className="middle-div11">
        <img src="./pic48.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pic50.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pic44.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pic33.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pic30.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    
</div>
<div className="middle-promotion-div">
    <div className="middle-div11">
        <img src="./pic25.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pic27.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pic9.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pic29.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pic8.jpg" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    
</div>

</div>
    </div>
</div>
</div>
    ) 

}
export default MarketPlace;