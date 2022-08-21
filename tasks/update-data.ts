import 'dotenv/config';
import axios from 'axios';
import { writeJSON } from '../utils/write-json';

const main = async() => {
  // Retrieve data from Etherscan.io API
  console.log("Pulling data from Etherscan.io API");

  const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API_KEY}`;
  const res = await axios.get(url);

  await writeJSON(`./data/ethprice.json`, res.data);
  console.log(res.data);

  console.log("Done");
};

main();
