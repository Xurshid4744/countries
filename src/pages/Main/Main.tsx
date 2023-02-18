import React, { FC, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { getCountries } from "./helpers";
import { Card } from "../../components/Card";
import { Input } from "antd";

const Main: FC = () => {
  const [code, setCode] = useState<string>("");
  const { loading, error, data } = useQuery(getCountries(code));
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const searchCountrie = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setCode(value.toUpperCase());
    }, 1000);
  };

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="main-container">
      <h1>Countries !</h1>
      <Input type="text" onChange={searchCountrie} placeholder={"Search by country code"}/>
      {data?.countries[0] && (
        <Card data={data?.countries[0]} loading={loading} />
      )}
    </div>
  );
};

export default Main;
