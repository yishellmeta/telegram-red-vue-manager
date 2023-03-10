import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path(.*)',
      component: () => import('@/views/redirect/index')
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },

  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '*',
    component: () => import('@/views/error-page/404'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [{
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '',
      component: () => import('@/views/dashboard/index'),
      name: '?????????????????????',
      meta: {
        title: '?????????????????????',
        icon: 'user',
        affix: true
      },

    }]
  },
  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/index',
    children: [{
      path: 'index',
      component: () => import('@/views/ums/index'),
      name: 'userList',
      meta: {
        title: '????????????',
        icon: 'peoples',
        affix: true
      },
    }]
  },
  {
    path: '/ums-autoList',
    component: Layout,
    redirect: '/ums/autoList',
    children: [{
      path: 'index',
      component: () => import('@/views/ums/autoList'),
      name: 'userAutoList',
      meta: {
        title: '????????????',
        icon: 'peoples',
        affix: true
      },
    }]
  },
  {
    path: '/ums-userFlowList',
    component: Layout,
    redirect: '/ums/userFlowList',
    children: [{
      path: 'index',
      component: () => import('@/views/ums/userFlowList'),
      name: 'userFlowList',
      meta: {
        title: '????????????',
        icon: 'peoples',
        affix: true
      },
    }]
  },
  {
    path: '/ums-recharge',
    component: Layout,
    redirect: '/ums/recharge',
    children: [{
      path: 'recharge',
      component: () => import('@/views/ums/recharge'),
      name: 'rechargeAddress',
      meta: {
        title: '????????????',
        icon: 'money',
        affix: true
      }
    }]
  }, {
    path: '/ums-withdraw',
    component: Layout,
    redirect: '/ums/withdraw',
    children: [{
      path: 'withdraw',
      component: () => import('@/views/ums/withdraw'),
      name: 'withdrawAddress',
      meta: {
        title: '????????????',
        icon: 'clipboard',
        affix: true
      }
    }]
  },
  {
    path: '/nms',
    component: Layout,
    redirect: '/nms/index',
    children: [{
      path: 'index',
      component: () => import('@/views/nms/index'),
      name: 'sendOrderList',
      meta: {
        title: '????????????',
        icon: 'nested'
      }
    }]
  },
  {
    path: '/vms',
    component: Layout,
    redirect: '/vms/index',
    children: [{
        path: 'index',
        component: () => import('@/views/vms/index'),
        name: 'rechargeList',
        meta: {
          title: '????????????',
          icon: 'money'
        }
      },


    ]
  },
  {
    path: '/ams',
    component: Layout,
    redirect: '/ams/index',
    children: [{
      path: 'index',
      component: () => import('@/views/ams/index'),
      name: 'withdrawList',
      meta: {
        title: '????????????',
        icon: 'clipboard'

      }
    }, ]
  },

  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/index',
    children: [{
      path: 'index',
      component: () => import('@/views/oms/index'),
      name: 'userFlowList',
      meta: {
        title: '????????????',
        icon: 'list'
      }
    }, ]
  },
  {
    path: '/config',
    component: Layout,
    redirect: '/config/index',
    children: [{
      path: 'index',
      component: () => import('@/views/config/index'),
      name: 'config',
      meta: {
        title: '????????????',
        icon: 'example'
      }
    }, ]
  }, {
    path: '/groupList',
    component: Layout,
    redirect: '/group/index',
    children: [{
      path: 'index',
      component: () => import('@/views/group/index'),
      name: 'groupList',
      meta: {
        title: '????????????',
        icon: 'fullscreen'
      }
    }, ]
  }, {
    path: '/bobmUserList',
    component: Layout,
    redirect: '/bobmUser/index',
    children: [{
      path: 'index',
      component: () => import('@/views/bobmUser/index'),
      name: 'bobmUserList',
      meta: {
        title: '????????????',
        icon: 'chart'
      }
    }, ]
  }, {
    path: '/role',
    component: Layout,
    redirect: '/role/index',
    children: [{
      path: 'index',
      component: () => import('@/views/role/index'),
      name: 'adminList',
      meta: {
        title: '?????????',
        icon: 'people'
      }
    }, ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }

]

const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
