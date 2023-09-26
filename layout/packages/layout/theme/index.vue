<template>
  <div class="doras-theme">
    <li @click="open">
      <icon-svg :size="18" name="icon-theme"></icon-svg>
    </li>

    <!-- 系统设置 -->
    <el-drawer title="系统设置" :visible.sync="drawer.visible" size="300px">
      <div class="doras-theme__container">
        <div class="doras-theme__color is-card">
          <p>主题</p>

          <ul>
            <el-tooltip
              v-for="(item, name) in themes"
              :key="name"
              :content="item.label"
              placement="top"
            >
              <li
                :style="{
                  backgroundColor: item.color,
                }"
                @click="setTheme(item)"
              >
                <i
                  class="el-icon-check"
                  v-show="item.color == app.theme.color"
                ></i>
              </li>
            </el-tooltip>
          </ul>
        </div>

        <div class="doras-theme__switch is-card">
          <p>内容区域</p>

          <ul>
            <li>
              <span>显示页面进程栏</span>
              <el-switch v-model="app.conf.showProcess"></el-switch>
            </li>
          </ul>
        </div>

        <div class="doras-theme__append">
          <slot></slot>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import IconSvg from "../../icon-svg";

export default {
  name: "admin-theme",

  props: {
    app: {
      type: Object,
      default: () => {},
    },
    setTheme: {
      type: Function,
      default: () => () => {},
    },
    watchApp: {
      type: Function,
      default: () => () => {},
    },
  },

  components: {
    IconSvg,
  },

  data() {
    return {
      drawer: {
        visible: false,
      },
      themes: [
        {
          label: "钴蓝",
          name: "blue",
          color: "#4165d7",
        },
        {
          label: "极黑",
          name: "black",
          color: "#2f3447",
        },
        {
          label: "果绿",
          name: "green",
          color: "#51C21A",
        },
        {
          label: "酱紫",
          name: "purple",
          color: "#d0378d",
        },
      ],
    };
  },

  watch: {
    app: {
      deep: true,
      handler() {
        this.watchApp();
      },
    },
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
