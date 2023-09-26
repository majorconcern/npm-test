export const menuList = [{
        'moduleName': '会员信息查询',
        'id': 837,
        'parentId': null,
        'path': '/user',
        'viewPath': 'views/user/info/index.vue',
        'type': 1,
        'name': '会员信息查询',
        'icon': 'iconfont icon-bumen',
        'isShow': true,
        'meta': {
            'label': '会员信息查询',
            'keepAlive': true
        }
    },
    {
        'moduleName': '卡顿管理',
        'id': 838,
        'parentId': null,
        'path': '/cdn',
        'viewPath': 'views/cdn/user/cdn.vue',
        'type': 0,
        'name': '卡顿管理',
        'icon': 'iconfont icon-bumen',
        'isShow': true,
        'meta': {
            'label': '卡顿管理',
            'keepAlive': true
        },
        'children': [{
                'moduleName': 'CDN用户调度',
                'id': 839,
                'parentId': 838,
                'path': '/cdn/user',
                'viewPath': 'views/cdn/user/cdn.vue',
                'type': 1,
                'name': 'CDN用户调度',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': 'CDN用户调度',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '用户IP列表',
                'id': 840,
                'parentId': 838,
                'path': '/cdn/user/ip',
                'viewPath': 'views/cdn/user/ip.vue',
                'type': 1,
                'name': '用户IP列表',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '用户IP列表',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '用户CDN查看 - IP',
                'id': 841,
                'parentId': 838,
                'path': '/cdn/ip',
                'viewPath': 'views/cdn/ip.vue',
                'type': 1,
                'name': '用户CDN查看 - IP',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '用户CDN查看 - IP',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '用户CDN查看 - HBase',
                'id': 842,
                'parentId': 838,
                'path': '/cdn/hbase',
                'viewPath': 'views/cdn/hbase.vue',
                'type': 1,
                'name': '用户CDN查看 - HBase',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '用户CDN查看 - HBase',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '卡顿记录',
                'id': 843,
                'parentId': 838,
                'path': '/cdn/stuck',
                'viewPath': 'views/cdn/stuck.vue',
                'type': 1,
                'name': '卡顿记录',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '卡顿记录',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '日志',
                'id': 1029,
                'parentId': 838,
                'path': '/log',
                'viewPath': 'http://121.199.33.137:7301/all_log',
                'type': 1,
                'name': '日志',
                'icon': 'iconfont icon-wangluoxitong',
                'isShow': true,
                'meta': {
                    'label': '日志',
                    'keepAlive': true,
                    'iframeUrl': 'http://121.199.33.137:7301/all_log'
                }
            },
            {
                'moduleName': 'API日志',
                'id': 1114,
                'parentId': 838,
                'path': '/log/api',
                'viewPath': 'views/log/api.vue',
                'type': 1,
                'name': 'API日志',
                'icon': 'iconfont icon-kongzhizhongxin',
                'isShow': true,
                'meta': {
                    'label': 'API日志',
                    'keepAlive': true
                }
            }
        ]
    },
    {
        'moduleName': '兑换码管理',
        'id': 844,
        'parentId': null,
        'path': '/redeemcode',
        'viewPath': 'views/redeemcode/index.vue',
        'type': 1,
        'name': '兑换码管理',
        'icon': 'iconfont icon-wodezhanghu',
        'isShow': true,
        'meta': {
            'label': '兑换码管理',
            'keepAlive': true
        }
    },
    {
        'moduleName': '南瓜籽查询',
        'id': 845,
        'parentId': null,
        'path': '/seed',
        'viewPath': 'views/seed/index.vue',
        'type': 1,
        'name': '南瓜籽查询',
        'icon': 'iconfont icon-wodezhanghu',
        'isShow': true,
        'meta': {
            'label': '南瓜籽查询',
            'keepAlive': true
        }
    },
    {
        'moduleName': '账号注销',
        'id': 846,
        'parentId': null,
        'path': '/cancel_account',
        'viewPath': 'views/cancel_account/index.vue',
        'type': 1,
        'name': '账号注销',
        'icon': 'iconfont icon-wodezhanghu',
        'isShow': true,
        'meta': {
            'label': '账号注销',
            'keepAlive': true
        }
    },
    {
        'moduleName': '获取验证码',
        'id': 847,
        'parentId': null,
        'path': '/code',
        'viewPath': 'views/code/index.vue',
        'type': 1,
        'name': '获取验证码',
        'icon': 'iconfont icon-houtaiguanli-qiyeshezhi',
        'isShow': true,
        'meta': {
            'label': '获取验证码',
            'keepAlive': true
        }
    },
    {
        'moduleName': '辅助功能',
        'id': 848,
        'parentId': null,
        'path': '',
        'viewPath': '',
        'type': 0,
        'name': '辅助功能',
        'icon': 'iconfont icon-houtaiguanli-qiyeshezhi',
        'isShow': true,
        'meta': {
            'label': '辅助功能',
            'keepAlive': true
        },
        'children': [{
                'moduleName': '影片校验',
                'id': 1141,
                'parentId': 848,
                'path': '/text_feedback',
                'viewPath': 'views/assist/text_feedback/index.vue',
                'type': 1,
                'name': '影片校验',
                'icon': 'iconfont icon-houtaiguanli-qiyeshezhi',
                'isShow': true,
                'meta': {
                    'label': '影片校验',
                    'keepAlive': true
                }
            },
            {
                'moduleName': 'mqtt放映厅调试',
                'id': 1142,
                'parentId': 848,
                'path': '/mqtt/channel_id',
                'viewPath': 'views/assist/mqtt/index.vue',
                'type': 1,
                'name': 'mqtt放映厅调试',
                'icon': 'iconfont icon-houtaiguanli-qiyeshezhi',
                'isShow': true,
                'meta': {
                    'label': 'mqtt放映厅调试',
                    'keepAlive': true
                }
            },
            {
                'moduleName': 'mqtt用户调试',
                'id': 1143,
                'parentId': 848,
                'path': '/mqtt/user_id',
                'viewPath': 'views/assist/mqtt/index.vue',
                'type': 1,
                'name': 'mqtt用户调试',
                'icon': 'iconfont icon-houtaiguanli-qiyeshezhi',
                'isShow': true,
                'meta': {
                    'label': 'mqtt用户调试',
                    'keepAlive': true
                }
            }
        ]
    },
    {
        'moduleName': '苹果识别码',
        'id': 849,
        'parentId': null,
        'path': '/apple_identifier',
        'viewPath': 'views/apple_identifier/index.vue',
        'type': 1,
        'name': '苹果识别码',
        'icon': 'iconfont icon-houtaiguanli-qiyeshezhi',
        'isShow': true,
        'meta': {
            'label': '苹果识别码',
            'keepAlive': true
        }
    },
    {
        'moduleName': '解说UP主管理',
        'id': 850,
        'parentId': null,
        'path': '/commentary',
        'viewPath': 'views/commentary/index.vue',
        'type': 0,
        'name': '解说UP主管理',
        'icon': 'iconfont icon-houtaiguanli-qiyeshezhi',
        'isShow': true,
        'meta': {
            'label': '解说UP主管理',
            'keepAlive': true
        },
        'children': [{
                'moduleName': 'UP主管理',
                'id': 857,
                'parentId': 850,
                'path': '/commentary',
                'viewPath': 'views/commentary/index.vue',
                'type': 1,
                'name': 'UP主管理',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': 'UP主管理',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '收益规则管理',
                'id': 856,
                'parentId': 850,
                'path': '/commentary/income',
                'viewPath': 'views/commentary/income.vue',
                'type': 1,
                'name': '收益规则管理',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '收益规则管理',
                    'keepAlive': true
                }
            }
        ]
    },
    {
        'moduleName': '黑名单查询',
        'id': 851,
        'parentId': null,
        'path': '/risk',
        'viewPath': 'views/risk/index.vue',
        'type': 1,
        'name': '黑名单查询',
        'icon': 'iconfont icon-wodezhanghu',
        'isShow': true,
        'meta': {
            'label': '黑名单查询',
            'keepAlive': true
        }
    },
    {
        'moduleName': '用户退款',
        'id': 852,
        'parentId': null,
        'path': '/user/refund',
        'viewPath': 'views/user/refund/index.vue',
        'type': 1,
        'name': '用户退款',
        'icon': 'iconfont icon-wodezhanghu',
        'isShow': true,
        'meta': {
            'label': '用户退款',
            'keepAlive': true
        }
    },
    {
        'moduleName': '用户提现',
        'id': 853,
        'parentId': null,
        'path': '/user/withdraw',
        'viewPath': 'views/user/withdraw/index.vue',
        'type': 1,
        'name': '用户提现',
        'icon': 'iconfont icon-wodezhanghu',
        'isShow': true,
        'meta': {
            'label': '用户提现',
            'keepAlive': true
        }
    },
    {
        'moduleName': '解约审核',
        'id': 1129,
        'parentId': null,
        'path': '/user/agency_cancel',
        'viewPath': 'views/user/cancel/index.vue',
        'type': 1,
        'name': '解约审核',
        'icon': 'iconfont icon-huaban',
        'isShow': true,
        'meta': {
            'label': '解约审核',
            'keepAlive': true
        }
    },
    {
        'moduleName': '特殊手机号管理',
        'id': 855,
        'parentId': null,
        'path': '/special_phone',
        'viewPath': 'views/special_phone/index.vue',
        'type': 1,
        'name': '特殊手机号管理',
        'icon': 'iconfont icon-bumen',
        'isShow': true,
        'meta': {
            'label': '特殊手机号管理',
            'keepAlive': true
        }
    },
    {
        'moduleName': 'SVIP白名单',
        'id': 854,
        'parentId': null,
        'path': '/svip_white',
        'viewPath': 'views/svip_white/index.vue',
        'type': 1,
        'name': 'SVIP白名单',
        'icon': 'iconfont icon-bumen',
        'isShow': true,
        'meta': {
            'label': 'SVIP白名单',
            'keepAlive': true
        }
    },
    {
        'moduleName': '缓存管理',
        'id': 858,
        'parentId': null,
        'path': '/cache',
        'viewPath': 'views/cache/index.vue',
        'type': 1,
        'name': '缓存管理',
        'icon': 'iconfont icon-bumen',
        'isShow': true,
        'meta': {
            'label': '缓存管理',
            'keepAlive': true
        }
    },
    {
        'moduleName': '安全策略管理',
        'id': 1136,
        'parentId': null,
        'path': '',
        'viewPath': '',
        'type': 0,
        'name': '安全策略管理',
        'icon': 'iconfont icon-bumen',
        'isShow': true,
        'meta': {
            'label': '安全策略管理',
            'keepAlive': true
        },
        'children': [{
                'moduleName': '黑名单管理',
                'id': 1137,
                'parentId': 1136,
                'path': '/security/risk',
                'viewPath': 'views/security/risk/index.vue',
                'type': 1,
                'name': '黑名单管理',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '黑名单管理',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '弹幕敏感字',
                'id': 1138,
                'parentId': 1136,
                'path': '/security/sensitive',
                'viewPath': 'views/security/sensitive/index.vue',
                'type': 1,
                'name': '弹幕敏感字',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '弹幕敏感字',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '系统安全设置',
                'id': 1139,
                'parentId': 1136,
                'path': '/security/bullet',
                'viewPath': 'views/security/bullet/index.vue',
                'type': 1,
                'name': '系统安全设置',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '系统安全设置',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '弹幕配置规则',
                'id': 1140,
                'parentId': 1136,
                'path': '/security/bullet_chat',
                'viewPath': 'views/security/bullet_chat/index.vue',
                'type': 1,
                'name': '弹幕配置规则',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '弹幕配置规则',
                    'keepAlive': true
                }
            }
        ]
    },
    {
        'moduleName': '影评管理',
        'id': 1144,
        'parentId': null,
        'path': '',
        'viewPath': '',
        'type': 0,
        'name': '影评管理',
        'icon': 'iconfont icon-bumen',
        'isShow': true,
        'meta': {
            'label': '影评管理',
            'keepAlive': true
        },
        'children': [{
                'moduleName': '影片评论',
                'id': 1145,
                'parentId': 1144,
                'path': '',
                'viewPath': '',
                'type': 0,
                'name': '影片评论',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '影片评论',
                    'keepAlive': true
                },
                'children': [{
                        'moduleName': '审核方式',
                        'id': 1146,
                        'parentId': 1145,
                        'path': '/comment/audit_type',
                        'viewPath': 'views/comment/comment_audit_type.vue',
                        'type': 1,
                        'name': '审核方式',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '审核方式',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '影评管理',
                        'id': 1147,
                        'parentId': 1145,
                        'path': '/comment/index',
                        'viewPath': 'views/comment/comment_index.vue',
                        'type': 1,
                        'name': '影评管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '影评管理',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '举报管理',
                        'id': 1148,
                        'parentId': 1145,
                        'path': '/comment/report',
                        'viewPath': 'views/comment/comment_report.vue',
                        'type': 1,
                        'name': '举报管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '举报管理',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '评论管理',
                        'id': 1149,
                        'parentId': 1145,
                        'path': '/comment/reply',
                        'viewPath': 'views/comment/comment_reply.vue',
                        'type': 1,
                        'name': '评论管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '评论管理',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '禁言管理',
                        'id': 1150,
                        'parentId': 1145,
                        'path': '/comment/banned',
                        'viewPath': 'views/comment/user_banned.vue',
                        'type': 1,
                        'name': '禁言管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '禁言管理',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '回复管理',
                        'id': 1151,
                        'parentId': 1145,
                        'path': '/comment/response',
                        'viewPath': 'views/comment/comment_response.vue',
                        'type': 1,
                        'name': '回复管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '回复管理',
                            'keepAlive': true
                        }
                    }
                ]
            },
            {
                'moduleName': '解说评论',
                'id': 1152,
                'parentId': 1144,
                'path': '',
                'viewPath': '',
                'type': 0,
                'name': '解说评论',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '解说评论',
                    'keepAlive': true
                },
                'children': [{
                        'moduleName': '评论管理',
                        'id': 1153,
                        'parentId': 1152,
                        'path': '/commentary/response',
                        'viewPath': 'views/comment/commentary/response.vue',
                        'type': 1,
                        'name': '评论管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '评论管理',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '回复管理',
                        'id': 1154,
                        'parentId': 1152,
                        'path': '/commentary/reply',
                        'viewPath': 'views/comment/commentary/reply.vue',
                        'type': 1,
                        'name': '回复管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '回复管理',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '举报管理',
                        'id': 1155,
                        'parentId': 1152,
                        'path': '/commentary/report',
                        'viewPath': 'views/comment/commentary/report.vue',
                        'type': 1,
                        'name': '举报管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '举报管理',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '禁言管理',
                        'id': 1156,
                        'parentId': 1152,
                        'path': '/commentary/banned',
                        'viewPath': 'views/comment/commentary/banned.vue',
                        'type': 1,
                        'name': '禁言管理',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '禁言管理',
                            'keepAlive': true
                        }
                    }
                ]
            },
            {
                'moduleName': '网盘评论',
                'id': 1186,
                'parentId': 1144,
                'path': '',
                'viewPath': '',
                'type': 0,
                'name': '网盘评论',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '网盘评论',
                    'keepAlive': true
                },
                'children': [{
                        'moduleName': '公告',
                        'id': 1196,
                        'parentId': 1186,
                        'path': '/drive/notice',
                        'viewPath': 'views/comment/drive/notice.vue',
                        'type': 1,
                        'name': '公告',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '公告',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '资讯',
                        'id': 1187,
                        'parentId': 1186,
                        'path': '/drive/info',
                        'viewPath': 'views/comment/drive/index.vue',
                        'type': 1,
                        'name': '资讯',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '资讯',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '资讯回复',
                        'id': 1188,
                        'parentId': 1186,
                        'path': '/drive/reply',
                        'viewPath': 'views/comment/drive/reply.vue',
                        'type': 1,
                        'name': '资讯回复',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '资讯回复',
                            'keepAlive': true
                        }
                    },
                    {
                        'moduleName': '资讯举报',
                        'id': 1189,
                        'parentId': 1186,
                        'path': '/drive/report',
                        'viewPath': 'views/comment/drive/report.vue',
                        'type': 1,
                        'name': '资讯举报',
                        'icon': 'iconfont icon-bumen',
                        'isShow': true,
                        'meta': {
                            'label': '资讯举报',
                            'keepAlive': true
                        }
                    }
                ]
            }
        ]
    },
    {
        'moduleName': '云盘管理',
        'id': 1190,
        'parentId': null,
        'path': '/drive/function',
        'viewPath': 'views/drive/function.vue',
        'type': 0,
        'name': '云盘管理',
        'icon': 'iconfont icon-bumen',
        'isShow': true,
        'meta': {
            'label': '云盘管理',
            'keepAlive': true
        },
        'children': [{
                'moduleName': '功能配置',
                'id': 1191,
                'parentId': 1190,
                'path': '/drive/function',
                'viewPath': 'views/drive/function/index.vue',
                'type': 1,
                'name': '功能配置',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '功能配置',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '数据监控',
                'id': 1192,
                'parentId': 1190,
                'path': '/drive/data',
                'viewPath': 'views/drive/data/index.vue',
                'type': 1,
                'name': '数据监控',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '数据监控',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '资源管理',
                'id': 1193,
                'parentId': 1190,
                'path': '/drive/resource',
                'viewPath': 'views/drive/resource/index.vue',
                'type': 1,
                'name': '资源管理',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '资源管理',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '用户管理',
                'id': 1194,
                'parentId': 1190,
                'path': '/drive/user',
                'viewPath': 'views/drive/user/index.vue',
                'type': 1,
                'name': '用户管理',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '用户管理',
                    'keepAlive': true
                }
            },
            {
                'moduleName': '批量转存',
                'id': 1195,
                'parentId': 1190,
                'path': '/drive/resave',
                'viewPath': 'views/drive/resave/index.vue',
                'type': 1,
                'name': '批量转存',
                'icon': 'iconfont icon-bumen',
                'isShow': true,
                'meta': {
                    'label': '批量转存',
                    'keepAlive': true
                }
            }
        ]
    }
]

export const menuGroup = []

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