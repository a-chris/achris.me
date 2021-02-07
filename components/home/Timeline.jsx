import styled from "@emotion/styled";
import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "Ottobre 2020 - Attuale",
    cardTitle: "Lab51 srl",
    content: ["React Developer"],
  },
  {
    title: "Aprile 2019 - Ottobre 2020",
    cardTitle: "Mango Mobile Solutions",
    content: [
      "Full Stack Developer (React, Spring MVC)",
      "Android Developer",
      "DevOps",
    ],
  },
  {
    title: "Marzo 2019",
    cardTitle: "Laura Triennale in Ing. e Scienze Informatiche",
    content: ["Universita' di Bologna"],
  },
  {
    title: "Novembre 2016",
    cardTitle: "Trasferimento all'Universita' di Bologna",
  },
  {
    title: "Settembre 2015",
    cardTitle: "Iscrizione al corso di Scienze Informatiche",
    content: ["Universita' di Messina"],
  },
];

const theme = {
  textColor: "black",
  primary: "black",
  secondary: "white",
  cardBgColor: "white",
  cardForeColor: "black",
};

export default function Timeline(props) {
  return (
    <div>
      <Chrono hideControls mode="VERTICAL" theme={theme} items={items}>
        {items.map((item) => (
          <TimelineContent>
            {item.content?.map((c) => (
              <p>{c}</p>
            ))}
          </TimelineContent>
        ))}
      </Chrono>
    </div>
  );
}

const TimelineContent = styled.div`
  width: 100%;
`;
