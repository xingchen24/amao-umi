import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", layout: false },
    { path: "/docs", component: "docs" },
    { path: "/test", component: "test"},
    { path: "404", component: "404"}
  ],
  npmClient: 'npm',
});
