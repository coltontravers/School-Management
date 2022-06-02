import React, { ReactNode } from "react";
import Flickity from "react-flickity-component";
import { css, tw } from "twind/css";

interface CarouselProps {
  children: ReactNode;
}

const carouselStyles = css`
  outline: none;

  &:not(:focus-visible) {
    outline: 1px solid black !important;
  }
`;

export const Carousel = ({ children }: CarouselProps) => {
  const flickityOptions = {
    cellAlign: "left",
    contain: true,
    percentPosition: true,
    freeScroll: true,
  };

  return (
    <div className={tw``}>
      {/* <Flickity
        className={tw(carouselStyles)} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        reloadOnUpdate // default false
      >
        {children}
      </Flickity> */}
    </div>
  );
};
