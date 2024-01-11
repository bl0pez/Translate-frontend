import { sendRequest } from "../helpers/sendRequest";

interface Props {
  text: string;
  from: string;
  to: string;
}

let controller = new AbortController();

export const translateUseCase = async ({ from, text, to }: Props) => {
  try {
    if (controller) controller.abort();

    controller = new AbortController();

    const data = await sendRequest({ from, text, to, controller });

    return data;
  } catch (error: any) {
    if (error.name === "AbortError") {
      return {
        message: "",
      };
    }
    return {
      message: "Error en la traducción",
    };
  }
};
