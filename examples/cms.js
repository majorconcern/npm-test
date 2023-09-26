export const menuList = [{
        "moduleName": "影片计划管理",
        "id": 502,
        "parentId": null,
        "path": "/plan/online",
        "viewPath": "/",
        "type": 0,
        "name": "影片计划管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片计划管理",
            "keepAlive": false
        },
        "children": [{
            "moduleName": "上线计划",
            "id": 503,
            "parentId": 502,
            "path": "/plan/online",
            "viewPath": "views/plan/online/index.vue",
            "type": 1,
            "name": "上线计划",
            "icon": "iconfont icon-bumen",
            "isShow": true,
            "meta": {
                "label": "上线计划",
                "keepAlive": false
            }
        }]
    },
    {
        "moduleName": "影片策划管理",
        "id": 895,
        "parentId": null,
        "path": "/plan/catalog",
        "viewPath": "views/plan/index.vue",
        "type": 0,
        "name": "影片策划管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片策划管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "编目策划",
                "id": 896,
                "parentId": 895,
                "path": "/plan/movie",
                "viewPath": "views/plan/movie.vue",
                "type": 1,
                "name": "编目策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "编目策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "标签策划",
                "id": 981,
                "parentId": 895,
                "path": "/plan/tag",
                "viewPath": "views/plan/tag.vue",
                "type": 1,
                "name": "标签策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "标签策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "图片策划",
                "id": 982,
                "parentId": 895,
                "path": "/plan/image",
                "viewPath": "views/plan/image.vue",
                "type": 1,
                "name": "图片策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "图片策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "媒资策划",
                "id": 983,
                "parentId": 895,
                "path": "/plan/media",
                "viewPath": "views/plan/media.vue",
                "type": 1,
                "name": "媒资策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "媒资策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "媒资检测",
                "id": 897,
                "parentId": 895,
                "path": "/plan/detect",
                "viewPath": "views/plan/detect.vue",
                "type": 1,
                "name": "媒资检测",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "媒资检测",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "视频分析",
                "id": 898,
                "parentId": 895,
                "path": "/plan/video",
                "viewPath": "views/plan/video.vue",
                "type": 1,
                "name": "视频分析",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "视频分析",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "影片审核管理",
        "id": 911,
        "parentId": null,
        "path": "/audit/1",
        "viewPath": "views/audit/index.vue",
        "type": 0,
        "name": "影片审核管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片审核管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "待审列表",
                "id": 912,
                "parentId": 911,
                "path": "/audit/1",
                "viewPath": "views/audit/index.vue",
                "type": 1,
                "name": "待审列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "待审列表",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "终审列表",
                "id": 913,
                "parentId": 911,
                "path": "/audit/2",
                "viewPath": "views/audit/index.vue",
                "type": 1,
                "name": "终审列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "终审列表",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "三方影片审核管理",
        "id": 1052,
        "parentId": null,
        "path": "/tripartite/3",
        "viewPath": "views/audit/tripartite.vue",
        "type": 0,
        "name": "三方影片审核管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "三方影片审核管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "CIBN影片待审列表",
                "id": 1054,
                "parentId": 1052,
                "path": "/tripartite/3",
                "viewPath": "views/audit/tripartite.vue",
                "type": 1,
                "name": "CIBN影片待审列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "CIBN影片待审列表",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "CIBN影片已审列表",
                "id": 1055,
                "parentId": 1052,
                "path": "/tripartite/4",
                "viewPath": "views/audit/tripartite.vue",
                "type": 1,
                "name": "CIBN影片已审列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "CIBN影片已审列表",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "CIBN影片已完成列表",
                "id": 1108,
                "parentId": 1052,
                "path": "/tripartite/5",
                "viewPath": "views/audit/tripartite.vue",
                "type": 1,
                "name": "CIBN影片已完成列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "CIBN影片已完成列表",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "影片管理",
        "id": 1048,
        "parentId": null,
        "path": "/operate/movie",
        "viewPath": "views/operate/movie/index.vue",
        "type": 1,
        "name": "影片管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "影片运营管理",
        "id": 918,
        "parentId": null,
        "path": "/operate/movie",
        "viewPath": "views/operate/movie/index.vue",
        "type": 0,
        "name": "影片运营管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片运营管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "影片标记",
                "id": 920,
                "parentId": 918,
                "path": "/operate/mark",
                "viewPath": "views/operate/movie/mark.vue",
                "type": 1,
                "name": "影片标记",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片标记",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "影片点播管理",
                "id": 921,
                "parentId": 918,
                "path": "/operate/movie_payment",
                "viewPath": "views/operate/movie_payment/index.vue",
                "type": 1,
                "name": "影片点播管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片点播管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "电影评分管理",
                "id": 937,
                "parentId": 918,
                "path": "/operate/movie_score",
                "viewPath": "views/operate/movie_score/index.vue",
                "type": 1,
                "name": "电影评分管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "电影评分管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "商品管理",
                "id": 938,
                "parentId": 918,
                "path": "/operate/goods",
                "viewPath": "views/operate/goods/index.vue",
                "type": 1,
                "name": "商品管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "商品管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "影片影人搜索管理",
                "id": 939,
                "parentId": 918,
                "path": "/operate/movie_person",
                "viewPath": "views/operate/movie_person/index.vue",
                "type": 1,
                "name": "影片影人搜索管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片影人搜索管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "影片批号设置",
                "id": 940,
                "parentId": 918,
                "path": "/operate/batch_number",
                "viewPath": "views/operate/batch_number/index.vue",
                "type": 1,
                "name": "影片批号设置",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片批号设置",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "影片推荐图片管理",
                "id": 942,
                "parentId": 918,
                "path": "/operate/evidence",
                "viewPath": "views/operate/evidence/index.vue",
                "type": 1,
                "name": "影片推荐图片管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片推荐图片管理",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "标签管理",
        "id": 923,
        "parentId": null,
        "path": "/tags",
        "viewPath": "views/tags/index.vue",
        "type": 1,
        "name": "标签管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "标签管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "搜索管理",
        "id": 906,
        "parentId": null,
        "path": "/search/content",
        "viewPath": "views/search/content/index.vue",
        "type": 0,
        "name": "搜索管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "搜索管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "搜索内容匹配管理",
                "id": 907,
                "parentId": 906,
                "path": "/search/content",
                "viewPath": "views/search/content/index.vue",
                "type": 1,
                "name": "搜索内容匹配管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "搜索内容匹配管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "用户搜索影片黑名单",
                "id": 908,
                "parentId": 906,
                "path": "/search/movie_blacklist",
                "viewPath": "views/search/movie_blacklist/index.vue",
                "type": 1,
                "name": "用户搜索影片黑名单",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "用户搜索影片黑名单",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "点我求片统计",
                "id": 909,
                "parentId": 906,
                "path": "/search/wish_movie",
                "viewPath": "views/search/wish_movie/index.vue",
                "type": 1,
                "name": "点我求片统计",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "点我求片统计",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "缓存管理",
        "id": 931,
        "parentId": null,
        "path": "/cache",
        "viewPath": "views/cache/index.vue",
        "type": 1,
        "name": "缓存管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "缓存管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "解说策划",
        "id": 899,
        "parentId": null,
        "path": "/commentary/2",
        "viewPath": "views/commentary/index.vue",
        "type": 0,
        "name": "解说策划",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "解说策划",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "解说资源池",
                "id": 900,
                "parentId": 899,
                "path": "/commentary/0/0",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "解说资源池",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "解说资源池",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "解说策划",
                "id": 901,
                "parentId": 899,
                "path": "/commentary/3/0",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "解说策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "解说策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "待发布解说",
                "id": 902,
                "parentId": 899,
                "path": "/commentary/1/0",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "待发布解说",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "待发布解说",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "解说管理",
        "id": 905,
        "parentId": null,
        "path": "/commentary/2/0",
        "viewPath": "views/commentary/index.vue",
        "type": 1,
        "name": "解说管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "解说管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "解说合集管理",
        "id": 927,
        "parentId": null,
        "path": "/commentary/collection",
        "viewPath": "views/commentary/collection.vue",
        "type": 1,
        "name": "解说合集管理",
        "icon": "iconfont icon-zhanghaoquanxianguanli",
        "isShow": true,
        "meta": {
            "label": "解说合集管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "剪辑策划",
        "id": 504,
        "parentId": null,
        "path": "/clip/3/1",
        "viewPath": "views/commentary/index.vue",
        "type": 0,
        "name": "剪辑策划",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "剪辑策划",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "剪辑策划",
                "id": 506,
                "parentId": 504,
                "path": "/clip/3/1",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "剪辑策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "剪辑策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "待发布剪辑",
                "id": 505,
                "parentId": 504,
                "path": "/clip/1/1",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "待发布剪辑",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "待发布剪辑",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "剪辑管理",
        "id": 928,
        "parentId": null,
        "path": "/clip/2/1",
        "viewPath": "views/commentary/index.vue",
        "type": 1,
        "name": "剪辑管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "剪辑管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "影人管理",
        "id": 926,
        "parentId": null,
        "path": "/actor/plan/1",
        "viewPath": "views/actor/plan.vue",
        "type": 0,
        "name": "影人管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影人管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "影片影人策划",
                "id": 984,
                "parentId": 926,
                "path": "/actor/plan/audit",
                "viewPath": "views/actor/plan/audit.vue",
                "type": 0,
                "name": "影片影人策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片影人策划",
                    "keepAlive": false
                },
                "children": [{
                        "moduleName": "影片影人策划",
                        "id": 986,
                        "parentId": 984,
                        "path": "/actor/plan",
                        "viewPath": "views/actor/plan/index.vue",
                        "type": 1,
                        "name": "影片影人策划",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "影片影人策划",
                            "keepAlive": false
                        }
                    },
                    {
                        "moduleName": "影片影人审核",
                        "id": 987,
                        "parentId": 984,
                        "path": "/actor/audit",
                        "viewPath": "views/actor/plan/audit.vue",
                        "type": 1,
                        "name": "影片影人审核",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "影片影人审核",
                            "keepAlive": false
                        }
                    },
                    {
                        "moduleName": "影片影人预发布列表",
                        "id": 988,
                        "parentId": 984,
                        "path": "/actor/preline",
                        "viewPath": "views/actor/plan/preline.vue",
                        "type": 1,
                        "name": "影片影人预发布列表",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "影片影人预发布列表",
                            "keepAlive": false
                        }
                    }
                ]
            },
            {
                "moduleName": "影片影人",
                "id": 985,
                "parentId": 926,
                "path": "/actor/online",
                "viewPath": "views/actor/online.vue",
                "type": 0,
                "name": "影片影人",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片影人",
                    "keepAlive": false
                },
                "children": [{
                        "moduleName": "在线影人影片策划",
                        "id": 989,
                        "parentId": 985,
                        "path": "/actor/online",
                        "viewPath": "views/actor/online/index.vue",
                        "type": 1,
                        "name": "在线影人影片策划",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "在线影人影片策划",
                            "keepAlive": false
                        }
                    },
                    {
                        "moduleName": "在线影人管理",
                        "id": 996,
                        "parentId": 985,
                        "path": "/actor/pass",
                        "viewPath": "views/actor/online/pass.vue",
                        "type": 1,
                        "name": "在线影人管理",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "在线影人管理",
                            "keepAlive": false
                        }
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "快手小程序管理",
        "id": 893,
        "parentId": null,
        "path": "/kwai",
        "viewPath": "views/kwai/index.vue",
        "type": 1,
        "name": "快手小程序管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "快手小程序管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "三方CP片库",
        "id": 1064,
        "parentId": null,
        "path": "/cp",
        "viewPath": "views/cp/index.vue",
        "type": 1,
        "name": "三方CP片库",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "三方CP片库",
            "keepAlive": false
        }
    },
    {
        "moduleName": "搜索索引",
        "id": 922,
        "parentId": null,
        "path": "/search_index",
        "viewPath": "views/search_index/index.vue",
        "type": 1,
        "name": "搜索索引",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "搜索索引",
            "keepAlive": false
        }
    }
]

