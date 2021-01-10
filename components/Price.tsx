import React from "react";

export default function Price(props: {price: number}) {
  const withDecimal = props.price / 100;
  return <p style={{ margin: 0}}>{`€ ${withDecimal}`}</p>
}