import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/CardLineChart.css";
import { getSessions } from "../../api";

const arrayXAxisLabel = ["L", "M", "M", "J", "V", "S", "D"];

function mapData(data) {
  return data?.map((data, index) => {
    data.day = arrayXAxisLabel[index];
    data.idx = index;
    return data;
  });
}

const ActiveDot = (props) => {
  const { cx, cy } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={cx - 9}
      y={cy - 9}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z"
        fill="white"
      />
      <path
        d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z"
        stroke="white"
        strokeOpacity="0.198345"
        strokeWidth="5"
      />
    </svg>
  );
};

function CardLineChart() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);

  const [selectedValue, setSelectedValue] = useState(0);

  const fetchSessions = async (id) => {
    const response = await getSessions(id);
    setData(response);
  };

  useEffect(() => {
    if (id) {
      fetchSessions(id);
    }
  }, [id]);

  const CustomTooltip = ({ active, payload }) => {
    useEffect(() => {
      if (active && payload && payload.length > 0) {
        setActive(true);
        setSelectedValue(payload[0].payload.idx);
      }
    }, [active, payload]);

    useEffect(() => {
      if (!active) {
        setActive(false);
        setSelectedValue(data.sessions.length - 1);
      }
    }, [active]);

    if (active && payload && payload.length > 0) {
      return (
        <div className="custom-tooltip-linear">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
  };

  if (!data) {
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      {active && (
        <div
          style={{
            position: "absolute",
            background: "rgba(0,0,0,0.1)",
            height: 300,
            width: 32,
            right: -2,
            border: "none",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        ></div>
      )}
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer
        className="cardLineChart"
        width="100%"
        height={300}
        wrapperStyle={{ overflow: "hidden" }}
      >
        <LineChart
          data={mapData(data?.sessions)}
          margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
        >
          <defs>
            <linearGradient
              type="basis"
              gradientUnits="userSpaceOnUse"
              id="color"
              x1="-200"
              y1="0"
              x2="500"
              y2="0"
            >
              <stop offset="0%" stopColor="#ffffff00" />
              <stop offset="100%" stopColor="#ffffffff" />
            </linearGradient>
          </defs>

          <ReferenceArea
            x1={selectedValue}
            x2={data.sessions.length - 1}
            y1={-20}
            y2={1000}
            fill="rgba(0,0,0,0.1)"
            opacity={1}
            fillOpacity={1}
            ifOverflow="visible"
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#fff", opacity: "1" }}
          />
          <Tooltip
            cursor={false}
            separator={false}
            active={true}
            animationEasing="ease-out"
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#color)"
            strokeWidth={3}
            dot={false}
            activeDot={<ActiveDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CardLineChart;
