import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Nft(props) {    
    return <div className="tile tile-nft">
        <div className="inner">
            <div className="card">
                {props.type == "img" ?
                <div className="media img">
                    <div className="inner">
                        <a href={props.link}>
                            <div>
                                <div>
                                    <img alt="" aria-hidden="true" role="presentation" src={props.src}/>
                                </div>
                                <img src={props.src} decoding="async"/>
                            </div>
                        </a>
                    </div>
                </div>
                :
                <div className="media video">
                    <div className="inner">
                        <div className="video-holder">
                            <div className="inner">
                                <a href={props.link}>
                                    <div className="react-player">
                                        <video src={props.src} preload="auto" autoPlay={true} loop></video>
                                    </div>
                                </a>
                                <button type="button" className="audio-button">
                                    <i className="fa fa-use"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
            <div className="info">
                <a href={props.link}>
                    <h2 className="title">{props.title}</h2>
                </a>
                <div className="subtitle">{props.name}</div>
            </div>
        </div>
    </div> 
}

Nft.propTypes = {
    link: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.node
}

export default Nft;