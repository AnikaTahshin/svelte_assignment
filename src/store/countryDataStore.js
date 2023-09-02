import { writable } from "svelte/store";

// Initialize an empty array to store API responses
const apiResponses = writable([]);
const flag = writable();
const name = writable();
const cioc = writable();
const unMember = writable();
const currency = writable();
const language = writable();
const population = writable();

// Function to set the API responses in the store
const setAPIResponses = (responses) => {
  apiResponses.set(responses);
};

// Export the writable store and the set function
export { apiResponses, setAPIResponses, name };
