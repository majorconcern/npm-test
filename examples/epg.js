export const menuList = [{
        "moduleName": "分类管理",
        "id": 496,
        "parentId": 431,
        "path": "/categories",
        "viewPath": "views/categories/pass.vue",
        "type": 1,
        "name": "分类管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "分类管理",
            "keepAlive": true
        }
    },
    {
        "moduleName": "分类策划",
        "id": 432,
        "parentId": 431,
        "path": "/categories/IN_DO",
        "viewPath": "views/categories/index.vue",
        "type": 0,
        "name": "分类策划",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "分类策划",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "分类策划制作",
                "id": 450,
                "parentId": 432,
                "path": "/categories/IN_DO",
                "viewPath": "views/categories/index.vue",
                "type": 1,
                "name": "分类策划制作",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类策划制作",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类策划初审",
                "id": 462,
                "parentId": 432,
                "path": "/categories/FIRST_AUDIT",
                "viewPath": "views/categories/index.vue",
                "type": 1,
                "name": "分类策划初审",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类策划初审",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类策划终审",
                "id": 471,
                "parentId": 432,
                "path": "/categories/FINAL_AUDIT",
                "viewPath": "views/categories/index.vue",
                "type": 1,
                "name": "分类策划终审",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类策划终审",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类策划CIBN待审",
                "id": 1049,
                "parentId": 432,
                "path": "/categories/IN_FINAL_AUDIT_CIBN",
                "viewPath": "views/categories/index.vue",
                "type": 1,
                "name": "分类策划CIBN待审",
                "icon": "iconfont icon-wangluoxitong",
                "isShow": true,
                "meta": {
                    "label": "分类策划CIBN待审",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类策划发布",
                "id": 481,
                "parentId": 432,
                "path": "/categories/PUBLISH",
                "viewPath": "views/categories/index.vue",
                "type": 1,
                "name": "分类策划发布",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类策划发布",
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "moduleName": "分类编排策划",
        "id": 433,
        "parentId": 431,
        "path": "/typeset/IN_DO",
        "viewPath": "views/typeset/index.vue",
        "type": 0,
        "name": "分类编排策划",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "分类编排策划",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "分类编排策划制作",
                "id": 451,
                "parentId": 433,
                "path": "/typeset/IN_DO",
                "viewPath": "views/typeset/index.vue",
                "type": 1,
                "name": "分类编排策划制作",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类编排策划制作",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类编排策划初审",
                "id": 463,
                "parentId": 433,
                "path": "/typeset/FIRST_AUDIT",
                "viewPath": "views/typeset/index.vue",
                "type": 1,
                "name": "分类编排策划初审",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类编排策划初审",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类编排策划终审",
                "id": 449,
                "parentId": 433,
                "path": "/typeset/FINAL_AUDIT",
                "viewPath": "views/typeset/index.vue",
                "type": 1,
                "name": "分类编排策划终审",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类编排策划终审",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类编排CIBN待审",
                "id": 1051,
                "parentId": 433,
                "path": "/typeset/IN_FINAL_AUDIT_CIBN",
                "viewPath": "views/typeset/index.vue",
                "type": 1,
                "name": "分类编排CIBN待审",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类编排CIBN待审",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类编排策划发布",
                "id": 482,
                "parentId": 433,
                "path": "/typeset/PUBLISH",
                "viewPath": "views/typeset/index.vue",
                "type": 1,
                "name": "分类编排策划发布",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类编排策划发布",
                    "keepAlive": true
                }
            }
        ]
    }
]

