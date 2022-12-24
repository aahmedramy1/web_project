import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";

const ImagesResult = () => {
  const { query } = useParams();
  const nLetters = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const fetchImagesResult = async () => {
    const response = await axios.get(
      "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
      {
        params: {
          q: query,
          pageNumber: "1",
          pageSize: "10",
          autoCorrect: "true",
        },
        headers: {
          "X-RapidAPI-Key":
            "3680e98eeemsh8d6117be1d6ed1bp1f603fjsn542338db49ad",
          "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
      }
    );
    console.log(response.data.value);
    return response.data.value;
  };
  const { data, isLoading, isError } = useQuery(
    "imagesResult",
    fetchImagesResult
  );
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
    <div
      className=" flex  justify-center items-center  gap-6  mt-9 "
      style={{ flexWrap: "wrap" }}
    >
      {data.map((item, id) => {
        return (
          <div
            key={id}
            className="border  border-black border-solid  flex justify-center items-center flex-col  "
            style={{
              width: "20%",
              padding: "10px",
              height: "300px",
              gap: "10px",
            }}
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <img src={item.url} alt="" />
            </a>
            <p>{nLetters(item.title, 200)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImagesResult;
