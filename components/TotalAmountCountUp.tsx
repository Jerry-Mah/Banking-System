"use client";
import React from "react";
import CountUp from "react-countup";

const TotalAmountCountUp = ({ amount }: { amount: number }) => {
  return <CountUp className = "w-full" decimals={2} prefix="₹ " end={amount} />;
};

export default TotalAmountCountUp;
