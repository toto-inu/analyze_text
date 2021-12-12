import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

type Props = {
  positive: boolean;
  value: number;
};

export const SentiSlider = (props: Props) => {
  return (
    <Slider
      aria-label="slider-ex-1"
      colorScheme={props.positive ? "pink" : "blue"}
      defaultValue={50}
      value={props.value}
      isReadOnly
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
