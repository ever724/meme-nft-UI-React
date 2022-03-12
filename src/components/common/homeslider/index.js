import React from 'react';
import './style.scss'; 
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";

function Homeslider(props ) {   
    const { data} = props;
    return <div className="home-slider">
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                centerMode={false}
                className=""
                containerClass=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                desktop: {
                    breakpoint: {
                    max: 3000,
                    min: 1024
                    },
                    items: 1,
                    partialVisibilityGutter: 100
                },
                mobile: {
                    breakpoint: {
                    max: 464,
                    min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                    max: 1024,
                    min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
                
            >
                {data.map((item, key )=> {
                    return <img key={key} src={item} style={{display: 'block', height: '100%', margin: 'auto', width: '100%'}}/>}
                )}
                
            </Carousel>
    </div>
}

Homeslider.propTypes = {
    data: PropTypes.array,
};

Homeslider.defaultProps = {
    data: []
}

export default Homeslider;