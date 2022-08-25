/** @jsx h */
import { h } from "preact";
import { AppProps } from "$fresh/server.ts"
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <div class={tw`h-screen`}>
      <Head>
        <title>Deno Korea</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <Component />
    </div>
  )
}
