import Image from "next/image";
import ClientSayingCard from "./ClientSayingCard";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation, Trans } from "react-i18next";
const ClientSaying = () => {
  const { t } = useTranslation("dropdownpages");
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-10 px-[2rem] lg:px-[7rem] md:flex-row flex-col-reverse pb-[3rem] sm:pt-[4rem] ">
        <div className="md:w-[45%] flex flex-col items-center sm:items-start gap-10">
          <div className="border-b-2 w-full border-[#0D99FF] pb-5">
            <p className="font-helvetica  text-[25px] font-normal leading-[32.37px] text-left">
              <Trans
              i18nKey="massage.clientSaying.title"
              components={[<br key={0} />]}
            />
            </p>
          </div>
          <p className="font-helvetica max-w-[442.64px] text-[#242424] text-[12px] font-normal leading-[24px] tracking-[0.05em] text-left">
           {t("massage.clientSaying.description")}
          </p>

          <div className="slider-container sm:py-10 py-5 w-[300px] md:w-full">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                <ClientSayingCard />
              </div>
              <div key={2}>
                <ClientSayingCard />
              </div>
              <div key={3}>
                <ClientSayingCard />
              </div>
            </Slider>
          </div>
          <div className="flex gap-4">
            <button className="button" onClick={previous}>
              <Image
                width={44}
                height={18}
                src="/icons/small_long_right.svg"
                alt="arrow icon"
              />
            </button>
            <button className="button" onClick={next}>
              <Image
                width={44}
                height={18}
                src="/icons/small_long_left.svg"
                alt="arrow icon"
              />
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-center sm:justify-start  sm:w-[50%] mx-auto w-[216px] rounded-[5px] h-[244px] md:h-[618px] bg-[url('/drop-down-images/client-saying-mobile.png')] md:bg-[url('/drop-down-images/client-saying.png')] bg-cover bg-center">
          <div className="flex shadow-[10px_10px_21px_0px_#004CA41A] text-[#0D99FF] sm:gap-2 bg-[#FFFFFFE5] rounded-[10px] mb-12 sm:-ml-[10rem] px-7 sm:py-3 w-fit flex-col items-center ">
            <p className="font-helvetica text-[14px] sm:text-[20px] font-normal leading-[25.9px] text-left ">
            {t("massage.clientSaying.rating")}
            </p>
            <div className="relative w-[96px] sm:w-[188px] h-[25.36px] sm:h-[36px]">
              <Image
                fill
                src="/drop-down-images/rating-stars.png"
                alt="four star rating"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientSaying;
