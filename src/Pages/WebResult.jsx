import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";

const WebResult = () => {
  const { query } = useParams();
  const nLetters = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const fetchWebResult = async () => {
    const response = await axios.get(
      "https://bing-web-search1.p.rapidapi.com/search",
      {
        params: {
          q: query,
          mkt: "en-us",
          safeSearch: "Off",
          textFormat: "Raw",
          freshness: "Day",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "3680e98eeemsh8d6117be1d6ed1bp1f603fjsn542338db49ad",
          "X-RapidAPI-Host": "bing-web-search1.p.rapidapi.com",
        },
      }
    );

    console.log(response.data.webPages);
    return response.data.webPages;
  };
  const { data, isLoading, isError } = useQuery("webResult", fetchWebResult);
  if (isLoading)
    return (
      <div className=" flex w-full h-screen justify-center items-center ">
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  if (isError) return <div>Error</div>;

  return (
    <div className=" w-full flex flex-col justify-center items-center  gap-6  mt-9">
      {data.value.map((item) => {
        return (
          <div
            key={item.id}
            className="border  border-black border-solid  "
            style={{ width: "80%", padding: "10px" }}
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <h1
                className="  text-xl "
                style={{
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                {item.name}
              </h1>
            </a>
            <p>{nLetters(item.snippet, 200)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WebResult;
