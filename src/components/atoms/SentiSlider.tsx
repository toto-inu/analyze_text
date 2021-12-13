import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

type Props = {
  positive: boolean;
  value: number;
  style?: any;
};

export const SentiSlider = (props: Props) => {
  return (
    <Slider
      aria-label="slider-ex-1"
      colorScheme={props.positive ? "pink" : "blue"}
      defaultValue={50}
      value={props.value}
      isReadOnly
      {...props.style}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
