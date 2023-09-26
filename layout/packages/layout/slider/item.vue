<template>
  <el-menu-item :index="col.path" :key="col.path">
    <i :class="`${col.icon} icon-svg`"></i>
    <span slot="title">{{ col.name }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "admin-menu-item",
  props: {
    col: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    // submenuList() {
    // 	return this.menuList.filter(e => e.type == 0)
    // },
    // menuItemList() {
    // 	return this.menuList.filter(e => e.type == 1)
    // }
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
