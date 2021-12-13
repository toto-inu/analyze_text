import {
  Box,
  VStack,
  HStack,
  Button,
  Textarea,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { SentiSlider } from "@/components/atoms/SentiSlider";
import { analyzeText, translateJaToEn } from "@/components/predictions";
import { fetchText, selectText, createText } from "@/components/graphql/text";

import { format } from "date-fns";

type Text = {
  id: string;
  text: string;
  engText: string;
  positive: number;
  negative: number;
  createdAt: string;
  updatedAt: string;
};

export const App = () => {
  const dispatch = useDispatch();
  const texts = useSelector(selectText);
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

        // Dynamoテーブルに保存
        try {
          const params = {
            text: targetText,
            engText: translatedText,
            positive: Math.ceil(positive * 100),
            negative: Math.ceil(negative * 100),
          };
          await dispatch(createText(params));
        } catch (err) {
          console.log("👹", err);
        }
      }
    },
  });
  useEffect(() => {
    (async () => {
      console.log("hoge", dispatch);
      await dispatch(fetchText());
    })();
  }, [dispatch]);
  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
      <Center mt="80px">
        <VStack w="100%" maxW="789px" spacing="80px">
          <HStack>
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
          <VStack w="100%" mt="80px">
            <SentiSlider positive value={positiveValue} />
            <SentiSlider positive={false} value={negativeValue} />
          </VStack>
          <Table variant="simple">
            <TableCaption>analyze history. powered by AWS Amplify</TableCaption>
            <Thead>
              <Tr>
                <Th>対象テキスト</Th>
                <Th isNumeric>POSITIVEスコア</Th>
                <Th isNumeric>NEGATIVEスコア</Th>
                <Th>分析日</Th>
              </Tr>
            </Thead>
            <Tbody>
              {texts
                .slice()
                .sort((a: Text, b: Text) => {
                  if (new Date(a.createdAt) < new Date(b.createdAt)) return 1;
                  if (new Date(a.createdAt) > new Date(b.createdAt)) return -1;
                  return 0;
                })
                .slice(0, 10)
                .map((text: Text) => {
                  console.log(text);
                  return (
                    <Tr>
                      <Td>{text.text}</Td>
                      <Td isNumeric>{text.positive}</Td>
                      <Td isNumeric>{text.negative}</Td>
                      <Td>
                        {format(
                          new Date(text.createdAt),
                          "yyyy-MM-dd HH:mm:ss"
                        )}
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </VStack>
      </Center>
    </form>
  );
};
