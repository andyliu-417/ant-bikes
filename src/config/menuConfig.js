const menuList = [
  {
    title: "首页",
    key: "admin/home",
    icon: "pie-chart"
  },
  {
    title: "UI",
    key: "admin/ui",
    icon: "mail",
    children: [
      {
        title: "按钮",
        key: "/ui/buttons"
      },
      {
        title: "弹框",
        key: "/ui/modals"
      },
      {
        title: "Loading",
        key: "/ui/loadings"
      },
      {
        title: "通知提醒",
        key: "/ui/notification"
      },
      {
        title: "全局Message",
        key: "/ui/messages"
      },
      {
        title: "Tab页签",
        key: "/ui/tabs"
      },
      {
        title: "图片画廊",
        key: "/ui/gallery"
      },
      {
        title: "轮播图",
        key: "/ui/carousel"
      }
    ]
  },
  {
    title: "表单",
    key: "/form",
    icon: "form",
    children: [
      {
        title: "登录",
        key: "/form/login"
      },
      {
        title: "注册",
        key: "/form/reg"
      }
    ]
  }
];

export default menuList;
