<template>
	<div class="app-slider">
		<div class="app-slider__menu">
			<menu-slider
				:token="token"
				:app="app"
				:userInfo="userInfo"
				:menuCollapse="menuCollapse"
				:browser="browser"
				:menuList="menuList"
				:menuGroup="menuGroup"
				:path="path"
				:goPage="goPage"
			></menu-slider>
		</div>
	</div>
</template>

<script>
import MenuSlider from "../menu";

export default {
	name: "admin-slider",
	props:{
    menuCollapse:{
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
			default: () => () => {}
		},
  },
	components: {
		MenuSlider
	},
	methods: {
		jumpOtherPage() {
			window.location.href = `${process.env.VUE_APP_LOGIN_PAGE}/#/doras?token=${this.token}`;
		}
	}
};
</script>

<style lang="scss" scoped>
.app-slider {
	height: 100%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	background-color: #2f3447;

	&__menu {
		height: calc(100% - 80px);
	}
}
</style>
