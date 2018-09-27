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
        key: "/admin/ui/buttons"
      },
      {
        title: "弹框",
        key: "/admin/ui/modals"
      },
      {
        title: "Loading",
        key: "/admin/ui/loadings"
      },
      {
        title: "通知提醒",
        key: "/admin/ui/notification"
      },
      {
        title: "全局Message",
        key: "/admin/ui/messages"
      },
      {
        title: "Tab页签",
        key: "/admin/ui/tabs"
      },
      {
        title: "图片画廊",
        key: "/admin/ui/gallery"
      },
      {
        title: "轮播图",
        key: "/admin/ui/carousel"
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
