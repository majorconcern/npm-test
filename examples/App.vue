<template>
  <div id="app">
    <admin-layout
      :path="'/'"
      :token="'testtoken'"
      :userInfo="{
        id: 38,
        phone: '17610110091',
        username: '郎小雪',
        userAccount: 'langxiaoxue',
        expireTime: '2023-09-20 01:53:31',
        expireTimestamp: 1695146011000,
        staffDept: {
          deptId: 26,
          deptName: '应用平台部门',
          deptMark: 'DEVELOP-PLATFORM',
          deptDesc: '南瓜电影应用平台部',
          deptStatus: '1',
          createUser: 1,
          createTime: '2022-11-17 11:33:00',
          updateTime: '2022-11-17 11:33:00',
        },
        userGroupList: [
          {
            id: 53,
            description: null,
            deptId: null,
            deptName: null,
            groupName: 'DORAS_NG_DEVELOP-PLATFORM',
            groupDisplayName: '应用平台部门-Doras',
            createTime: '2023-06-06 12:56:19',
            updateTime: '2023-06-13 17:56:17',
          },
          {
            id: 34,
            description: null,
            deptId: null,
            deptName: null,
            groupName: 'PLATFORM-TRACKING',
            groupDisplayName: '应用平台部门-埋点系统通用权限',
            createTime: '2023-03-01 14:34:19',
            updateTime: '2023-03-01 14:34:19',
          },
        ],
      }"
      :app="{
        name: '商城系统',
        conf: {
          showProcess: true,
        },
        theme: {
          color: '',
          url: '',
        },
      }"
      :browser="{
        height: 457,
        width: 1920,
        version: '537.36',
        type: 'chrome',
        plat: 'macintel',
        tag: 'pc',
        prefix: 'webkit',
        isMobile: false,
        isIOS: false,
        isPC: true,
        isMini: false,
        screen: 'full',
      }"
      :keepAlive="false"
      :menuGroup="menuGroup"
      :menuList="menuList"
      :menuCollapse="false"
      :processList="processList"
      :goPage="goPage"
    >
      首页
    </admin-layout>
  </div>
</template>

<script>
// import { menuList, menuGroup } from "./user"
// import { menuList, menuGroup } from "./epg"
import { menuList, menuGroup, processList } from "./cms";
export default {
  name: "App",
  data() {
    return {
      menuList,
      menuGroup,
      processList,
    };
  },
  methods: {
    goPage() {
      console.log(1);
    },
  },
};
</script>

<style>
#app,
body {
  padding: 0;
  margin: 0;
}
</style>
