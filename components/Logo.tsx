/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Logo() {
  return (
      <div class={tw`flex flex-row items-center justify-start w-1/3`}>
        <img src="/logo.png" class={tw`rounded w-10 h-10 m-4`} />
        <h1 class={tw`text-xl font-bold`}>
          Deno Korea
        </h1>
      </div>
  )
}