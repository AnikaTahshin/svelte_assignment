import { writable } from "svelte/store";

const apiResponses = writable([]);

const setAPIResponses = (responses) => {
  apiResponses.set(responses);
};

export { apiResponses, setAPIResponses };
