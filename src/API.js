export const API = {
  key: "a9920ae6206e5c0c4f9d24d14d10e793",
  base: "https://api.openweathermap.org/data/2.5/",
};

// export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
// export const GEO_API = {
//   url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "bb22ca9c50msh93d865682457e2ep110ff6jsn85c06eedd124",
//     "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
//   },
// };

export const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "bb22ca9c50msh93d865682457e2ep110ff6jsn85c06eedd124",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
