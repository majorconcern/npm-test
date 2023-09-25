<template>
	<div class="app-slider">
		<div class="app-slider__menu">
			<!-- <div v-if="visible">
				<el-menu
					:default-active="path"
					background-color="transparent"
					:collapse-transition="false"
					:unique-opened="true"
					:collapse="browser.isMini ? false : menuCollapse"
					:on-select="toView">
					<el-menu-item v-for="(item, index) of _menuList" :index="item.path" :key="index">
						<i :class="`${item.icon} icon-svg`"></i>
						<span slot="title">{{item.name}}</span>
						<template v-if="item.type == 0">
							<submenu :col="item"></submenu>
						</template>
						<el-menu-item v-else :index="item.path" :key="item.path">
							<i :class="`${item.icon} icon-svg`"></i>
							<span slot="title">{{item.name}}</span>
						</el-menu-item>
					</el-menu-item>
				</el-menu>
			</div> -->
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
// import MenuSlider from "./slider";
import MenuSlider from "../menu";
// import Submenu from "./submenu.vue";

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
		MenuSlider,
		// Submenu,
	},
	computed: {
		_menuGroup() {
			return this.menuGroup.filter(e => e.isShow);
		},
		_menuList() {
			return this.menuList.filter(e => e.isShow);
		}
	},
	watch: {
		menuList() {
			this.refresh();
		}
	},
	data() {
		return {
			visible: true
		};
	},
	methods: {
		jumpOtherPage() {
			window.location.href = `${process.env.VUE_APP_LOGIN_PAGE}/#/doras?token=${this.token}`;
		},
		toView(url) {
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
				this._menuGroup.forEach(element => {
					if (element.path == this.path) {
						return element.children;
					}
				});
			}
		},

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
