/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect } from "preact/hooks";
import banner from "../components/banner.ts";

export default function Intro() {
  useEffect(() => {
    console.log(banner);
  });

  return (
    <p class={tw`m-4`}>
      <a href="/" class={tw`text-blue-400`}>
        Deno Korea
      </a>
      에 오신 것을 환영합니다.
      <br />
      <br />
      <a href="https://deno.land" class={tw`text-blue-400`}>
        Deno
      </a>
      {`는 `}
      <a href="https://rust-lang.org" class={tw`text-blue-400`}>
        러스트
      </a>
      {`로 만들어진 `}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/javascript"
        class={tw`text-blue-400`}
      >
        JavaScript
      </a>
      {`, `}
      <a href="https://typescriptlang.org" class={tw`text-blue-400`}>
        TypeScript
      </a>
      {`, `}
      <a href="https://webassembly.org" class={tw`text-blue-400`}>
        WebAssembly
      </a>
      {`를 `}
      <a href="https://v8.dev/" class={tw`text-blue-400`}>
        V8
      </a>
      로 실행하는 간단하고 현대적이며 안전한 런타임입니다.
    </p>
  );
}
