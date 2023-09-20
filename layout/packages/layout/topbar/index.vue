<template>
	<div class="doras-topbar">
		<admin-system 
			:token="token" 
			:app="app" 
			:browser="browser" 
			:menuCollapse="menuCollapse">
		</admin-system>

		<div class="doras-topbar__collapse" @click="collapse">
			<i
				:class="[menuCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
				@click="collapseMenu(menuCollapse)"
			></i>
		</div>

		<div class="flex1"></div>

		<!-- 工具栏 -->
		<ul class="doras-topbar__tools">
			<!-- 主题 -->
			<li>
				<admin-theme
					:app="app"
					:watchApp="watchApp"
					:setTheme="setTheme">
				</admin-theme>
			</li>
		</ul>

		<!-- 用户信息 -->
		<div class="doras-topbar__user" v-if="userInfo">
			<el-dropdown trigger="click" @command="onCommand">
				<span class="el-dropdown-link">
					<span class="name">{{ userInfo.username || '未命名' }}</span>
					<img class="avatar" :src="userInfo.head_img || 'https://s.image.vcinema.com.cn/common/img/pumpkin.ico'" alt />
				</span>

				<el-dropdown-menu slot="dropdown" class="popper-dropdown-menu-user">
					<el-dropdown-item command="my">个人中心</el-dropdown-item>
					<el-dropdown-item command="exit">退出</el-dropdown-item>

					<div class="version">
						<span>{{ appVersion }}</span>
					</div>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
import AdminSystem from "../system";
import AdminTheme from "../theme";

export default {
	name: "admin-topbar",
	props: {
		token: {
			type: String,
			default: () => ""
		},
		app: {
			type: Object,
			default: () => {}
		},
		userInfo: {
			type: Object,
			default: () => {}
		},
		browser: {
			type: Object,
			default: () => {}
		},
		menuCollapse: {
			type: Boolean,
			default: () => false
		},
		appVersion: {
			type: String,
			default: () => ""
		},
		collapse: {
			type: Function,
			default: () => () => {}
		},
		collapseMenu: {
			type: Function,
			default: () => () => {}
		},
		goPage: {
			type: Function,
			default: () => () => {}
		},
		userLogout: {
			type: Function,
			default: () => () => {}
		},
		watchApp: {
			type: Function,
			default: () => () => {}
		},
		setTheme: {
			type: Function,
			default: () => () => {}
		}
	},

	data() {
		return {};
	},

	components: {
		AdminSystem,
		AdminTheme
	},

	methods: {
		onCommand(name) {
			switch (name) {
				case "my":
					this.goPage("/my/info");
					break;
				case "exit":
					this.userLogout();
					break;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.popper-dropdown-menu-user {
	width: 120px;
	.version {
		line-height: 24px;
		padding: 0 10px;
		font-size: 14px;
		font-weight: 500;
		margin-top: 5px;
	}
}

.doras-topbar {
	display: flex;
	align-items: center;
	height: 50px;
	background-color: #ffffff;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);

	&__collapse {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 40px;
		cursor: pointer;

		i {
			font-size: 22px;
			color: #666;
		}
	}

	.flex1 {
		flex: 1;
	}

	&__tools {
		display: flex;
		margin-right: 20px;

		li {
			list-style: none;
			height: 45px;
			width: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			i {
				font-size: 18px;

				&:hover {
					opacity: 0.8;
				}
			}
		}
	}

	&__user {
		margin-right: 10px;
		cursor: pointer;

		.el-dropdown-link {
			display: flex;
			align-items: center;
		}

		.avatar {
			height: 32px;
			width: 32px;
			border-radius: 32px;
		}

		.name {
			white-space: nowrap;
			margin-right: 15px;
		}

		.el-icon-arrow-down {
			margin-left: 10px;
		}
	}
}
</style>
