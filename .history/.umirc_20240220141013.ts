import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", redirect: '/docs' },
    { path: "/docs", component: "docs" },
    { path: "/test", component: "test"},
    { path: "/*", component: "404"}
  ],
  npmClient: 'npm',
});
