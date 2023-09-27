<template>
  <div class="page-layout" :class="{ collapse: menuCollapse }">
    <!-- 遮罩层 -->
    <div class="page-layout__mask" @click="collapseMenu(true)"></div>

    <div class="page-layout__top">
      <admin-topbar
        :token="token"
        :app="app"
        :userInfo="userInfo"
        :menuCollapse="menuCollapse"
        :browser="browser"
        :appVersion="appVersion"
        :collapse="collapse"
        :goPage="goPage"
        :userLogout="userLogout"
        :collapseMenu="collapseMenu"
        :watchApp="watchApp"
        :setTheme="setTheme"
      />
    </div>

    <div class="page-layout__bottom">
      <div class="page-layout__bottom__left">
        <!-- 侧栏 -->
        <admin-slider
          :token="token"
          :app="app"
          :userInfo="userInfo"
          :menuCollapse="menuCollapse"
          :browser="browser"
          :menuList="menuList"
          :menuGroup="menuGroup"
          :path="path"
          :goPage="goPage"
        ></admin-slider>
      </div>

      <div class="page-layout__bottom__right">
        <!-- 页面进程 -->
        <div
          class="page-layout__bottom__process"
          v-if="app && app.conf.showProcess"
        >
          <admin-process
            :processList="processList"
            :goPage="goPage"
            :addProcess="addProcess"
            :delProcess="delProcess"
            :setProcess="setProcess"
          />
        </div>

        <!-- 页面视图 -->
        <div class="page-layout__container">
          <div
            class="page-layout__view"
            :class="{ showProcess: app && app.conf.showProcess }"
            style="overflow-y: scroll"
            :style="waterMarkStyle"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminTopbar from "./topbar";
import AdminSlider from "./slider";
import AdminProcess from "./process";
import { addWaterMark } from "../../../utils/watermark";
import { isEmpty } from "../../../utils";

export default {
  name: "admin-layout",

  props: {
    menuCollapse: {
      type: Boolean,
      default: false,
    },
    app: {
      type: Object,
      default: () => {},
    },
    userInfo: {
      type: Object,
      default: () => {},
    },
    browser: {
      type: Object,
      default: () => {},
    },
    token: {
      type: String,
      default: () => "",
    },
    path: {
      type: String,
      default: () => "",
    },
    keepAlive: {
      type: Boolean,
      default: () => false,
    },
    menuList: {
      type: Array,
      default: () => [],
    },
    menuGroup: {
      type: Array,
      default: () => [],
    },
    processList: {
      type: Array,
      default: () => [],
    },
    collapse: {
      type: Function,
      default: () => () => {},
    },
    collapseMenu: {
      type: Function,
      default: () => () => {},
    },
    goPage: {
      type: Function,
      default: () => () => {},
    },
    userLogout: {
      type: Function,
      default: () => () => {},
    },
    watchApp: {
      type: Function,
      default: () => () => {},
    },
    setTheme: {
      type: Function,
      default: () => () => {},
    },
    appVersion: {
      type: String,
      default: () => "",
    },
    addProcess: {
      type: Function,
      default: () => () => {},
    },
    delProcess: {
      type: Function,
      default: () => () => {},
    },
    setProcess: {
      type: Function,
      default: () => () => {},
    },
  },

  components: {
    AdminTopbar,
    AdminProcess,
    AdminSlider,
  },

  data() {
    return {
      waterMarkStyle: null,
      version: "1.0.0",
    };
  },

  computed: {
    isKeepAlive() {
      return isEmpty(this.keepAlive) ? true : this.keepAlive;
    },
  },

  mounted() {
    this.waterMarkStyle = addWaterMark(`${this.userInfo.username}		商城系统`);
  },
};
</script>

<style lang="scss" scoped>
.page-layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #f7f7f7;

  &__top {
    width: 100%;
    height: 50px;
    overflow: hidden;
  }

  &__bottom {
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
    background-color: #f7f7f7;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    &__left {
      overflow: hidden;
      height: 100%;
      width: 255px;
      transition: left 0.2s;
    }

    &__right {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: calc(100% - 255px);
    }

    // &__topbar {
    // 	margin-bottom: 10px;
    // }

    &__process {
      margin: 10px 0;
      padding: 0 10px;
    }
  }

  &__container {
    width: calc(100% - 10px);
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 3px;
  }

  &__mask {
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    z-index: 999;
  }

  &__view {
    height: calc(100vh - 50px);
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
    border-radius: 3px;
    background-color: #fff;
    margin: 10px 0 0 10px;
    &.showProcess {
      height: calc(100vh - 100px);
      margin-top: 0;
    }

    & > div {
      height: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .page-layout__bottom__left {
      position: absolute;
      left: 0;
      z-index: 9999;
      transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
        box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    }

    .page-layout__bottom__right {
      width: 100%;
    }

    &.collapse {
      .page-layout__bottom__left {
        transform: translateX(-100%);
      }

      .page-layout__mask {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .page-layout__bottom__left,
    .page-layout__bottom__right {
      transition: width 0.2s;
    }

    .page-layout__mask {
      display: none;
    }

    &.collapse {
      .page-layout__bottom__left {
        width: 64px;
      }

      .page-layout__bottom__right {
        width: calc(100% - 64px);
      }
    }
  }
}
</style>
