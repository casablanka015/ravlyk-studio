// @ts-check
import { defineConfig } from "astro/config";

// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
});
