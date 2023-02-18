import { FC } from "react";
import { Card as AntCard } from "antd";
import { FcPhone } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

const Card: FC<any> = ({ data, loading }): JSX.Element => {
  // emoji INCORRECT !!!
  return (
    <AntCard
      loading={loading}
      size="small"
      hoverable
      title={data?.name}
      extra={data?.continent?.name}
      style={{ width: "100%" }}
    >
      <p><FcPhone /> +{data?.phone}</p>
      <p><BsCurrencyDollar />{data?.currency}</p>
      <span><MdLanguage /> {data?.languages[0]?.native}</span>
      <span>{data?.languages[1] && ` / ${data?.languages[1]?.native}`}</span>
      <span role="img" aria-label="emoji" id="emoji">{data?.emoji}</span>
    </AntCard>
  );
};

export default Card;
