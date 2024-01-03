import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: () => {
      const headers = new Headers();
      headers.set('X-RapidAPI-key', '6bacc1ca5dmsh6711665f6d75203p1d75abjsn59237c09b218');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: (genre) => 'charts/track' }),
    getSongsDetails: builder.query({
      query: ({ songid }) => `/songs/v2/get-details?id=${songid}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `charts/list?country_code=${countryCode}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsDetailsQuery,
  useGetSongsByCountryQuery,
} = shazamCoreApi;

