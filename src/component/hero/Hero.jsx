import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { RiMapPinLine, RiCalendarLine, RiSearchLine } from "react-icons/ri";
import HeroImg from "../../assets/images/header.png";
import HeroContentImg from "../../assets/images/plane.png";

import "./Hero.scss";

export const Hero = () => {
    const heroImageRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const formRef = useRef(null);
    const contentImgRef = useRef(null);

    console.log(contentImgRef);

    useEffect(() => {
        const tl = gsap.timeline();
        // モバイルサイズのチェック
        const isMobile = window.innerWidth <= 768;

        // 初期設定
        gsap.set(
            [
                titleRef.current,
                descRef.current,
                formRef.current,
                heroImageRef.current,
                contentImgRef.current,
            ],
            { opacity: 0, y: 50 }
        );

        // アニメーションの順序を決定
        const animationSequence = isMobile
            ? [
                  heroImageRef.current,
                  contentImgRef.current,
                  titleRef.current,
                  descRef.current,
                  formRef.current,
              ]
            : [
                  titleRef.current,
                  descRef.current,
                  formRef.current,
                  contentImgRef.current,
                  heroImageRef.current,
              ];

        // アニメーションを追加
        animationSequence.forEach((ref) => {
            tl.to(ref, {
                opacity: 1,
                y: 0,
                duration: 0.5,
            });
        });
    }, []);

    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__image" ref={heroImageRef}>
                    <img src={HeroImg} alt="" />
                </div>
                <div className="hero__content">
                    <img src={HeroContentImg} ref={contentImgRef} alt="" />
                    <h1 ref={titleRef}>
                        Explore The World And Enjoy Your Trip
                    </h1>
                    <p className="section__description" ref={descRef}>
                        Discover breathtaking destinations and create
                        unforgettable memories with Advent. From scenic
                        landscapes to vibrant cities, your next adventure
                        awaits. Let's make your dream trip a reality.
                    </p>
                    <form action="/" ref={formRef}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="location"
                                placeholder=" "
                            />
                            <span>
                                <RiMapPinLine className="icon" />
                                Location
                            </span>
                        </div>
                        <div className="input-group">
                            <input type="text" name="date" placeholder=" " />
                            <span>
                                <RiCalendarLine className="icon" />
                                Date
                            </span>
                        </div>
                        <button type="submit" className="btn">
                            <RiSearchLine />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
