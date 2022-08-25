/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { AppProps } from "$fresh/server.ts"
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Deno Korea</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <div class={tw`flex flex-col min-h-screen`}>
        <div class={tw`flex-1`}>
          <Component />
        </div>
        <Footer />
      </div>
    </>
  )
}
