import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box} from "@mui/material"

const PricingPage = () => {

  const PricingBoxes = styled(Box)({
    width: 315,
    height: 50,
    background: 'green',
    border: 5,
    margin: 10,
    display: 'inline-grid'
  });

  return (
    <div>
      <h2>THIS IS THE OFFICIAL PRICING PAGE</h2>
      <PricingBoxes>
        <h5>PRICING 1</h5>
      </PricingBoxes>
      <PricingBoxes>
        <h5>PRICING 2</h5>
      </PricingBoxes>
      <PricingBoxes>
        <h5>PRICING 3</h5>
      </PricingBoxes>

    </div>
  )
}

export default PricingPage;