import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index",},
    { path: "/docs", component: "docs",
      wrappers:[
        '@/wrappers'
      ]
    },
    { path: "/test", component: "test"},
    { path: "/*", component: "404"},
    { path: "/home", redirect: "/"},
  ],
  npmClient: 'npm',
});
