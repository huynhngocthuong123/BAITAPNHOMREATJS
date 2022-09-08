import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { layDSBanner } from "../../../Redux/action/CarouselAction";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import "./CarouselHome.css";
import BannerTrailer from "./BannerTrailer/BannerTrailer";

export default function CarouselHome() {
    const Trailer = [{ maTrailer: 1282, trailer: "uoKSzOuPcfY" },
    { maTrailer: 1283, trailer: "kBY2k3G6LsM" },
    { maTrailer: 1284, trailer: "NYH2sLid0Zc" },]
    let [showTrailer, setShowtrailer] = useState();
    let [play, setPlay] = useState(false);
    let [playButton, setPlayButton] = useState(true);
    let dispacth = useDispatch();
    useEffect(() => {
        dispacth(layDSBanner());
    }, []);
    let { mangBanner } = useSelector((state) => {
        return state.bannerReducer;
    });
    const opts = {
        height: "450",
        width: "800",
        playerVars: {
            autoplay: 1,
        },
    };

    const contentStyle = {
        height: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const renderBanner = () =>
        mangBanner.map((item, index) => {
            return (
                <div key={index}>
                    <div
                        style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`, position: "relative" }}
                    >
                        <div className="img_play_carousel">
                            {playButton ? <button onClick={() => {
                                setPlay(true);
                                setPlayButton(false);
                                renderTrailer(item.maPhim)
                            }}> <img
                                    className="img-fluid"
                                    style={{ height: "100px" }}
                                    src="./img/play.png"
                                    alt=""
                                /></button> : null}
                        </div>
                    </div>
                </div>
            );
        });
    const renderTrailer = (id) => {
        console.log(id)
        const okla = Trailer.filter((item) => {
            return item.maTrailer === id
        })
        setShowtrailer(okla)
    }

    return (
        <div className="carousel_BG">
            <Carousel autoplay>{renderBanner()}</Carousel>
            {play ? (
                <div>
                    {<BannerTrailer prop={showTrailer} />}
                    <button
                        onClick={() => {
                            setPlay(false);
                            setPlayButton(true);
                        }}
                        className="close_trailer btn"
                    >
                        <i
                            style={{ color: "red", fontSize: "40px" }}
                            className="fa fa-times-circle"
                        ></i>
                    </button>
                </div>
            ) : null}
        </div>
    );
}
