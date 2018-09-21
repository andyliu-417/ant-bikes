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
      }
    ]
  }
];

export default menuList;
