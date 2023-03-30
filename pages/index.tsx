import React from "react";
import Link from "next/link";
import Head from "next/head";
import Section from "../src/components/sections";
import loaderData from "../src/components/animations/loader.json";
import bgData from "../src/components/animations/bg.json";
import { useEffect, useState } from "react";
import Animations from "../src/components/animations/animations";

export default function home() {
  const [isLoad, setIsLoad] = useState(true);

  const getLoader = () => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3000);
  };

  useEffect(() => {
    getLoader();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Head>
        <title>Animate JSON</title>
      </Head>
      {isLoad ? (
        <Section
          title="Advanced Animations"
          description="Test React animation Json"
          size="200px"
          animation={<Animations animation={loaderData} />}
        ></Section>
      ) : (
        <>
          <Section
            size="auto"
            title="Advanced Animations"
            description="Test React animation Json"
            animation={<Animations animation={bgData} />}
          ></Section>
          <Link href="/about">
            <a>About</a>
          </Link>
        </>
      )}
    </div>
  );
}
