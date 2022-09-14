<script>
import wave from './components/wave.vue';
export default {
  components: {
    wave
  }
}
</script>

<template>
  <div class="py-36 bg-sky-300 text-center">
    <h2 class="text-xl text-white font-bold">hello, my name is</h2>
    <h1 class="header text-sky-600">Chase</h1>
  </div>
  <div class="bg-sky-300 -mb-5">
    <wave :amplitude="10" :speed="0.6" :points="3" class="fill-white"></wave>
  </div>
  <div class="w-full -mt-2 mb-8 bg-white">
    <div class="container break-words px-4 text-center mx-auto max-w-xl">
      <span class="subheader">I create </span>
      <span class="subheader text-sky-400">stellar</span>
      <span class="subheader"> applications</span>
    </div>
    <div class="w-fit mx-auto mt-8 text-zinc-600">
      I like them pretty, fast and simple.
    </div>
    <div class="flex flex-wrap max-w-md gap-4 px-8 mx-auto place-content-center mt-8">
      <div class="stack">
        <img src="/vuejs.ico" alt="vuejs" width="24" height="24">
        <span class="my-auto">VueJS</span>
      </div>
      <div class="stack">
        <img src="/vite.svg" alt="vite" width="24" height="24">
        <span class="my-auto">Vite</span>
      </div>
      <div class="stack">
        <img src="/node.ico" alt="node" width="24" height="24">
        <span class="my-auto">NodeJS</span>
      </div>
      <div class="stack">
        <img src="/express.png" alt="express" width="24" height="24">
        <span class="my-auto">ExpressJS</span>
      </div>
      <div class="stack">
        <img src="/mongo.ico" alt="mongodb" width="24" height="24">
        <span class="my-auto">MongoDB</span>
      </div>
    </div>
    <div class="mt-16 px-4 text-left max-w-6xl mx-auto">
      <div class="mb-16 text-lg">
        <div class="title mb-8">Who is "Chase" 🤔</div>
        <div>I am a web developer based in Flint, MI.</div>
        <div class="max-w-lg mt-2">
          Programming is not only my hobby, 
          it's one of the only things I do that makes me feel genuinely happy and content. 
          I love the challenge that coding presents and the problem solving that comes along with it. 
          I'm very detail oriented and strive for clean, well organized code. 
          I have a keen eye for creating beautiful, user-friendly interfaces.
        </div>
        <div class="subtitle mt-8">What I enjoy</div>
        <div>
          <ul class="list-disc list-inside mt-4">
            <li>Graphic design</li>
            <li>Creating frontend UI</li>
            <li>Creating backend APIs</li>
            <li>Learning new frameworks</li>
            <li>Trying new stacks</li>
            <li>Video games</li>
            <li>Coffee</li>
          </ul>
        </div>
        <div class="subtitle mt-8">What I don't</div>
        <div>
          <ul class="list-disc list-inside mt-4">
            <li>golang</li>
            <li>Megan the Stallion</li>
          </ul>
        </div>
      </div>
      <div class="title mb-8">Showcase</div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-none justify-items-center">
        <div class="group relative w-fit">
          <a href="https://chasebarrington.github.io/portfolio/">
            <img src="/portfolio.webp" alt="portfolio preview" class="rounded-lg hover:opacity-90 transition-opacity drop-shadow-md" width="380" height="288">
          </a>
          <div class="flex mt-2">
            <div class="text-xl w-fit text-zinc-600">Portfolio</div>
            <a href="https://github.com/chasebarrington/portfolio" class="ml-auto">
              <img src="/github.ico" alt="github icon" width="24" height="24">
            </a>
          </div>
        </div>
        <div class="group relative w-fit">
          <a href="https://rune.city/">
            <img src="/rune.webp" alt="rune.city preview" class="rounded-lg hover:opacity-90 transition-opacity drop-shadow-md" width="380" height="288">
          </a>
          <div class="flex mt-2">
            <div class="text-xl w-fit text-zinc-600">Rune City</div>
            <a href="https://github.com/chasebarrington/rune-city" class="ml-auto">
              <img src="/github.ico" alt="github icon" width="24" height="24">
            </a>
          </div>
        </div>
        <div class="group relative w-fit">
          <a href="https://treesoftruth.com/">
            <img src="/trees.webp" alt="treesoftruth.com preview" class="rounded-lg hover:opacity-90 transition-opacity drop-shadow-md" width="380" height="288">
          </a>
          <div class="flex mt-2">
            <div class="text-xl w-fit text-zinc-600">Trees of Truth</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  @apply text-6xl font-extrabold;
}
.subheader{
  @apply text-5xl font-extrabold;
}
.title {
  @apply text-3xl font-bold text-zinc-600;
}
.subtitle {
  @apply text-xl font-bold text-zinc-600;
}
.stack {
  @apply bg-white border border-zinc-100 drop-shadow-lg rounded px-2 py-2 flex gap-x-2;
}
</style>