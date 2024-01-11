import { TranslateResponse } from "../interfaces";

interface Props {
  text: string;
  from: string;
  to: string;
  controller: AbortController;
}

export const sendRequest = async ({ from, text, to, controller }: Props) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/translate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromLanguage: from,
        toLanguage: to,
        text: text,
      }),
      signal: controller.signal,
    }
  );

  if (!response.ok) {
    throw new Error("Error en la traducción");
  }

  return response.json() as Promise<TranslateResponse>;
};