export const menuGroup = [{
        "moduleName": "影片计划管理",
        "id": 502,
        "parentId": null,
        "path": "/plan/online",
        "viewPath": "/",
        "type": 0,
        "name": "影片计划管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片计划管理",
            "keepAlive": false
        },
        "children": [{
            "moduleName": "上线计划",
            "id": 503,
            "parentId": 502,
            "path": "/plan/online",
            "viewPath": "views/plan/online/index.vue",
            "type": 1,
            "name": "上线计划",
            "icon": "iconfont icon-bumen",
            "isShow": true,
            "meta": {
                "label": "上线计划",
                "keepAlive": false
            }
        }]
    },
    {
        "moduleName": "影片策划管理",
        "id": 895,
        "parentId": null,
        "path": "/plan/catalog",
        "viewPath": "views/plan/index.vue",
        "type": 0,
        "name": "影片策划管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片策划管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "编目策划",
                "id": 896,
                "parentId": 895,
                "path": "/plan/movie",
                "viewPath": "views/plan/movie.vue",
                "type": 1,
                "name": "编目策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "编目策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "标签策划",
                "id": 981,
                "parentId": 895,
                "path": "/plan/tag",
                "viewPath": "views/plan/tag.vue",
                "type": 1,
                "name": "标签策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "标签策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "图片策划",
                "id": 982,
                "parentId": 895,
                "path": "/plan/image",
                "viewPath": "views/plan/image.vue",
                "type": 1,
                "name": "图片策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "图片策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "媒资策划",
                "id": 983,
                "parentId": 895,
                "path": "/plan/media",
                "viewPath": "views/plan/media.vue",
                "type": 1,
                "name": "媒资策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "媒资策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "媒资检测",
                "id": 897,
                "parentId": 895,
                "path": "/plan/detect",
                "viewPath": "views/plan/detect.vue",
                "type": 1,
                "name": "媒资检测",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "媒资检测",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "视频分析",
                "id": 898,
                "parentId": 895,
                "path": "/plan/video",
                "viewPath": "views/plan/video.vue",
                "type": 1,
                "name": "视频分析",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "视频分析",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "影片审核管理",
        "id": 911,
        "parentId": null,
        "path": "/audit/1",
        "viewPath": "views/audit/index.vue",
        "type": 0,
        "name": "影片审核管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片审核管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "待审列表",
                "id": 912,
                "parentId": 911,
                "path": "/audit/1",
                "viewPath": "views/audit/index.vue",
                "type": 1,
                "name": "待审列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "待审列表",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "终审列表",
                "id": 913,
                "parentId": 911,
                "path": "/audit/2",
                "viewPath": "views/audit/index.vue",
                "type": 1,
                "name": "终审列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "终审列表",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "三方影片审核管理",
        "id": 1052,
        "parentId": null,
        "path": "/tripartite/3",
        "viewPath": "views/audit/tripartite.vue",
        "type": 0,
        "name": "三方影片审核管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "三方影片审核管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "CIBN影片待审列表",
                "id": 1054,
                "parentId": 1052,
                "path": "/tripartite/3",
                "viewPath": "views/audit/tripartite.vue",
                "type": 1,
                "name": "CIBN影片待审列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "CIBN影片待审列表",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "CIBN影片已审列表",
                "id": 1055,
                "parentId": 1052,
                "path": "/tripartite/4",
                "viewPath": "views/audit/tripartite.vue",
                "type": 1,
                "name": "CIBN影片已审列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "CIBN影片已审列表",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "CIBN影片已完成列表",
                "id": 1108,
                "parentId": 1052,
                "path": "/tripartite/5",
                "viewPath": "views/audit/tripartite.vue",
                "type": 1,
                "name": "CIBN影片已完成列表",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "CIBN影片已完成列表",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "影片管理",
        "id": 1048,
        "parentId": null,
        "path": "/operate/movie",
        "viewPath": "views/operate/movie/index.vue",
        "type": 1,
        "name": "影片管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "影片运营管理",
        "id": 918,
        "parentId": null,
        "path": "/operate/movie",
        "viewPath": "views/operate/movie/index.vue",
        "type": 0,
        "name": "影片运营管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影片运营管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "影片标记",
                "id": 920,
                "parentId": 918,
                "path": "/operate/mark",
                "viewPath": "views/operate/movie/mark.vue",
                "type": 1,
                "name": "影片标记",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片标记",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "影片点播管理",
                "id": 921,
                "parentId": 918,
                "path": "/operate/movie_payment",
                "viewPath": "views/operate/movie_payment/index.vue",
                "type": 1,
                "name": "影片点播管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片点播管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "电影评分管理",
                "id": 937,
                "parentId": 918,
                "path": "/operate/movie_score",
                "viewPath": "views/operate/movie_score/index.vue",
                "type": 1,
                "name": "电影评分管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "电影评分管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "商品管理",
                "id": 938,
                "parentId": 918,
                "path": "/operate/goods",
                "viewPath": "views/operate/goods/index.vue",
                "type": 1,
                "name": "商品管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "商品管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "影片影人搜索管理",
                "id": 939,
                "parentId": 918,
                "path": "/operate/movie_person",
                "viewPath": "views/operate/movie_person/index.vue",
                "type": 1,
                "name": "影片影人搜索管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片影人搜索管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "影片批号设置",
                "id": 940,
                "parentId": 918,
                "path": "/operate/batch_number",
                "viewPath": "views/operate/batch_number/index.vue",
                "type": 1,
                "name": "影片批号设置",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片批号设置",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "影片推荐图片管理",
                "id": 942,
                "parentId": 918,
                "path": "/operate/evidence",
                "viewPath": "views/operate/evidence/index.vue",
                "type": 1,
                "name": "影片推荐图片管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片推荐图片管理",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "标签管理",
        "id": 923,
        "parentId": null,
        "path": "/tags",
        "viewPath": "views/tags/index.vue",
        "type": 1,
        "name": "标签管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "标签管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "搜索管理",
        "id": 906,
        "parentId": null,
        "path": "/search/content",
        "viewPath": "views/search/content/index.vue",
        "type": 0,
        "name": "搜索管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "搜索管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "搜索内容匹配管理",
                "id": 907,
                "parentId": 906,
                "path": "/search/content",
                "viewPath": "views/search/content/index.vue",
                "type": 1,
                "name": "搜索内容匹配管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "搜索内容匹配管理",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "用户搜索影片黑名单",
                "id": 908,
                "parentId": 906,
                "path": "/search/movie_blacklist",
                "viewPath": "views/search/movie_blacklist/index.vue",
                "type": 1,
                "name": "用户搜索影片黑名单",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "用户搜索影片黑名单",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "点我求片统计",
                "id": 909,
                "parentId": 906,
                "path": "/search/wish_movie",
                "viewPath": "views/search/wish_movie/index.vue",
                "type": 1,
                "name": "点我求片统计",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "点我求片统计",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "缓存管理",
        "id": 931,
        "parentId": null,
        "path": "/cache",
        "viewPath": "views/cache/index.vue",
        "type": 1,
        "name": "缓存管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "缓存管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "解说策划",
        "id": 899,
        "parentId": null,
        "path": "/commentary/2",
        "viewPath": "views/commentary/index.vue",
        "type": 0,
        "name": "解说策划",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "解说策划",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "解说资源池",
                "id": 900,
                "parentId": 899,
                "path": "/commentary/0/0",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "解说资源池",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "解说资源池",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "解说策划",
                "id": 901,
                "parentId": 899,
                "path": "/commentary/3/0",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "解说策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "解说策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "待发布解说",
                "id": 902,
                "parentId": 899,
                "path": "/commentary/1/0",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "待发布解说",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "待发布解说",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "解说管理",
        "id": 905,
        "parentId": null,
        "path": "/commentary/2/0",
        "viewPath": "views/commentary/index.vue",
        "type": 1,
        "name": "解说管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "解说管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "解说合集管理",
        "id": 927,
        "parentId": null,
        "path": "/commentary/collection",
        "viewPath": "views/commentary/collection.vue",
        "type": 1,
        "name": "解说合集管理",
        "icon": "iconfont icon-zhanghaoquanxianguanli",
        "isShow": true,
        "meta": {
            "label": "解说合集管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "剪辑策划",
        "id": 504,
        "parentId": null,
        "path": "/clip/3/1",
        "viewPath": "views/commentary/index.vue",
        "type": 0,
        "name": "剪辑策划",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "剪辑策划",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "剪辑策划",
                "id": 506,
                "parentId": 504,
                "path": "/clip/3/1",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "剪辑策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "剪辑策划",
                    "keepAlive": false
                }
            },
            {
                "moduleName": "待发布剪辑",
                "id": 505,
                "parentId": 504,
                "path": "/clip/1/1",
                "viewPath": "views/commentary/index.vue",
                "type": 1,
                "name": "待发布剪辑",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "待发布剪辑",
                    "keepAlive": false
                }
            }
        ]
    },
    {
        "moduleName": "剪辑管理",
        "id": 928,
        "parentId": null,
        "path": "/clip/2/1",
        "viewPath": "views/commentary/index.vue",
        "type": 1,
        "name": "剪辑管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "剪辑管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "影人管理",
        "id": 926,
        "parentId": null,
        "path": "/actor/plan/1",
        "viewPath": "views/actor/plan.vue",
        "type": 0,
        "name": "影人管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "影人管理",
            "keepAlive": false
        },
        "children": [{
                "moduleName": "影片影人策划",
                "id": 984,
                "parentId": 926,
                "path": "/actor/plan/audit",
                "viewPath": "views/actor/plan/audit.vue",
                "type": 0,
                "name": "影片影人策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片影人策划",
                    "keepAlive": false
                },
                "children": [{
                        "moduleName": "影片影人策划",
                        "id": 986,
                        "parentId": 984,
                        "path": "/actor/plan",
                        "viewPath": "views/actor/plan/index.vue",
                        "type": 1,
                        "name": "影片影人策划",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "影片影人策划",
                            "keepAlive": false
                        }
                    },
                    {
                        "moduleName": "影片影人审核",
                        "id": 987,
                        "parentId": 984,
                        "path": "/actor/audit",
                        "viewPath": "views/actor/plan/audit.vue",
                        "type": 1,
                        "name": "影片影人审核",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "影片影人审核",
                            "keepAlive": false
                        }
                    },
                    {
                        "moduleName": "影片影人预发布列表",
                        "id": 988,
                        "parentId": 984,
                        "path": "/actor/preline",
                        "viewPath": "views/actor/plan/preline.vue",
                        "type": 1,
                        "name": "影片影人预发布列表",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "影片影人预发布列表",
                            "keepAlive": false
                        }
                    }
                ]
            },
            {
                "moduleName": "影片影人",
                "id": 985,
                "parentId": 926,
                "path": "/actor/online",
                "viewPath": "views/actor/online.vue",
                "type": 0,
                "name": "影片影人",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "影片影人",
                    "keepAlive": false
                },
                "children": [{
                        "moduleName": "在线影人影片策划",
                        "id": 989,
                        "parentId": 985,
                        "path": "/actor/online",
                        "viewPath": "views/actor/online/index.vue",
                        "type": 1,
                        "name": "在线影人影片策划",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "在线影人影片策划",
                            "keepAlive": false
                        }
                    },
                    {
                        "moduleName": "在线影人管理",
                        "id": 996,
                        "parentId": 985,
                        "path": "/actor/pass",
                        "viewPath": "views/actor/online/pass.vue",
                        "type": 1,
                        "name": "在线影人管理",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "在线影人管理",
                            "keepAlive": false
                        }
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "快手小程序管理",
        "id": 893,
        "parentId": null,
        "path": "/kwai",
        "viewPath": "views/kwai/index.vue",
        "type": 1,
        "name": "快手小程序管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "快手小程序管理",
            "keepAlive": false
        }
    },
    {
        "moduleName": "三方CP片库",
        "id": 1064,
        "parentId": null,
        "path": "/cp",
        "viewPath": "views/cp/index.vue",
        "type": 1,
        "name": "三方CP片库",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "三方CP片库",
            "keepAlive": false
        }
    },
    {
        "moduleName": "搜索索引",
        "id": 922,
        "parentId": null,
        "path": "/search_index",
        "viewPath": "views/search_index/index.vue",
        "type": 1,
        "name": "搜索索引",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "搜索索引",
            "keepAlive": false
        }
    }
]

export const processList = [{
        "label": "首页",
        "value": "/",
        "active": false
    },
    {
        "label": "快手小程序管理",
        "value": "/kwai",
        "active": true
    },
    {
        "label": "待审列表",
        "value": "/audit/1",
        "active": false
    },
    {
        "label": "终审列表",
        "value": "/audit/2",
        "active": false
    }
]