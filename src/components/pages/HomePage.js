import React from 'react';
import {Header} from '../Header/Header';
import Homeslider from '../../components/common/homeslider';
import Nft from '../../components/common/nft';
import "../../styles/components/homepage.scss";

import Meme_vip_1 from "../../../public/images/meme_vip_1.png";
import Meme_vip_2 from "../../../public/images/meme_vip_2.png";
import Meme_vip_3 from "../../../public/images/meme_vip_3.png";
import Phillip from "../../../public/images/phillip_image.png";

const slide_imgs = [
    Meme_vip_1, Meme_vip_2, Meme_vip_3
]



const HomePage = () => (
    <div className="main">
        <Header/>  
        <div className='slider-features'>
            <Homeslider data={slide_imgs }></Homeslider>
        </div>  
        <div className='nft-content'>
            <div className='available-nfts-title'>Available NFTs</div>
            <div className='nfts'>  
                <div className='nft-column-1'>
                    <Nft 
                        src="/images/low.mp4" 
                        link="/" 
                        type="mp4" 
                        title="OBLIQUITY - KAMALA HARRIS" 
                        name="SIMON WAN" 
                    /> 
                    <Nft 
                        src={`${Phillip}`}
                        link="/" 
                        type="img" 
                        title="I am Phillip" 
                        name="David Kaye" 
                    /> 
                    <Nft 
                        src="/images/low_1.mp4" 
                        link="/" 
                        type="mp4" 
                        title="Mary’s Room By @thisREO" 
                        name="Animus Collective" 
                    />
                </div>
                <div className='nft-column-2'>
                    <Nft 
                        src="/images/low.mp4" 
                        link="/" 
                        type="mp4" 
                        title="OBLIQUITY - STEPHEN HAWKING" 
                        name="SIMON WAN" 
                    /> 
                    <Nft 
                        src="/images/trim.png" 
                        link="/" 
                        type="img" 
                        title="Fresh Trim" 
                        name="David Kaye" 
                    /> 
                    <Nft 
                        src="/images/heart.png" 
                        link="/" 
                        type="img" 
                        title="Heart Parts" 
                        name="Robert Bowen" 
                    />
                </div>
                <div className='nft-column-3'>
                    <Nft 
                        src="https://stream.mux.com/cXB01uLZIAW4Mf5Qx3kLlw4xOP01mCwKTOR02sZzJB8ZL8/low.mp4" 
                        link="/" 
                        type="mp4" 
                        title="KID DYNAMITE" 
                        name="REMO" 
                    /> 
                    <Nft 
                        src="https://stream.mux.com/j01201b2YJU0201akluGXGxeHxjSdy4XZ4vgNdG2P7Jy5ls/low.mp4"
                        link="/" 
                        type="mp4" 
                        title="Rip $MEME" 
                        name="Nibble Bits" 
                    /> 
                    <Nft 
                        src="https://stream.mux.com/cDjiRAzDSZ8sgdBP3GutRezqgRxH6LUN3y5SbpVBtSY/low.mp4" 
                        link="/" 
                        type="mp4" 
                        title="Fruit Salad" 
                        name="Trippyogi" 
                    />
                </div>
                <div className='nft-column-4'>
                    <Nft 
                        src="https://stream.mux.com/4yztK6FuQH283v3gZfg3uanQ78jrIySkV1xQgwP7agw/low.mp4" 
                        link="/" 
                        type="mp4" 
                        title="Can't Escape $MEME" 
                        name="Nibble Bits" 
                    /> 
                    <Nft 
                        src="/images/monster.png"
                        link="/" 
                        type="img" 
                        title="MEME Glitter Unipangolin" 
                        name="Polychain Monsters" 
                    /> 
                    <Nft 
                        src="/images/low.mp4" 
                        link="/" 
                        type="mp4" 
                        title="OBLIQUITY - TRACEY EMIN" 
                        name="SIMON WAN" 
                    />
                </div>
            </div>
        </div> 
           
    </div>
);

export { HomePage };