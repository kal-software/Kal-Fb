import Stories from "./Histories";
import Slider from "react-slick";


function Story(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
        
      };
return(
    <div className="facebookStory">
    <Slider {...settings}>
          {Stories.map((story) => (
            <div className="stories">
              <div><img src={story.image} className="imagesDiv"/></div>
              <div className="pDiv">{story.text}</div>
              <div><img src={story.image2} className="imageDiv"/></div>
            </div>
          ))}
          </Slider>
          </div>
)

}
export default Story