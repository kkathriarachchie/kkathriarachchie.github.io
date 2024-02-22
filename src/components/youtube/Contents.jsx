import React from 'react';
import './contents.css'
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import ReactPlayer from "react-player";

const Contents = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">YouTube Contents</h2>
            <span className="section__subtitle">T Monsters</span>
            <Swiper className="content__container"
                    loop={true}
                    grabCursor={true}
                    spaceBetween={24}
                    pagination={{
                        clickable:true
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                    }}
                    modules={[Pagination]}
            >
                {Data.map(({id, link,}) => {
                    return (
                        <SwiperSlide className="content__card" key={id}>
                            <div className='player-wrapper'>
                                <ReactPlayer
                                    controls = {true}
                                    className='react-player'
                                    url={link}
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}

export default Contents;