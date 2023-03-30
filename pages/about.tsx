import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        {" "}
        <title>Animate JSON - About</title>
      </Head>
      Acesse meu{" "}
      <a target="blank" href="https://github.com/AlineJesus">
        GIT
      </a>
      <br></br>
      <Link href="/">
        <a>Return</a>
      </Link>{" "}
    </div>
  );
}
