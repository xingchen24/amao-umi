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
    { path: "/xiayuchen", component: "@/pages/xiaYuChenLearn/index.tsx", layout: false},
    { path: "/learn", component: "@/pages/learnTs/index.tsx", layout: false}
  ],
  npmClient: 'npm',
  plugins: ['@umijs/plugins/dist/antd'],
  antd: {
    configProvider: {},
    // themes
    // dark: true,
    compact: true,
    // babel-plugin-import
    import: false,
    // less or css, default less
    style: 'less',
    // shortcut of `configProvider.theme`
    // use to configure theme token, antd v5 only
    theme: {},
    // antd <App /> valid for version 5.1.0 or higher, default: undefined
    appConfig: {},
    // Transform DayJS to MomentJS
    momentPicker: true,
    // Add StyleProvider for legacy browsers
    // styleProvider: {
    //   hashPriority: 'high',
    //   legacyTransformer: true,
    // },
  }
});

