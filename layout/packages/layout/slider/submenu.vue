<template>
  <el-submenu
    popper-class="admin-slider-menu__submenu">
    <template slot="title">
      <i :class="`${col.icon} icon-svg`"></i>
      <span slot="title">{{col.name}}</span>
    </template>
  </el-submenu>
</template>

<script>
export default {
	name: "admin-submenu",
  props:{
    col:{
      type: Object,
      default: () => {},
    },
  }
}
</script>