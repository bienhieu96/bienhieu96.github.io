import { UserComponent, useNode, Element } from "@craftjs/core";
import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../Container";
import {
  Autoplay,
  Pagination,
  Navigation,
  Lazy,
  EffectFade,
  EffectCards,
  EffectFlip,
  Grid,
} from "swiper";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/grid";
import "swiper/css/effect-flip";
import { SlideSettings } from "./SlideSettings";
import styled from "styled-components";

type SlideProps = {
  imageStyle?: string;
  margin?: any[];
  url?: string;
  width?: string;
  height?: string;
  script?: string;
  autoplay?: any;
  effect?: string;
  slidesPerView?: number;
  numberOfslide?: number;
};
const SlideDiv = styled.div<any>`
  width: 100%;
  height: 500px;
  > div {
    height: 500px;
  }
  iframe {
    pointer-events: ${(props) => (props.enabled ? "none" : "auto")};
    // width:100%!important;
    // height:100%!important;
  }
`;
export const Slide: UserComponent<SlideProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const {
    text,
    textComponent,
    width,
    height,
    script,
    autoplay,
    effect,
    slidesPerView,
    numberOfslide,
    ...otherProps
  } = props;
  console.log("autoplay", autoplay);
  return (
    <SlideDiv ref={connect}>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        cssMode={true}
        pagination={{
          clickable: true,
        }}
        effect={effect}
        navigation={true}
        autoplay={{ delay: autoplay * 1000 }}
        grabCursor={effect === "cards" ? true : false}
        slidesPerView={slidesPerView}
        // slidesPerGroup={3}
        // grid={{
        //   rows: 1
        // }}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          Lazy,
          EffectFade,
          EffectCards,
          Grid,
          EffectFlip,
        ]}
        className="mySwiper"
        {...otherProps}
      >
        {new Array(numberOfslide)
          .fill(0)
          .map((_,index) => {
            return (
              <SwiperSlide>
                <Element
                  id={`image${index}`}
                  canvas
                  is={Container}
                  width="100%"
                  height="100%"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </SlideDiv>
  );
};
Slide.craft = {
  displayName: "Slide",
  props: {
    margin: ["5", "0", "5", "0"],
    url: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
    width: `100%`,
    height: `100%`,
    autoplay: 2,
    effect: "",
    slidesPerView: 1,
    numberOfslide: 3,
  },
  related: {
    toolbar: SlideSettings,
  },
};
