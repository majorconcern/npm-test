<template>
    <div id="app">
        <admin-layout 
            :path="'/'"
            :token="'testtoken'" 
            :userInfo="{
            'id': 38,
            'phone': '17610110091',
            'username': '郎小雪',
            'userAccount': 'langxiaoxue',
            'expireTime': '2023-09-20 01:53:31',
            'expireTimestamp': 1695146011000,
            'staffDept': {
                'deptId': 26,
                'deptName': '应用平台部门',
                'deptMark': 'DEVELOP-PLATFORM',
                'deptDesc': '南瓜电影应用平台部',
                'deptStatus': '1',
                'createUser': 1,
                'createTime': '2022-11-17 11:33:00',
                'updateTime': '2022-11-17 11:33:00'
            },
            'userGroupList': [{
                'id': 53,
                'description': null,
                'deptId': null,
                'deptName': null,
                'groupName': 'DORAS_NG_DEVELOP-PLATFORM',
                'groupDisplayName': '应用平台部门-Doras',
                'createTime': '2023-06-06 12:56:19',
                'updateTime': '2023-06-13 17:56:17'
            }, {
                'id': 34,
                'description': null,
                'deptId': null,
                'deptName': null,
                'groupName': 'PLATFORM-TRACKING',
                'groupDisplayName': '应用平台部门-埋点系统通用权限',
                'createTime': '2023-03-01 14:34:19',
                'updateTime': '2023-03-01 14:34:19'
            }]
            }" 
            :app="{
                'name': '商城系统',
                'conf': {
                    'showProcess': true
                },
                'theme': {
                    'color': '',
                    'url': ''
                }
            }" 
            :browser="{
                'height': 457,
                'width': 1920,
                'version': '537.36',
                'type': 'chrome',
                'plat': 'macintel',
                'tag': 'pc',
                'prefix': 'webkit',
                'isMobile': false,
                'isIOS': false,
                'isPC': true,
                'isMini': false,
                'screen': 'full',
            }" 
            :keepAlive="false" 
            :menuGroup="[
                {
                    'moduleName': '商品管理',
                    'id': 732,
                    'parentId': null,
                    'path': '/mall/sku',
                    'viewPath': 'views/sku/index.vue',
                    'type': 1,
                    'name': '商品管理',
                    'icon': 'iconfont icon-kongzhizhongxin',
                    'isShow': true,
                    'meta': {
                        'label': '商品管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '渠道管理',
                    'id': 733,
                    'parentId': null,
                    'path': '/mall/channel',
                    'viewPath': 'views/channel/index.vue',
                    'type': 1,
                    'name': '渠道管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '渠道管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '订单管理',
                    'id': 735,
                    'parentId': null,
                    'path': '/mall/order',
                    'viewPath': 'views/order/index.vue',
                    'type': 1,
                    'name': '订单管理',
                    'icon': 'iconfont icon-kongzhizhongxin',
                    'isShow': true,
                    'meta': {
                        'label': '订单管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '布局管理',
                    'id': 736,
                    'parentId': null,
                    'path': '/mall/layout',
                    'viewPath': 'views/layout/index.vue',
                    'type': 1,
                    'name': '布局管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '布局管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '评论管理',
                    'id': 737,
                    'parentId': null,
                    'path': '/mall/comment',
                    'viewPath': 'views/comment/index.vue',
                    'type': 1,
                    'name': '评论管理',
                    'icon': 'iconfont icon-kongzhizhongxin',
                    'isShow': true,
                    'meta': {
                        'label': '评论管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '活动管理',
                    'id': 738,
                    'parentId': null,
                    'path': '/mall/activity',
                    'viewPath': 'views/activity/index.vue',
                    'type': 1,
                    'name': '活动管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '活动管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '券管理',
                    'id': 739,
                    'parentId': null,
                    'path': '/mall/voucher',
                    'viewPath': 'views/voucher/index.vue',
                    'type': 1,
                    'name': '券管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '券管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '发票管理',
                    'id': 740,
                    'parentId': null,
                    'path': '/mall/invoice',
                    'viewPath': 'views/invoice/index.vue',
                    'type': 1,
                    'name': '发票管理',
                    'icon': 'iconfont icon-kongzhizhongxin',
                    'isShow': true,
                    'meta': {
                        'label': '发票管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '影片配置',
                    'id': 741,
                    'parentId': null,
                    'path': '/mall/movie',
                    'viewPath': 'views/movie/index.vue',
                    'type': 1,
                    'name': '影片配置',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '影片配置',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '图标管理',
                    'id': 742,
                    'parentId': null,
                    'path': '/mall/icon',
                    'viewPath': 'views/icon.vue',
                    'type': 1,
                    'name': '图标管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '图标管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '卡券发放',
                    'id': 745,
                    'parentId': null,
                    'path': '/mall/assign',
                    'viewPath': 'views/coupons/assign.vue',
                    'type': 1,
                    'name': '卡券发放',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '卡券发放',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '卡券统计',
                    'id': 746,
                    'parentId': null,
                    'path': '/mall/coupons',
                    'viewPath': 'views/coupons/index.vue',
                    'type': 1,
                    'name': '卡券统计',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '卡券统计',
                        'keepAlive': true
                    }
                }
            ]"
            :menuCollapse="false"
            :menuList="[
                {
                    'moduleName': '商品管理',
                    'id': 732,
                    'parentId': null,
                    'path': '/mall/sku',
                    'viewPath': 'views/sku/index.vue',
                    'type': 1,
                    'name': '商品管理',
                    'icon': 'iconfont icon-kongzhizhongxin',
                    'isShow': true,
                    'meta': {
                        'label': '商品管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '渠道管理',
                    'id': 733,
                    'parentId': null,
                    'path': '/mall/channel',
                    'viewPath': 'views/channel/index.vue',
                    'type': 1,
                    'name': '渠道管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '渠道管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '订单管理',
                    'id': 735,
                    'parentId': null,
                    'path': '/mall/order',
                    'viewPath': 'views/order/index.vue',
                    'type': 1,
                    'name': '订单管理',
                    'icon': 'iconfont icon-kongzhizhongxin',
                    'isShow': true,
                    'meta': {
                        'label': '订单管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '布局管理',
                    'id': 736,
                    'parentId': null,
                    'path': '/mall/layout',
                    'viewPath': 'views/layout/index.vue',
                    'type': 1,
                    'name': '布局管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '布局管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '评论管理',
                    'id': 737,
                    'parentId': null,
                    'path': '/mall/comment',
                    'viewPath': 'views/comment/index.vue',
                    'type': 1,
                    'name': '评论管理',
                    'icon': 'iconfont icon-kongzhizhongxin',
                    'isShow': true,
                    'meta': {
                        'label': '评论管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '活动管理',
                    'id': 738,
                    'parentId': null,
                    'path': '/mall/activity',
                    'viewPath': 'views/activity/index.vue',
                    'type': 1,
                    'name': '活动管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '活动管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '券管理',
                    'id': 739,
                    'parentId': null,
                    'path': '/mall/voucher',
                    'viewPath': 'views/voucher/index.vue',
                    'type': 1,
                    'name': '券管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '券管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '发票管理',
                    'id': 740,
                    'parentId': null,
                    'path': '/mall/invoice',
                    'viewPath': 'views/invoice/index.vue',
                    'type': 1,
                    'name': '发票管理',
                    'icon': 'iconfont icon-kongzhizhongxin',
                    'isShow': true,
                    'meta': {
                        'label': '发票管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '影片配置',
                    'id': 741,
                    'parentId': null,
                    'path': '/mall/movie',
                    'viewPath': 'views/movie/index.vue',
                    'type': 1,
                    'name': '影片配置',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '影片配置',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '图标管理',
                    'id': 742,
                    'parentId': null,
                    'path': '/mall/icon',
                    'viewPath': 'views/icon.vue',
                    'type': 1,
                    'name': '图标管理',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '图标管理',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '卡券发放',
                    'id': 745,
                    'parentId': null,
                    'path': '/mall/assign',
                    'viewPath': 'views/coupons/assign.vue',
                    'type': 1,
                    'name': '卡券发放',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '卡券发放',
                        'keepAlive': true
                    }
                },
                {
                    'moduleName': '卡券统计',
                    'id': 746,
                    'parentId': null,
                    'path': '/mall/coupons',
                    'viewPath': 'views/coupons/index.vue',
                    'type': 1,
                    'name': '卡券统计',
                    'icon': 'iconfont icon-bumen',
                    'isShow': true,
                    'meta': {
                        'label': '卡券统计',
                        'keepAlive': true
                    }
                }
            ]">
        首页
        </admin-layout>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    #app,
    body {
        padding: 0;
        margin: 0;
    }
</style>