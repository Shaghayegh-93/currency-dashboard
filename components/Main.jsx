import { useEffect } from "react";
import axios from "axios";
import Login from "./Login";
import Dropdown from "./Dropdown";

const Main = () => {
  useEffect(() => {
    const sendRequest = () => {
      axios({
        method: "get",
        url: "https://rest.coinapi.io/v1/exchangerate/BTC?invert=false",

        headers: {
          "X-CoinAPI-Key": "B85F6259-C353-43D0-B86C-BA852AD5211A",
        },
      })
        .then((res) => {
          console.log("res: ", res);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    };
    sendRequest();
  }, []);
  return (
    <div className="w-full flex">
      <div className="w-[20%] bg-slate-400 h-screen ">left side</div>
      <div className="w-[80%] flex flex-col">
        <Login />
        <Dropdown />
      </div>
    </div>
  );
};

export default Main;
