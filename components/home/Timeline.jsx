import styled from "@emotion/styled";
import React from "react";
import { Chrono } from "react-chrono";
import useTranslation from "../../hooks/useTranslation";
import breakpoints from "../../styles/breakpoints";

const theme = {
  textColor: "black",
  primary: "black",
  secondary: "white",
  cardBgColor: "white",
  cardForeColor: "black",
};

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <TimelineDiv>
      <Chrono
        hideControls
        mode="VERTICAL"
        theme={theme}
        items={t("TIMELINE")}
        allowDynamicUpdate
      >
        {t("TIMELINE").map((item, index) => (
          <TimelineContent key={index}>
            {item.content?.map((c, index) => (
              <p key={index}>{c}</p>
            ))}
          </TimelineContent>
        ))}
      </Chrono>
    </TimelineDiv>
  );
}

const TimelineDiv = styled.div`
  ${breakpoints.lg} {
    margin-right: 10%;
  }
`;

const TimelineContent = styled.div`
  width: 100%;
`;
