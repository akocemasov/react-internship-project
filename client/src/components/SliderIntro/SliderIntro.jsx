import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTopSlider } from "../../redux/getServerData/actions/getTopSlider.action";

import ButtonNext from "../../elements/ButtonNext/ButtonNext";
import ButtonPrev from "../../elements/ButtonPrev/ButtonPrev";

export const SliderIntro = (props) => {
  const NUM_SLIDES = 1;
  const dispatch = useDispatch();

  const selectTopSlider = (state) => state.topSlider;
  const topSlider = useSelector(selectTopSlider);

  useEffect(() => {
    dispatch(getTopSlider());
  }, []);

  const [slideActiveIdx, setActiveIdx] = useState(0);

  const slidesSlice = topSlider && topSlider.ready && topSlider.payload.slice(
    slideActiveIdx,
    slideActiveIdx + NUM_SLIDES
  );

  const slidesActive =
    slidesSlice.length < NUM_SLIDES
      ? [
          ...slidesSlice,
          ...topSlider.payload.slice(0, NUM_SLIDES - slidesSlice.length),
        ]
      : slidesSlice;

  const handleOnClick = (event) => {
    let index;
    if (event.target.name === "prev") {
      index =
        slideActiveIdx === 0
          ? topSlider.payload.length - 1
          : slideActiveIdx - 1;
    } else {
      // next
      index =
        slideActiveIdx === topSlider.payload.length - 1
          ? 0
          : slideActiveIdx + 1;
    }
    setActiveIdx(index);
  };

  return (
    topSlider &&
    topSlider.ready && (
      <div className="slider-intro w-full relative bg-[#1b1a1b] z-0">
        <div className="relative h-[44rem]">
          {slidesActive.map((elem) => (
            <div
              key={elem._id}
              className={`slider-image duration-700 ease-in-out absolute inset-0`}
            >
              <img
                src={elem.src}
                alt={elem.alt}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              ></img>
            </div>
          ))}
        </div>

        <div className="slider-indic flex absolute z-10 bottom-5 left-1/2 space-x-3 -translate-x-1/2">
          {topSlider.payload.map((elem, index) =>
            index === slideActiveIdx ? (
              <button
                type="button"
                key={elem._id}
                className="w-4 h-4 rounded-full bg-white"
              ></button>
            ) : (
              <button
                type="button"
                key={elem._id}
                className="w-4 h-4 rounded-full bg-white/50 hover:bg-white"
              ></button>
            )
          )}
        </div>

        <ButtonPrev
          className="absolute top-10 left-20 z-10 justify-center items-center mt-[16rem] cursor-pointer rounded-full w-10 h-24 bg-white/30 hover:bg-white/50"
          onClick={handleOnClick}
          name="prev"
        />
        <ButtonNext
          className="absolute top-10 right-20 z-10 justify-center items-center mt-[16rem] cursor-pointer rounded-full w-10 h-24 bg-white/30 hover:bg-white/50"
          onClick={handleOnClick}
          name="next"
        />
      </div>
    )
  );
};
export default SliderIntro;
