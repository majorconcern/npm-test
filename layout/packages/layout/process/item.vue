<template>
  <div
    v-if="visible"
    class="admin-context-menu"
    :style="{ left: style.left + 'px', top: style.top + 'px' }"
    :onContextMenu="stopDefault"
  >
    <div class="admin-context-menu-box">
      <div v-for="e of list" :key="e.value">
        <div
          :class="[
            index.includes(e._index) ? 'is-active' : '',
            e.ellipsis ? 'is-ellipsis' : '',
            e.disabled ? 'is-disabled' : '',
          ]"
        >
          <span @click="clickRow(e)">
            {{ e.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contains } from "../../../../utils";

export default {
  name: "admin-process-item",

  data() {
    return {
      visible: false,
      index: "",
      style: {
        left: 0,
        top: 0,
      },
      list: [],
    };
  },

  methods: {
    open(event, options) {
      let { pageX, pageY } = event || {};
      let { list } = options || {};

      let position = {
        left: pageX,
        top: pageY,
      };

      if (list) {
        this.list = list.map((item, i) => {
          return {
            ...item,
            _index: i,
          };
        });
      }

      this.visible = true;
      this.index = "";

      this.$nextTick(() => {
        const { clientHeight: h1, clientWidth: w1 } = document.body;
        const { clientHeight: h2, clientWidth: w2 } = this.$el.querySelector(
          ".admin-context-menu-box"
        );

        if (pageY + h2 > h1) {
          position.top = h1 - h2 - 5;
        }

        if (pageX + w2 > w1) {
          position.left = w1 - w2 - 5;
        }

        this.style = position;
      });

      this.stopDefault(event);
      this.hiddenChildren();

      return {
        close: this.close,
      };
    },

    close() {
      this.visible = false;
      this.index = "";
    },

    clickRow(e) {
      this.index = e._index;

      if (e.disabled) {
        return false;
      }

      if (e.callback) {
        return e.callback(e, () => {
          this.close();
        });
      }

      if (e.children) {
        e.showChildren = !e.showChildren;
      } else {
        this.close();
      }
    },

    hiddenChildren() {
      const deep = (list) => {
        list.forEach((e) => {
          this.$set(e, "showChildren", false);

          if (e.children) {
            deep(e.children);
          }
        });
      };

      deep(this.list);
    },

    stopDefault(e) {
      e.preventDefault();
      e.stopPropagation();
    },
  },

  mounted() {
    document.body.addEventListener("mousedown", (e) => {
      if (!contains(this.$el, e.target) && this.$el != e.target) {
        this.close();
      }
    });
    document.body.appendChild(this.$el);
    window.addEventListener("resize", this.close);
  },
};
</script>

<style lang="scss" scoped>
.admin-context-menu {
  position: absolute;
  z-index: 9999;
  &-box {
    box-shadow: 0 2px 12px #0000001a;
    width: 160px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 0;
  }
  &-box.is-append {
    right: calc(-100% - 5px);
    top: -5px;
  }
  &-box > div {
    display: flex;
    align-items: center;
    height: 35px;
    font-size: 13px;
    cursor: pointer;
    padding: 0 15px;
    color: #666;
    position: relative;
    &.is-active {
      background-color: #f7f7f7;
      color: #000;
    }
    &.is-ellipsis {
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
          color: #ccc;
        }
      }
    }
    &.is-disabled {
      span {
        color: #ccc;
      }
    }
    &:first-child {
      margin-top: 5px;
    }
    &:last-child {
      margin-bottom: 5px;
    }
    &:hover {
      background-color: #f7f7f7;
      color: #000;
    }
    span {
      height: 35px;
      line-height: 35px;
      flex: 1;
    }
    i {
      &:first-child {
        margin-right: 5px;
      }
      &:last-child {
        margin-left: 5px;
      }
    }
  }
  &__target {
    position: relative;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: #0000000d;
    }
  }
}
</style>
