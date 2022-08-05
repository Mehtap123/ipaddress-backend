import axios from "axios";

// const ipInfo = axios.get('http://ip-api.com/json/24.48.0.1')
// .then(response => {
//   console.log(response);
// });

// Was ich bis jetzt hatte

// export const ipAdress = async (req, res) => {
//     try {
//         const {ip} = req.body;
//         const {countryInfo} = await axios.get(`http://ip-api.com/json/${ip}`)
//         .then(response => {
//         console.log(response)
//         const data = response.data
//         res.status(200).json({data})
//         });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   };

// Neu

export const ipAdress = (req, res) => {
  try {
    const { ip } = req.body;
    axios.get(`http://ip-api.com/json/${ip}`).then((response) => {
        res.status(200).json(response.data)
      });
  } catch (err) {
    res.status(500).json(err);
  }
};
