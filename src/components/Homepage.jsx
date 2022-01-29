import React from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data);
  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className="heading">
        Overall Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats ? globalStats.total : "Couldn't fetch!"}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={
              globalStats
                ? millify(globalStats.totalExchanges)
                : "Couldn't fetch!"
            }
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Marketcap"
            value={
              globalStats
                ? `$${millify(globalStats.totalMarketCap)}`
                : "Couldn't fetch!"
            }
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24hr Volume"
            value={
              globalStats
                ? `$${millify(globalStats.total24hVolume)}`
                : "Couldn't fetch!"
            }
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market"
            value={globalStats ? globalStats.total : "Couldn't fetch!"}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={
              globalStats
                ? millify(globalStats.totalMarkets)
                : "Couldn't fetch!"
            }
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
