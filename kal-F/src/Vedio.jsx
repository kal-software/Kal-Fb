import Navbar from "./Navbar";
import { CiShop } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaHouseChimneyCrack } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiSolidSlideshow } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { BsFillSave2Fill } from "react-icons/bs";
import { FaDownLong } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
function Vedio(){
return(
    <div className="groups-body">

<div className="groups-left-container">
<div className="groups-left">
<div className="market-div">
    <p className="market-p">Video</p>
    <IoSettingsSharp className="group-icon"/>
</div>
<input type="text" placeholder="Search groups" className="Search-Marketplacee"/>
<a href="#"><BsSearch  className="market-search"/></a> 
<a href="#" className="browse">
< MdOndemandVideo className="brows-icon"/>
<p className="brows-all-pp">Home</p>
</a>
<div className="noti-div">
<a href="#" className="noti-a">
< FaVideo  className="market-notification"/>
</a>
<a href="#" className="noti-a">
<p className="market-p1">Live</p>
</a>

</div>
<div className="noti-div">
<a href="#" className="noti-a">
<TfiVideoClapper className="inbox-notification"/>
</a>
<a href="#" className="noti-a">
<p className="inbox-p1">Reels</p>
</a>

</div>
<div className="noti-div">
<a href="#" className="noti-a">
< BiSolidSlideshow className="inbox-notification"/>
</a>
<a href="#" className="noti-a">
<p className="inbox-p1">Shows</p>
</a>

</div>
<div className="noti-div">
<a href="#" className="noti-a">
<MdExplore className="inbox-notification"/>
</a>
<a href="#" className="noti-a">
<p className="inbox-p1">Explore</p>
</a>

</div>
<div className="noti-div">
<a href="#" className="noti-a">
<BsFillSave2Fill className="inbox-notification"/>
</a>
<a href="#" className="noti-a">
<p className="inbox-p1">Saved Videos</p>
</a>

</div>
</div>
<div className="video-div">
<div className="video-inner">
    <div className="video-innerr">
        <div>
        <img src="./pic28.jpg" width={50} height={50} className="video-image"/>
        </div>
        <div className="video-pp">
        <p className="video-pp1">Yilma Mezmur</p>
        <p className="video-pp2">Today at 2:42 AM .<FaGlobeAsia/></p>
        </div>
    </div>
    <div>
       <a href="#">< BsThreeDots className="BsThreeDots"/></a> 
    </div>
</div>
<video src="./yilma.mp4" className="yilma" controls = "autoplay"/>
<div className="video-likes">
    <div className="download">
        <FaDownLong className="downloadicon" />
        <p className="downloadp">Download</p>
    </div>
    <div className="download">
        <BiLike className="downloadiconn" />
        <p className="downloadp">Like</p>
    </div>
    <div className="download">
        <FaRegComment className="downloadiconn" />
        <p className="downloadp">Comment</p>
    </div>
    <div className="download">
        <PiShareFat className="downloadiconn" />
        <p className="downloadp">Share</p>
    </div>
    <div className="last-like">
      <BiLike className="like"/><FcLike className="f-like"/>  khalid Halal king,Ismael Ali and 70k others
    </div>
    
</div>
<div className="video-div">
<div className="video-inner">
    <div className="video-innerr">
        <div>
        <img src="./pic28.jpg" width={50} height={50} className="video-image"/>
        </div>
        <div className="video-pp">
        <p className="video-pp1">Tewodros Yoseph Mezmur</p>
        <p className="video-pp2">Today at 2:42 AM .<FaGlobeAsia/></p>
        </div>
    </div>
    <div>
       <a href="#">< BsThreeDots className="BsThreeDots"/></a> 
    </div>
</div>
<video src="./አጎንብሼ ሄጄ ቀና ብዬ መጣሁ _ ሊቀ መዘምራን ቴዎድሮስ ዮሴፍ.mp4" className="yilma" controls = "autoplay"/>
<div className="video-likes">
    <div className="download">
        <FaDownLong className="downloadicon" />
        <p className="downloadp">Download</p>
    </div>
    <div className="download">
        <BiLike className="downloadiconn" />
        <p className="downloadp">Like</p>
    </div>
    <div className="download">
        <FaRegComment className="downloadiconn" />
        <p className="downloadp">Comment</p>
    </div>
    <div className="download">
        <PiShareFat className="downloadiconn" />
        <p className="downloadp">Share</p>
    </div>
    <div className="last-like">
      <BiLike className="like"/><FcLike className="f-like"/>  khalid Halal king,Ismael Ali and 70k others
    </div>
    
</div>

</div>
<div className="video-div">
<div className="video-inner">
    <div className="video-innerr">
        <div>
        <img src="./pic28.jpg" width={50} height={50} className="video-image"/>
        </div>
        <div className="video-pp">
        <p className="video-pp1">Tewodros Yoseph Mezmur</p>
        <p className="video-pp2">Today at 2:42 AM .<FaGlobeAsia/></p>
        </div>
    </div>
    <div>
       <a href="#">< BsThreeDots className="BsThreeDots"/></a> 
    </div>
</div>
<video src="./ምን አለ ያጎደልክብኝ Ethiopian Orthodox Mezmur by Liqe Mezemiran tewodros yosef.mp4" className="yilma" controls = "autoplay"/>
<div className="video-likes">
    <div className="download">
        <FaDownLong className="downloadicon" />
        <p className="downloadp">Download</p>
    </div>
    <div className="download">
        <BiLike className="downloadiconn" />
        <p className="downloadp">Like</p>
    </div>
    <div className="download">
        <FaRegComment className="downloadiconn" />
        <p className="downloadp">Comment</p>
    </div>
    <div className="download">
        <PiShareFat className="downloadiconn" />
        <p className="downloadp">Share</p>
    </div>
    <div className="last-like">
      <BiLike className="like"/><FcLike className="f-like"/>  khalid Halal king,Ismael Ali and 70k others
    </div>
    
</div>

</div>
</div>


    </div>
    </div>
)
}
export default Vedio;