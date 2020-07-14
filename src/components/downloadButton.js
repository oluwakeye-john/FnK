import React from "react";

import styled from "styled-components";

import playStore from "../images/play-store.svg";
import appStore from "../images/app-store.svg";

export const DownloadButton = styled.a`
  display: inline-block;
  padding: 15px 1rem;
  background-color: #2336ff;
  border-radius: 18.6753px;
  border: 0;
  color: #fff;
  text-align: left;
  min-width: 230px;

  transition: 0.2s;

  margin-right: 2rem;

  &:hover {
    transform: scale(1.03);
  }
`;

export const DownloadButtonImage = styled.div`
  float: left;
`;

export const DownloadButtonText = styled.div`
  float: right;
`;

export const DownloadButtonSmallText = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const DownloadButtonLargeText = styled.p`
  margin: 0;
  font-size: 30px;
`;

const Download = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <DownloadButton href="#">
        <DownloadButtonImage>
          <img
            src={playStore}
            alt="download on play store"
            style={{ width: "50px", height: "50px" }}
          />
        </DownloadButtonImage>
        <DownloadButtonText>
          <DownloadButtonSmallText>Get it on</DownloadButtonSmallText>
          <DownloadButtonLargeText>Playstore</DownloadButtonLargeText>
        </DownloadButtonText>
      </DownloadButton>

      <DownloadButton href="#">
        <DownloadButtonImage>
          <img
            src={appStore}
            alt="download on play store"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
        </DownloadButtonImage>
        <DownloadButtonText>
          <DownloadButtonSmallText>Download on the</DownloadButtonSmallText>
          <DownloadButtonLargeText>App Store</DownloadButtonLargeText>
        </DownloadButtonText>
      </DownloadButton>
    </div>
  );
};

export default Download;
