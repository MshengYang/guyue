import VueRouter from "vue-router";

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login.vue"),
  },
  {
    path: "/home",
    name: "content",
    component: () => import("../pages/container.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        meta: { title: "首页" },
        component: () => import("../pages/homepage.vue"),
      },
      {
        path: "/topUp",
        name: "topUp",
        meta: { title: "充值管理" },
        component: () => import("../pages/topUp.vue"),
      },
      {
        path: "/client",
        name: "client",
        meta: {
          title: "客户管理",
        },
        component: () => import("../pages/client.vue"),
      },
      {
        path: "/merchant",
        meta: {
          title: "商家管理",
        },
        name: "merchant",
        component: () => import("../pages/merchant.vue"),
      },
      {
        path: "/withdrawDeposit",
        name: "withdrawDeposit",
        meta: {
          title: "提现管理",
        },
        component: () => import("../pages/withdrawDeposit.vue"),
      },
    ],
  },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: "history",
  routes, // (缩写) 相当于 routes: routes
});

export default router;
