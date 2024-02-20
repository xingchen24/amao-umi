import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index"},
    { path: "/docs", component: "docs",
      wrappers:[
        '@/wrappers/auth'
      ]
    },
    { path: "/test", component: "test"},
    { path: "/*", component: "404"},
    { path: "/home", redirect: "/"},
  ],
  npmClient: 'npm',
  layout: {
    title: 'Ant Design',
    locale: false, // 默认开启，如无需菜单国际化可关闭
  },
});

