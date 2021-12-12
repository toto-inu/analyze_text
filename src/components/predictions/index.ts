import Predictions from "@aws-amplify/predictions";

export const analyzeText = async (textToInterpret: string) => {
  try {
    const result = await Predictions.interpret({
      text: {
        source: {
          text: textToInterpret,
        },
        type: "ALL",
      },
    } as any);
    return result;
  } catch (err) {
    console.log("👹", err);
  }
};

export const translateJaToEn = async (textToTranslate: string) => {
  try {
    const result = await Predictions.convert({
      translateText: {
        source: {
          text: textToTranslate,
        },
      },
    });
    return result && result.text;
  } catch (err) {
    console.log("👹", err);
  }
};
