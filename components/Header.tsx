import React from "react";
import Head from "next/head";

export default function Header(props: { subtitle: string }) {
  return <Head>
    <title>{`La Spartana - ${props.subtitle}`}</title>
    <link rel="icon" href="/favicon.ico"/>
  </Head>;
}