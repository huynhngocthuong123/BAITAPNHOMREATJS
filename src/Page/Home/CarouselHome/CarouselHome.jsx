import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import { layDSBanner } from '../../../Redux/action/CarouselAction';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from "react-youtube";


// import { CSSTransition } from 'react-transition-group';
import "./CarouselHome.css"
import BannerTrailer from './BannerTrailer/BannerTrailer';


export default function CarouselHome() {
    let [showTrailer, setShowtrailer] = useState(
        [
            { maTrailer: 1282, trailer: "uoKSzOuPcfY" },
            { maTrailer: 1283, trailer: "kBY2k3G6LsM" },
            { maTrailer: 1284, trailer: "jBa_aHwCbC4" },
        ]
    )

    console.log(showTrailer)
    let [play, setPlay] = useState(false)
    let [playButton, setPlayButton] = useState(true)
    let dispacth = useDispatch()
    useEffect(() => {
        let action = layDSBanner()
        dispacth(action)
        // renderTrailer()
    }, [])
    let { mangBanner } = useSelector((state) => {
        return state.bannerReducer
    });
    console.log(mangBanner)
    const contentStyle = {
        height: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const renderBanner = () => (
        mangBanner.map((item, index) => {
            return <div key={index}>
                <div
                    style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`, }}
                >
                    {/* {playButton ? <button onClick={() => {
                        // renderTrailer(item.maPhim)
                        setPlay(true)
                        setPlayButton(false)
                    }}>Play traiLer</button> : null} */}
                </div>
            </div>
        })
    );
    // const opts = {
    //     height: "390",
    //     width: "640",
    //     playerVars: {
    //         autoplay: 1,
    //     },
    // };
    // const renderTrailer = (maPhim) => {
    //     // console.log(maPhim)
    //     let con = showTrailer.find((item) => {
    //         // if (item.maTrailer === maPhim) {
    //         //     console.log(item.trailer)
    //         //     return <YouTube videoId={item.trailer} opts={opts} />
    //         // }
    //         return item.maTrailer == maPhim
    //     });
    //     console.log("day", con)
    //     setShowtrailer({
    //         showTrailer: con
    //     })
    // }
    // thêm event click hiện trailer phim
    return (
        <div className='carousel_BG' >
            <Carousel autoplay >{renderBanner()}</Carousel>
            {playButton ? <button onClick={() => {
                setPlay(true)
                setPlayButton(false)
                // console.log(play)
            }
            } className='img_play_carousel' >
                <img className='img-fluid' style={{ height: "100px" }} src="./img/play.png" alt="" />
            </button > : null}
            {
                play ? <div>
                    <BannerTrailer />
                    {/* {renderTrailer()} */}
                    <button
                        onClick={() => {
                            setPlay(false);
                            setPlayButton(true);
                        }}
                        className="close_trailer btn"
                    >
                        <i style={{ color: "red", fontSize: "40px" }} class="fa fa-times-circle"></i>
                    </button>
                </div>
                    : null
            }
        </div >
    )
}

