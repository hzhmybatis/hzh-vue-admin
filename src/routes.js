import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Withdraw from './views/withdraw/Withdraw.vue'
import MonthSettle from './views/settle/MonthSettle.vue'
import Transfer from './views/settle/Transfer.vue'
import CenterAccount from './views/center/CenterAccount.vue'
import CenterBill from './views/center/CenterBill.vue'
import EchartsWithdraw from './views/charts/EchartsWithdraw.vue'
import EchartsTransfer from './views/charts/EchartsTransfer.vue'
import EchartsCenter from './views/charts/EchartsCenter.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: 'Welcome',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '日结',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/withdraw', component: Withdraw, name: '日结提现查询' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '月结',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/monthSettle', component: MonthSettle, name: '月结查询' },
            { path: '/transfer', component: Transfer, name: '打款操作台' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '中台',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/center', component: CenterAccount, name: '中台数据查询' },
            { path: '/centerBill', component: CenterBill, name: '中台对账' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '数据分析',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echartsWithdraw', component: EchartsWithdraw, name: '日结提现分析' },
            { path: '/echartsTransfer', component: EchartsTransfer, name: '月结打款分析' },
            { path: '/echartsCenter', component: EchartsCenter, name: '中台报表分析' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;