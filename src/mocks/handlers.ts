import { http, HttpResponse } from "msw";
import unicorns from "../data/unicorns";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/unicorn`, () => {
    return HttpResponse.json(unicorns);
  }),
];
