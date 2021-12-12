import { Box, HStack, Button, Textarea, Center } from "@chakra-ui/react";
import { useFormik } from "formik";

export const App = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { targetText: "" },
    onSubmit: async (v) => {
      console.log("⛰⛰⛰⛰⛰⛰", JSON.stringify(v, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Center mt="80px">
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
      </Center>
    </form>
  );
};
