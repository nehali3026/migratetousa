import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

let TYPESENSE_SERVER_CONFIG = {
  apiKey: import.meta.env.VITE_APP_TYPESENSE_SEARCH_ONLY_API_KEY, // Correct prefix for Vite
  nodes: [
    {
      host: import.meta.env.VITE_APP_TYPESENSE_HOST,
      port: import.meta.env.VITE_APP_TYPESENSE_PORT,
      protocol: import.meta.env.VITE_APP_TYPESENSE_PROTOCOL,
    },
  ],
  connectionTimeoutSeconds: 60,
  numRetries: 8,
};

export const typesenseAdapter = new TypesenseInstantsearchAdapter({
  server: TYPESENSE_SERVER_CONFIG,
  additionalSearchParameters: {
    queryBy: "job_title , company_name ,worksite_city",
    numTypos: 4,
    typoTokensThreshold: 1,
  },
});

export const searchClient = typesenseAdapter.searchClient;
