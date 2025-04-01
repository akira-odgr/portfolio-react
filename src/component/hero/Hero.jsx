import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { RiMapPinLine, RiCalendarLine, RiSearchLine } from "react-icons/ri";
import HeroImg from "../../assets/images/header.png";
import HeroContentImg from "../../assets/images/plane.png";

import "./Hero.scss";

export const Hero = () => {
    const heroImageRef = useRef(null); // useRefを使用して参照を作成
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const formRef = useRef(null);
    // const titleRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // モバイルサイズのチェック
        const isMobile = window.innerWidth <= 768;

        gsap.set(titleRef.current, { opacity: 0, y: 50 });
        gsap.set(descRef.current, { opacity: 0, y: 50 });
        gsap.set(formRef.current, { opacity: 0, y: 50 });
        gsap.set(heroImageRef.current, { opacity: 0 });

        if (isMobile) {
            tl.to(heroImageRef.current, {
                opacity: 1,
                duration: 3,
            })
                .to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                })
                .to(descRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                })
                .to(formRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                });
        } else {
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
            })
                .to(descRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                })
                .to(formRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                })
                .to(heroImageRef.current, {
                    opacity: 1,
                    duration: 2,
                });
        }
    }, []);

    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__image" ref={heroImageRef}>
                    <img src={HeroImg} alt="" />
                </div>
                <div className="hero__content">
                    <img src={HeroContentImg} alt="" />
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
