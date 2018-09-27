import Home from '../pages/Home';
import Button from '../pages/Button';

const menuList = [
  {
    title: "首页",
    key: "/admin",
    icon: "pie-chart",
    component: Home
  },
  {
    title: "UI",
    key: "admin/ui",
    icon: "mail",
    children: [
      {
        title: "按钮",
        key: "/admin/buttons",
        component: Button
      },
      {
        title: "弹框",
        key: "/admin/modals"
      },
      {
        title: "Loading",
        key: "/admin/loadings"
      },
      {
        title: "通知提醒",
        key: "/admin/notification"
      },
      {
        title: "全局Message",
        key: "/admin/messages"
      },
      {
        title: "Tab页签",
        key: "/admin/tabs"
      },
      {
        title: "图片画廊",
        key: "/admin/gallery"
      },
      {
        title: "轮播图",
        key: "/admin/carousel"
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
