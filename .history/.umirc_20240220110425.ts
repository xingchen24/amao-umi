import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", layout: false },
    { path: "/docs", component: "docs" },
    { path: "/test", component: "test"}
  ],
  npmClient: 'npm',
});
