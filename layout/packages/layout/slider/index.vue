<template>
  <div class="app-slider">
    <div class="app-slider__menu">
      <div v-if="visible" class="admin-slider-menu">
        <el-menu
          :default-active="path"
          background-color="transparent"
          :collapse-transition="false"
          :unique-opened="true"
          :collapse="browser.isMini ? false : menuCollapse"
          @select=="toView"
        >
          <div v-for="item of _menuList" :key="String(item.id)">
            <admin-submenu v-if="item.type == 0" :col="item"></admin-submenu>
            <adminm-menu-item v-else :col="item"></adminm-menu-item>
          </div>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { compose } from "../../../../node_modules111/element-ui/packages/table/src/util";
import AdminmMenuItem from "./item.vue";
import AdminSubmenu from "./submenu.vue";

export default {
  name: "admin-slider",
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
    goPage: {
      type: Function,
      default: () => () => {},
    },
  },
  components: {
    AdminmMenuItem,
    AdminSubmenu,
  },
  computed: {
    _menuGroup() {
      return this.menuGroup.filter((e) => e.isShow);
    },
    _menuList() {
      return this.menuList.filter((e) => e.isShow);
    },
    submenuList() {
      return this.menuList.filter((e) => e.type == 0);
    },
    menuItemList() {
      return this.menuList.filter((e) => e.type == 1);
    },
  },
  watch: {
    menuList() {
      this.refresh();
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    jumpOtherPage() {
      window.location.href = `${process.env.VUE_APP_LOGIN_PAGE}/#/doras?token=${this.token}`;
    },
    toView(url) {
      console.log("toView=>", url, this.path, this.goPage);
      if (url != this.path) {
        this.goPage(url);
      }
    },
    refresh() {
      this.visible = false;

      setTimeout(() => {
        this.visible = true;
      }, 0);
    },
    checkMenu() {
      if (this.menuList.length) {
        return this.menuList;
      } else {
        if (this.path == "/404") {
          return this.menuList;
        }
        this._menuGroup.forEach((element) => {
          if (element.path == this.path) {
            return element.children;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
.app-slider {
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: #2f3447;

  &__menu {
    height: calc(100% - 80px);
  }
}

.admin-slider-menu {
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .el-menu {
    border-right: 0;

    .el-submenu__title,
    &-item {
      &.is-active,
      &:hover {
        background-color: red !important;
        color: #fff;
      }
    }

    .el-submenu__title,
    &-item,
    &__title {
      color: #eee;
      letter-spacing: 0.5px;
      height: 50px;
      line-height: 50px;

      .icon-svg {
        font-size: 16px;
        margin: 0 15px 0 5px;
      }

      span {
        font-size: 12px;
        letter-spacing: 1px;
        display: inline-block;
      }
    }

    &--collapse {
      .el-submenu__title {
        .icon-svg {
          margin-left: 2px;
          font-size: 19px;
        }
      }
    }
  }
}
</style>
