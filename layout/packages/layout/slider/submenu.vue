<template>
  <el-submenu
    popper-class="admin-slider-menu__submenu"
    :index="String(col.id)"
    :key="String(col.id)"
  >
    <template slot="title">
      <i :class="`${col.icon} icon-svg`"></i>
      <span slot="title">{{ col.name }}</span>
    </template>
    <template v-if="col.children">
      <div v-for="item of col.children" :key="String(item.id)">
        <admin-submenu v-if="item.type == 0" :col="item"></admin-submenu>
        <adminm-menu-item v-else :col="item"></adminm-menu-item>
      </div>
    </template>
  </el-submenu>
</template>

<script>
import AdminmMenuItem from "./item.vue";

export default {
  name: "admin-submenu",
  props: {
    col: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    AdminmMenuItem,
  },
};
</script>

<style lang="scss" scoped>
.admin-slider-menu__submenu {
  background-color: #fff;

  &.el-menu {
    &--vertical {
      .el-submenu {
        &__title {
          display: flex;
          align-items: center;

          .icon-svg {
            font-size: 18px;
            margin-right: 10px;
          }
        }
      }

      .el-menu-item {
        display: flex;
        align-items: center;

        .icon-svg {
          font-size: 18px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
