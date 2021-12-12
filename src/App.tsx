import {
  Box,
  VStack,
  HStack,
  Button,
  Textarea,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormik } from "formik";

import { SentiSlider } from "@/components/atoms/SentiSlider";
import { analyzeText, translateJaToEn } from "@/components/predictions";

export const App = () => {
  const [positiveValue, setPositiveValue] = useState(50);
  const [negativeValue, setNegativeValue] = useState(50);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { targetText: "" },
    onSubmit: async (v) => {
      const { targetText } = v;
      const translatedText = await translateJaToEn(targetText);

      if (translatedText) {
        const result = await analyzeText(translatedText);
        if (
          !result ||
          !result.textInterpretation ||
          !result.textInterpretation.sentiment
        )
          return;
        const { positive, negative } = result.textInterpretation.sentiment;
        setPositiveValue(positive * 100);
        setNegativeValue(negative * 100);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Center mt="80px">
        <VStack>
          <HStack maxW="789px" w="100%">
            <Textarea
              name="targetText"
              placeholder="感情分析するテキストを入力ください"
              size="md"
              resize="none"
              h="120px"
              onChange={formik.handleChange}
            />
            <Box w="80px" pos="relative" h="120px">
              <Button
                type="submit"
                colorScheme="teal"
                size="md"
                pos="absolute"
                bottom="8px"
                disabled={
                  Object.keys(formik.errors).length > 0 ||
                  formik.values.targetText.length === 0
                }
              >
                GO {">"}
              </Button>
            </Box>
          </HStack>
          <SentiSlider positive value={positiveValue} />
          <SentiSlider positive={false} value={negativeValue} />
        </VStack>
      </Center>
    </form>
  );
};
