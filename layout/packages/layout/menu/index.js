import "./index.scss";

export default {
	name: "doras-menu-slider",

	props:{
    menuCollapse: {
      type: Boolean,
      default: false,
    },
		app: {
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
		menuList: {
			type: Array,
      default: () => [],
		},
		menuGroup: {
			type: Array,
      default: () => [],
		},
		path: {
			type: String,
      default: () => "/",
		},
		goPage: {
			type: Function,
			default: () => () => {}
		},
  },

	data() {
		return {
			visible: true
		};
	},

	computed: {
		_menuGroup() {
			return this.menuGroup.filter(e => e.isShow);
		}
	},

	watch: {
		menuList() {
			this.refresh();
		}
	},

	methods: {
		// ...mapMutations(["SET_MENU_LIST"]),

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
		}
	},

	render() {
		const fn = list => {
			return list
				.filter(e => e.isShow)
				.map(e => {
					let html = null;

					if (e.type == 0) {
						html = (
							<el-submenu
								popper-class="cl-slider-menu__submenu"
								index={String(e.id)}
								key={e.id}>
								<template slot="title">
									<i class={`${e.icon} icon-svg`}></i>
									<span slot="title">{e.name}</span>
								</template>
								{fn(e.children)}
							</el-submenu>
						);
					} else {
						html = (
							<el-menu-item index={e.path} key={e.path}>
								<i class={`${e.icon} icon-svg`}></i>
								<span slot="title">{e.name}</span>
							</el-menu-item>
						);
					}

					return html;
				});
		};

		let el = fn(this.menuList);

		return (
			this.visible && (
				<div class="cl-slider-menu">
					<el-menu
						default-active={this.path}
						background-color="transparent"
						collapse-transition={false}
						unique-opened={true}
						collapse={this.browser.isMini ? false : this.menuCollapse}
						on-select={this.toView}>
						{el}
					</el-menu>
				</div>
			)
		);
	}
};
