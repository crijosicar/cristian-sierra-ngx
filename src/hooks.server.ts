import type { ServerInit } from "@sveltejs/kit";

export const init: ServerInit = async () => {
  console.info("Server created, registering shutdown hooks");
  process.on('sveltekit:shutdown', async (reason) => {
    console.info("SvelteKit has shutdown because of", reason);
  });
};
