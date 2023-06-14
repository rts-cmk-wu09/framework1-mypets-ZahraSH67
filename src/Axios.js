import axios from "axios";
axios
  .post(
    "https://api.petfinder.com/v2/oauth2/token",
    JSON.stringify({
      grant_type: "client_credentials",
      client_id: "dfTkc5dEDohXh1PxVcKX679UdFqUCXP4d8RVKuKv6erin0Erca",
    }),
    { headers: { "content-type": "application/json"} }
  )
  .then((res) => console.log(res.data));