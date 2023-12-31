<template>
  <div class="app-process">
    <div class="app-process__left hidden-xs-only" @click="toScroll(true)">
      <i class="el-icon-arrow-left"></i>
    </div>

    <div class="app-process__scroller" ref="scroller">
      <div
        class="app-process__item"
        v-for="(item, index) in processList"
        :key="index"
        :ref="`item-${index}`"
        :class="{ active: item.active }"
        :data-index="index"
        @click="onTap(item, index)"
        @contextmenu.stop.prevent="openCM($event, item)"
      >
        <span>{{ item.label }}</span>

        <i
          class="el-icon-close"
          v-if="index > 0"
          @click.stop="onDel(index)"
        ></i>
      </div>
    </div>

    <div class="app-process__right hidden-xs-only" @click="toScroll(false)">
      <i class="el-icon-arrow-right"></i>
    </div>

    <context-menu-item ref="contextMenuRef" />
  </div>
</template>

<script>
import { last } from "../../../../utils/index";
import ContextMenuItem from "./item.vue";

export default {
  name: "admin-process",
  props: {
    processList: {
      type: Array,
      default: () => [],
    },
    path: {
      type: String,
      default: () => "/",
    },
    goPage: {
      type: Function,
      default: () => () => {},
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

  watch: {
    path(val) {
      this.adScroll(this.processList.findIndex((e) => e.value === val) || 0);
    },
  },

  components: {
    ContextMenuItem,
  },

  methods: {
    onTap({ value }, index) {
      this.adScroll(index);
      this.goPage(value);
    },

    onDel(index) {
      this.delProcess(index);
      this.toPath();
    },

    toPath() {
      const active = this.processList.find((e) => e.active);

      if (!active) {
        const next = last(this.processList);
        this.goPage(next ? next.value : "/");
      }
    },

    adScroll(index) {
      if (index < 0) {
        index = 0;
      }

      const el = this.$refs[`item-${index}`][0];

      if (el) {
        this.scrollTo(
          el.offsetLeft + el.clientWidth - this.$refs["scroller"].clientWidth
        );
      }
    },

    toScroll(f) {
      this.scrollTo(this.$refs["scroller"].scrollLeft + (f ? -100 : 100));
    },

    scrollTo(left) {
      this.$refs["scroller"].scrollTo({
        left,
        behavior: "smooth",
      });
    },

    openCM(e, item) {
      this.$refs.contextMenuRef.open(e, {
        list: [
          {
            label: "关闭当前",
            hidden: this.path !== item.value,
            callback: (_, done) => {
              this.onDel(
                this.processList.findIndex((e) => e.value == item.value)
              );
              done();
              this.toPath();
            },
          },
          {
            label: "关闭其他",
            callback: (_, done) => {
              this.setProcess(
                this.processList.filter(
                  (e) => e.value == item.value || e.value == "/"
                )
              );
              done();
              this.toPath();
            },
          },
          {
            label: "关闭所有",
            callback: (_, done) => {
              this.setProcess(this.processList.filter((e) => e.value == "/"));
              done();
              this.toPath();
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-process {
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  &__left,
  &__right {
    background-color: #fff;
    height: 30px;
    line-height: 30px;
    padding: 0 2px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
  &__left {
    margin-right: 10px;
  }
  &__right {
    margin-left: 10px;
  }
  &__scroller {
    width: 100%;
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__item {
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: #fff;
    font-size: 12px;
    margin-right: 10px;
    color: #909399;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    i {
      font-size: 14px;
      width: 0;
      overflow: hidden;
      transition: all 0.3s;
      &:hover {
        color: #fff;
        background-color: red;
      }
    }
    &:hover {
      .el-icon-close {
        width: 14px;
        margin-left: 5px;
      }
    }
    &.active {
      span {
        color: red;
      }
      i {
        width: auto;
        margin-left: 5px;
      }
      &:before {
        background-color: red;
      }
    }
  }
}
</style>
