import React from "react"
import {
  PreFooterContainer,
  PreFooterLeftImage,
  PreFooterRightImage,
  PlantSection,
  Sitting,
  Dots,
  PreFooterHeading,
} from "./styles"

import DownloadButtons from "../../components/downloadButton"

const PreFooter = () => {
  return (
    <PreFooterContainer>
      <PreFooterLeftImage />
      <PreFooterRightImage>
        <PlantSection />
        <Sitting />
        <Dots />
      </PreFooterRightImage>
      <div>
        <PreFooterHeading>
          Start saving and investing in just 3 minutes.
        </PreFooterHeading>
        <DownloadButtons />
      </div>
    </PreFooterContainer>
  )
}

export default PreFooter
