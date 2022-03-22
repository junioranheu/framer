import { loremIpsum } from 'lorem-ipsum';
import React from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Botao from '../../components/outros/botao.js';
import Video1 from '../../static/pages/landingPage/carousel/1.mp4';
import Video2 from '../../static/pages/landingPage/carousel/2.mp4';
import Video3 from '../../static/pages/landingPage/carousel/3.mp4';
import Video4 from '../../static/pages/landingPage/carousel/4.mp4';
import Video5 from '../../static/pages/landingPage/carousel/5.mp4';
import Video6 from '../../static/pages/landingPage/carousel/6.mp4';
import StylesCarousel from '../../styles/carousel.module.css';
import Styles from '../../styles/landingPage.module.css';
import Slide from '../outros/slide.js';

export default function Sessao3() {
    return (
        <section className={Styles.wrapper} style={{ background: '#fff' }}>
            <div className={Styles.principal}>
                <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopXG}`}>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto}`}>Faça acontecer.</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>Tire suas ideias do papel</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>com o Framer.</span>

                    <div className={`${Styles.botaoCustom} ${Styles.botaoCorPrincipal}`}>
                        <Botao texto={'Ver mais ideias'} url={'/docs'} isNovaAba={false} />
                    </div>
                </div>


                <Swiper className={StylesCarousel.carousel}
                    spaceBetween={50} slidesPerView={3}

                    breakpoints={{
                        1: {
                            slidesPerView: 1,
                        },
                        1025: {
                            slidesPerView: 2,
                        }
                    }}

                    modules={[Navigation]}
                    navigation
                >
                    <SwiperSlide>
                        <Slide
                            video={Video1}
                            descricao={loremIpsum({ count: 3 })}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            video={Video2}
                            descricao={loremIpsum({ count: 3 })}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            video={Video3}
                            descricao={loremIpsum({ count: 3 })}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            video={Video4}
                            descricao={loremIpsum({ count: 3 })}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            video={Video5}
                            descricao={loremIpsum({ count: 3 })}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            video={Video6}
                            descricao={loremIpsum({ count: 3 })}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

