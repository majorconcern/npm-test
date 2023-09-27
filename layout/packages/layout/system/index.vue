<template>
  <div class="doras-system">
    <div
      class="doras-system__main doras-system-collapse-transition"
      :class="{ collapse: menuCollapse || browser.isMini }"
    >
      <div class="doras-system__main__logo">
        <div class="doras-system__main__logo__set">
          <i class="el-icon-menu" @click="open"></i>
        </div>
        <span
          class="doras-system__main__logo__title"
          v-if="!menuCollapse && !browser.isMini"
          >{{ app.name }}</span
        >
      </div>
    </div>

    <!-- 系统设置 -->
    <div v-if="drawer.visible" class="doras-system-drawer el-drawer__open">
      <div class="model el-drawer trl">
        <span @click="drawer.visible = false">关闭</span>
        <div class="content"></div>
      </div>
    </div>
    <!-- <el-drawer
			title="系统列表"
			:visible.sync="drawer.visible"
			direction="ltr"
			size="60%"
			:append-to-body="true"
      :modal-append-to-body="true"
			custom-class="doras-system-drawer"
		>
			<div style="padding-left: 20px">token: {{ token }}</div>
		</el-drawer> -->
  </div>
</template>

<script>
export default {
  name: "admin-system",

  props: {
    token: {
      type: String,
      default: () => "",
    },
    app: {
      type: Object,
      default: () => {},
    },
    browser: {
      type: Object,
      default: () => {},
    },
    menuCollapse: {
      type: Boolean,
      default: () => false,
    },
  },

  data() {
    return {
      drawer: {
        visible: false,
      },
    };
  },

  methods: {
    open() {
      this.drawer.visible = true;
    },

    close() {
      this.drawer.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.doras-system {
  &__main {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    height: 50px;
    width: 255px;
    background-color: #fff;
    // background-color: #2f3447;
    &.collapse {
      width: 64px;
    }
    &__logo {
      height: 50px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      &__set {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 50px;
        background-color: #ff6a00;
        i {
          font-size: 26px;
          color: #3c3c3c;
          cursor: pointer;
        }
      }
      &__title {
        color: #3c3c3c;
        font-weight: bold;
        font-size: 22px;
        margin-left: 20px;
        font-family: inherit;
        white-space: nowrap;
      }
    }
  }

  >>> .el-drawer {
    &__header {
      margin-bottom: 20px;
    }

    &__body {
      height: calc(100% - 63px);
    }
  }

  &__container {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: rgba(144, 147, 153, 0.3);
    }
  }
}

.doras-system-collapse-transition {
  // -webkit-transition: .3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out;
  transition: 0.2s width ease-in-out, 0.2s padding-left ease-in-out,
    0.2s padding-right ease-in-out;
}

>>> .doras-system-drawer {
  // background-color: #2f3447;
}
.doras-system-drawer {
  width: 100%;
  height: calc(100vh - 50px);
  position: fixed;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  .model {
    width: 60%;
    height: 100%;
    position: fixed;
    top: 50px;
    background-color: #fff;
    z-index: 99999;
    .content {
    }
  }
}
</style>
