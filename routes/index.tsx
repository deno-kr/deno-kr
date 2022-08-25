/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Logo from "../components/Logo.tsx";
import LinkCard from "../components/LinkCard.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <a href="/">
        <Logo />
      </a>
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
        <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" class={tw`text-blue-400`}>
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
        로 실행하는 런타임입니다.
      </p>
      <div class={tw`w-max grid grid-cols-2 grid-flow-row gap-4 m-4`}>
        <LinkCard icon="/icons/deno_hr.svg" title="Deno" content="Deno 공식 홈페이지" url="https://deno.land" />
        <LinkCard icon="/icons/discord.svg" title="디스코드" content="Deno Korea 디스코드 참여하기" url="https://discord.com/invite/5HwyPHkaWq" />
        <LinkCard icon="/icons/github.svg" title="Github" content="Deno Korea Github Organization" url="https://github.com/deno-kr" />
      </div>
    </div>
  );
}
