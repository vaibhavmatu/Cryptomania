 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
     'x-rapidapi-key': '406d834fcamshadf519b08649e07p1b5364jsn0adabf316ea9'
    // 'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'
 }

 const baseUrl = 'https://coinranking1.p.rapidapi.com';

 const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

 export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({

            query: () => createRequest('/coins')
        })
    })
 })

 export const {
     useGetCryptosQuery,
 } = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '406d834fcamshadf519b08649e07p1b5364jsn0adabf316ea9'
//     }
//   }