export const menuGroup = [{
        "moduleName": "分类",
        "id": 431,
        "parentId": null,
        "path": "/categories",
        "viewPath": null,
        "type": 0,
        "name": "分类",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "分类",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "分类管理",
                "id": 496,
                "parentId": 431,
                "path": "/categories",
                "viewPath": "views/categories/pass.vue",
                "type": 1,
                "name": "分类管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类管理",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类策划",
                "id": 432,
                "parentId": 431,
                "path": "/categories/IN_DO",
                "viewPath": "views/categories/index.vue",
                "type": 0,
                "name": "分类策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类策划",
                    "keepAlive": true
                },
                "children": [{
                        "moduleName": "分类策划制作",
                        "id": 450,
                        "parentId": 432,
                        "path": "/categories/IN_DO",
                        "viewPath": "views/categories/index.vue",
                        "type": 1,
                        "name": "分类策划制作",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类策划制作",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "分类策划初审",
                        "id": 462,
                        "parentId": 432,
                        "path": "/categories/FIRST_AUDIT",
                        "viewPath": "views/categories/index.vue",
                        "type": 1,
                        "name": "分类策划初审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类策划初审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "分类策划终审",
                        "id": 471,
                        "parentId": 432,
                        "path": "/categories/FINAL_AUDIT",
                        "viewPath": "views/categories/index.vue",
                        "type": 1,
                        "name": "分类策划终审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类策划终审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "分类策划CIBN待审",
                        "id": 1049,
                        "parentId": 432,
                        "path": "/categories/IN_FINAL_AUDIT_CIBN",
                        "viewPath": "views/categories/index.vue",
                        "type": 1,
                        "name": "分类策划CIBN待审",
                        "icon": "iconfont icon-wangluoxitong",
                        "isShow": true,
                        "meta": {
                            "label": "分类策划CIBN待审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "分类策划发布",
                        "id": 481,
                        "parentId": 432,
                        "path": "/categories/PUBLISH",
                        "viewPath": "views/categories/index.vue",
                        "type": 1,
                        "name": "分类策划发布",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类策划发布",
                            "keepAlive": true
                        }
                    }
                ]
            },
            {
                "moduleName": "分类编排策划",
                "id": 433,
                "parentId": 431,
                "path": "/typeset/IN_DO",
                "viewPath": "views/typeset/index.vue",
                "type": 0,
                "name": "分类编排策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "分类编排策划",
                    "keepAlive": true
                },
                "children": [{
                        "moduleName": "分类编排策划制作",
                        "id": 451,
                        "parentId": 433,
                        "path": "/typeset/IN_DO",
                        "viewPath": "views/typeset/index.vue",
                        "type": 1,
                        "name": "分类编排策划制作",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类编排策划制作",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "分类编排策划初审",
                        "id": 463,
                        "parentId": 433,
                        "path": "/typeset/FIRST_AUDIT",
                        "viewPath": "views/typeset/index.vue",
                        "type": 1,
                        "name": "分类编排策划初审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类编排策划初审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "分类编排策划终审",
                        "id": 449,
                        "parentId": 433,
                        "path": "/typeset/FINAL_AUDIT",
                        "viewPath": "views/typeset/index.vue",
                        "type": 1,
                        "name": "分类编排策划终审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类编排策划终审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "分类编排CIBN待审",
                        "id": 1051,
                        "parentId": 433,
                        "path": "/typeset/IN_FINAL_AUDIT_CIBN",
                        "viewPath": "views/typeset/index.vue",
                        "type": 1,
                        "name": "分类编排CIBN待审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类编排CIBN待审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "分类编排策划发布",
                        "id": 482,
                        "parentId": 433,
                        "path": "/typeset/PUBLISH",
                        "viewPath": "views/typeset/index.vue",
                        "type": 1,
                        "name": "分类编排策划发布",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "分类编排策划发布",
                            "keepAlive": true
                        }
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "组件",
        "id": 434,
        "parentId": null,
        "path": "/component",
        "viewPath": null,
        "type": 0,
        "name": "组件",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "组件",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "组件管理",
                "id": 497,
                "parentId": 434,
                "path": "/component",
                "viewPath": "views/component/pass.vue",
                "type": 1,
                "name": "组件管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "组件管理",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "组件策划",
                "id": 435,
                "parentId": 434,
                "path": "/component/IN_DO",
                "viewPath": "views/component/index.vue",
                "type": 0,
                "name": "组件策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "组件策划",
                    "keepAlive": true
                },
                "children": [{
                        "moduleName": "组件策划制作",
                        "id": 452,
                        "parentId": 435,
                        "path": "/component/IN_DO",
                        "viewPath": "views/component/index.vue",
                        "type": 1,
                        "name": "组件策划制作",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "组件策划制作",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "组件策划初审",
                        "id": 464,
                        "parentId": 435,
                        "path": "/component/FIRST_AUDIT",
                        "viewPath": "views/component/index.vue",
                        "type": 1,
                        "name": "组件策划初审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "组件策划初审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "组件策划终审",
                        "id": 473,
                        "parentId": 435,
                        "path": "/component/FINAL_AUDIT",
                        "viewPath": "views/component/index.vue",
                        "type": 1,
                        "name": "组件策划终审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "组件策划终审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "组件策划CIBN待审",
                        "id": 1053,
                        "parentId": 435,
                        "path": "/component/IN_FINAL_AUDIT_CIBN",
                        "viewPath": "views/component/index.vue",
                        "type": 1,
                        "name": "组件策划CIBN待审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "组件策划CIBN待审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "组件策划发布",
                        "id": 483,
                        "parentId": 435,
                        "path": "/component/PUBLISH",
                        "viewPath": "views/component/index.vue",
                        "type": 1,
                        "name": "组件策划发布",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "组件策划发布",
                            "keepAlive": true
                        }
                    }
                ]
            },
            {
                "moduleName": "广告管理",
                "id": 444,
                "parentId": 434,
                "path": "/ad/IN_DO",
                "viewPath": "views/ad/index.vue",
                "type": 0,
                "name": "广告管理",
                "icon": "iconfont icon-huaban",
                "isShow": true,
                "meta": {
                    "label": "广告管理",
                    "keepAlive": true
                },
                "children": [{
                        "moduleName": "广告制作",
                        "id": 458,
                        "parentId": 444,
                        "path": "/ad/IN_DO",
                        "viewPath": "views/ad/index.vue",
                        "type": 1,
                        "name": "广告制作",
                        "icon": "iconfont icon-houtaiguanli-renshiguanli",
                        "isShow": true,
                        "meta": {
                            "label": "广告制作",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "广告审核",
                        "id": 468,
                        "parentId": 444,
                        "path": "/ad/FIRST_AUDIT",
                        "viewPath": "views/ad/index.vue",
                        "type": 1,
                        "name": "广告审核",
                        "icon": "iconfont icon-houtaiguanli-renshiguanli",
                        "isShow": true,
                        "meta": {
                            "label": "广告审核",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "广告发布",
                        "id": 478,
                        "parentId": 444,
                        "path": "/ad/PUBLISH",
                        "viewPath": "views/ad/index.vue",
                        "type": 1,
                        "name": "广告发布",
                        "icon": "iconfont icon-houtaiguanli-renshiguanli",
                        "isShow": true,
                        "meta": {
                            "label": "广告发布",
                            "keepAlive": true
                        }
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "模板管理",
        "id": 492,
        "parentId": null,
        "path": "/template/STANDARD",
        "viewPath": null,
        "type": 0,
        "name": "模板管理",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "模板管理",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "标准模式模板管理",
                "id": 436,
                "parentId": 492,
                "path": "/template/STANDARD",
                "viewPath": "views/template/index.vue",
                "type": 1,
                "name": "标准模式模板管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "标准模式模板管理",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "标准模式模板策划",
                "id": 437,
                "parentId": 492,
                "path": "/template/STANDARD",
                "viewPath": "views/template/index.vue",
                "type": 0,
                "name": "标准模式模板策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "标准模式模板策划",
                    "keepAlive": true
                },
                "children": [{
                        "moduleName": "标准模板制作",
                        "id": 453,
                        "parentId": 437,
                        "path": "/template/STANDARD/IN_DO",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "标准模板制作",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "标准模板制作",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "标准模板初审",
                        "id": 465,
                        "parentId": 437,
                        "path": "/template/STANDARD/FIRST_AUDIT",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "标准模板初审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "标准模板初审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "标准模板终审",
                        "id": 474,
                        "parentId": 437,
                        "path": "/template/STANDARD/FINAL_AUDIT",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "标准模板终审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "标准模板终审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "标准模式模板CIBN待审",
                        "id": 1056,
                        "parentId": 437,
                        "path": "/template/STANDARD/IN_FINAL_AUDIT_CIBN",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "标准模式模板CIBN待审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "标准模式模板CIBN待审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "标准模板发布",
                        "id": 484,
                        "parentId": 437,
                        "path": "/template/STANDARD/PUBLISH",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "标准模板发布",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "标准模板发布",
                            "keepAlive": true
                        }
                    }
                ]
            },
            {
                "moduleName": "SVIP模式模板管理",
                "id": 438,
                "parentId": 492,
                "path": "/template/SVIP",
                "viewPath": "views/template/index.vue",
                "type": 1,
                "name": "SVIP模式模板管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "SVIP模式模板管理",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "SVIP模式模板策划",
                "id": 439,
                "parentId": 492,
                "path": "/template/SVIP/IN_DO",
                "viewPath": "views/template/index.vue",
                "type": 0,
                "name": "SVIP模式模板策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "SVIP模式模板策划",
                    "keepAlive": true
                },
                "children": [{
                        "moduleName": "SVIP模板制作",
                        "id": 454,
                        "parentId": 439,
                        "path": "/template/SVIP/IN_DO",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "SVIP模板制作",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "SVIP模板制作",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "SVIP模板初审",
                        "id": 455,
                        "parentId": 439,
                        "path": "/template/SVIP/FIRST_AUDIT",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "SVIP模板初审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "SVIP模板初审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "SVIP模板终审",
                        "id": 475,
                        "parentId": 439,
                        "path": "/template/SVIP/FINAL_AUDIT",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "SVIP模板终审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "SVIP模板终审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "SVIP模板发布",
                        "id": 485,
                        "parentId": 439,
                        "path": "/template/SVIP/PUBLISH",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "SVIP模板发布",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "SVIP模板发布",
                            "keepAlive": true
                        }
                    }
                ]
            },
            {
                "moduleName": "儿童模式模板管理",
                "id": 440,
                "parentId": 492,
                "path": "/template/CHILDREN",
                "viewPath": "views/template/index.vue",
                "type": 1,
                "name": "儿童模式模板管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "儿童模式模板管理",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "儿童模式模板策划",
                "id": 441,
                "parentId": 492,
                "path": "/template/CHILDREN/IN_DO",
                "viewPath": "views/template/index.vue",
                "type": 0,
                "name": "儿童模式模板策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "儿童模式模板策划",
                    "keepAlive": true
                },
                "children": [{
                        "moduleName": "儿童模板制作",
                        "id": 448,
                        "parentId": 441,
                        "path": "/template/CHILDREN/IN_DO",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "儿童模板制作",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "儿童模板制作",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "儿童模板初审",
                        "id": 466,
                        "parentId": 441,
                        "path": "/template/CHILDREN/FIRST_AUDIT",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "儿童模板初审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "儿童模板初审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "儿童模板终审",
                        "id": 476,
                        "parentId": 441,
                        "path": "/template/CHILDREN/FINAL_AUDIT",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "儿童模板终审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "儿童模板终审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "儿童模板CIBN待审",
                        "id": 456,
                        "parentId": 441,
                        "path": "/template/CHILDREN/IN_FINAL_AUDIT_CIBN",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "儿童模板CIBN待审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "儿童模板CIBN待审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "儿童模板发布",
                        "id": 486,
                        "parentId": 441,
                        "path": "/template/CHILDREN/PUBLISH",
                        "viewPath": "views/template/index.vue",
                        "type": 1,
                        "name": "儿童模板发布",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "儿童模板发布",
                            "keepAlive": true
                        }
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "即将上线",
        "id": 442,
        "parentId": null,
        "path": "/online",
        "viewPath": null,
        "type": 0,
        "name": "即将上线",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "即将上线",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "即将上线管理",
                "id": 498,
                "parentId": 442,
                "path": "/online",
                "viewPath": "views/online/index.vue",
                "type": 1,
                "name": "即将上线管理",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "即将上线管理",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "即将上线策划",
                "id": 443,
                "parentId": 442,
                "path": "/online/IN_DO",
                "viewPath": "views/online/index.vue",
                "type": 0,
                "name": "即将上线策划",
                "icon": "iconfont icon-bumen",
                "isShow": true,
                "meta": {
                    "label": "即将上线策划",
                    "keepAlive": true
                },
                "children": [{
                        "moduleName": "即将上线制作",
                        "id": 457,
                        "parentId": 443,
                        "path": "/online/IN_DO",
                        "viewPath": "views/online/index.vue",
                        "type": 1,
                        "name": "即将上线制作",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "即将上线制作",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "即将上线初审",
                        "id": 467,
                        "parentId": 443,
                        "path": "/online/FIRST_AUDIT",
                        "viewPath": "views/online/index.vue",
                        "type": 1,
                        "name": "即将上线初审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "即将上线初审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "即将上线终审",
                        "id": 477,
                        "parentId": 443,
                        "path": "/online/FINAL_AUDIT",
                        "viewPath": "views/online/index.vue",
                        "type": 1,
                        "name": "即将上线终审",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "即将上线终审",
                            "keepAlive": true
                        }
                    },
                    {
                        "moduleName": "即将上线发布",
                        "id": 487,
                        "parentId": 443,
                        "path": "/online/PUBLISH",
                        "viewPath": "views/online/index.vue",
                        "type": 1,
                        "name": "即将上线发布",
                        "icon": "iconfont icon-bumen",
                        "isShow": true,
                        "meta": {
                            "label": "即将上线发布",
                            "keepAlive": true
                        }
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "好片体验站",
        "id": 1109,
        "parentId": null,
        "path": "/nicefilm",
        "viewPath": null,
        "type": 0,
        "name": "好片体验站",
        "icon": "iconfont icon-caidan",
        "isShow": true,
        "meta": {
            "label": "好片体验站",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "SVIP好片体验站",
                "id": 1110,
                "parentId": 1109,
                "path": "/nicefilm/SVIP",
                "viewPath": "views/nicefilm/index.vue",
                "type": 1,
                "name": "SVIP好片体验站",
                "icon": "iconfont icon-kongzhizhongxin",
                "isShow": true,
                "meta": {
                    "label": "SVIP好片体验站",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "标准好片体验站",
                "id": 1111,
                "parentId": 1109,
                "path": "/nicefilm/STANDARD",
                "viewPath": "views/nicefilm/index.vue",
                "type": 1,
                "name": "标准好片体验站",
                "icon": "iconfont icon-kongzhizhongxin",
                "isShow": true,
                "meta": {
                    "label": "标准好片体验站",
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "moduleName": "用户分组管理",
        "id": 445,
        "parentId": null,
        "path": "/user",
        "viewPath": null,
        "type": 0,
        "name": "用户分组管理",
        "icon": "iconfont icon-huaban",
        "isShow": true,
        "meta": {
            "label": "用户分组管理",
            "keepAlive": true
        },
        "children": [{
            "moduleName": "惊喜组件用户分组",
            "id": 459,
            "parentId": 445,
            "path": "/user",
            "viewPath": "views/user/index.vue",
            "type": 1,
            "name": "惊喜组件用户分组",
            "icon": "iconfont icon-houtaiguanli-qiyeshezhi",
            "isShow": true,
            "meta": {
                "label": "惊喜组件用户分组",
                "keepAlive": true
            }
        }]
    },
    {
        "moduleName": "TV轮播图",
        "id": 446,
        "parentId": null,
        "path": "/screensaver/STANDARD",
        "viewPath": null,
        "type": 0,
        "name": "TV轮播图",
        "icon": "iconfont icon-huaban",
        "isShow": true,
        "meta": {
            "label": "TV轮播图",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "标准模式TV轮播图",
                "id": 460,
                "parentId": 446,
                "path": "/screensaver/STANDARD/TV",
                "viewPath": "views/screensaver/index.vue",
                "type": 1,
                "name": "标准模式TV轮播图",
                "icon": "iconfont icon-houtaiguanli-qiyeshezhi",
                "isShow": true,
                "meta": {
                    "label": "标准模式TV轮播图",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "SVIP模式TV轮播图",
                "id": 469,
                "parentId": 446,
                "path": "/screensaver/SVIP/TV",
                "viewPath": "views/screensaver/index.vue",
                "type": 1,
                "name": "SVIP模式TV轮播图",
                "icon": "iconfont icon-houtaiguanli-qiyeshezhi",
                "isShow": true,
                "meta": {
                    "label": "SVIP模式TV轮播图",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "儿童模式TV轮播图",
                "id": 479,
                "parentId": 446,
                "path": "/screensaver/CHILDREN/TV",
                "viewPath": "views/screensaver/index.vue",
                "type": 1,
                "name": "儿童模式TV轮播图",
                "icon": "iconfont icon-houtaiguanli-qiyeshezhi",
                "isShow": true,
                "meta": {
                    "label": "儿童模式TV轮播图",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "标准模式CIBN_TV轮播图",
                "id": 1057,
                "parentId": 446,
                "path": "/screensaver/STANDARD/CIBN_TV",
                "viewPath": "views/screensaver/index.vue",
                "type": 1,
                "name": "标准模式CIBN_TV轮播图",
                "icon": "iconfont icon-wangluoxitong",
                "isShow": true,
                "meta": {
                    "label": "标准模式CIBN_TV轮播图",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "儿童模式CIBN_TV轮播图",
                "id": 1058,
                "parentId": 446,
                "path": "/screensaver/CHILDREN/CIBN_TV",
                "viewPath": "views/screensaver/index.vue",
                "type": 1,
                "name": "儿童模式CIBN_TV轮播图",
                "icon": "iconfont icon-wangluoxitong",
                "isShow": true,
                "meta": {
                    "label": "儿童模式CIBN_TV轮播图",
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "moduleName": "内容运营数据",
        "id": 447,
        "parentId": null,
        "path": "/odps",
        "viewPath": null,
        "type": 0,
        "name": "内容运营数据",
        "icon": "iconfont icon-houtaiguanli-qiyeshezhi",
        "isShow": true,
        "meta": {
            "label": "内容运营数据",
            "keepAlive": true
        },
        "children": [{
                "moduleName": "实时数据",
                "id": 461,
                "parentId": 447,
                "path": "/odps/realtime",
                "viewPath": "views/odps/index.vue",
                "type": 1,
                "name": "实时数据",
                "icon": "iconfont icon-houtaiguanli-shenpi",
                "isShow": true,
                "meta": {
                    "label": "实时数据",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "分类数据",
                "id": 470,
                "parentId": 447,
                "path": "/odps/build",
                "viewPath": "views/odps/build.vue",
                "type": 1,
                "name": "分类数据",
                "icon": "iconfont icon-houtaiguanli-shenpi",
                "isShow": true,
                "meta": {
                    "label": "分类数据",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "组件点击",
                "id": 480,
                "parentId": 447,
                "path": "/odps/click",
                "viewPath": "views/odps/exposure/index.vue",
                "type": 1,
                "name": "组件点击",
                "icon": "iconfont icon-houtaiguanli-shenpi",
                "isShow": true,
                "meta": {
                    "label": "组件点击",
                    "keepAlive": true
                }
            },
            {
                "moduleName": "组件曝光",
                "id": 488,
                "parentId": 447,
                "path": "/odps/exposure",
                "viewPath": "views/odps/exposure/index.vue",
                "type": 1,
                "name": "组件曝光",
                "icon": "iconfont icon-houtaiguanli-shenpi",
                "isShow": true,
                "meta": {
                    "label": "组件曝光",
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "moduleName": "操作日志",
        "id": 500,
        "parentId": null,
        "path": "/log",
        "viewPath": null,
        "type": 0,
        "name": "操作日志",
        "icon": "iconfont icon-bumen",
        "isShow": true,
        "meta": {
            "label": "操作日志",
            "keepAlive": true
        },
        "children": [{
            "moduleName": "EPG操作日志",
            "id": 501,
            "parentId": 500,
            "path": "/log",
            "viewPath": "views/log/index.vue",
            "type": 1,
            "name": "EPG操作日志",
            "icon": "iconfont icon-bumen",
            "isShow": true,
            "meta": {
                "label": "EPG操作日志",
                "keepAlive": true
            }
        }]
    }
]