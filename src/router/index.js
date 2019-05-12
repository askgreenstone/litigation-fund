import Vue from 'vue'
import Router from 'vue-router'
import Params from '@/components/Params'
import Hello from '@/components/page/Hello'
import HelloEnglish from '@/components/page/HelloEnglish'
import AboutUs from '@/components/page/AboutUs'
import AboutUsEnglish from '@/components/page/AboutUsEnglish'
import Funding from '@/components/page/Funding'
import FundingEnglish from '@/components/page/FundingEnglish'
import Coverage from '@/components/page/Coverage'
import CoverageEnglish from '@/components/page/CoverageEnglish'
import Scenarios from '@/components/page/Scenarios'
import ScenariosEnglish from '@/components/page/ScenariosEnglish'
import ContactUs from '@/components/page/ContactUs'
import ContactUsEnglish from '@/components/page/ContactUsEnglish'
import Team from '@/components/page/Team'
import TeamEdit from '@/components/page/TeamEdit'
import Blog from '@/components/page/Blog'
import BlogEnglish from '@/components/page/BlogEnglish'
import BlogEdit from '@/components/page/BlogEdit'
import BlogDetail from '@/components/page/BlogDetail'
import InforList from '@/components/page/InforList'
import InforDetail from '@/components/page/InforDetail'
import Error from '@/components/page/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/Index-en',
      component: HelloEnglish
    },
    {
      path: '/AboutUs',
      component: AboutUs
    },
    {
      path: '/AboutUs-en',
      component: AboutUsEnglish
    },
    {
      path: '/Funding',
      component: Funding
    },
    {
      path: '/Funding-en',
      component: FundingEnglish
    },
    {
      path: '/Coverage',
      component: Coverage
    },
    {
      path: '/Coverage-en',
      component: CoverageEnglish
    },
    {
      path: '/Scenarios',
      component: Scenarios
    },
    {
      path: '/Scenarios-en',
      component: ScenariosEnglish
    },
    {
      path: '/Team',
      component: Team
    },
    {
      path: '/Team/TeamEdit',
      component: TeamEdit
    },
    {
      path: '/Blog',
      component: Blog
    },
    {
      path: '/Blog-en',
      component: BlogEnglish
    },
    {
      path: '/Blog/BlogEdit',
      component: BlogEdit
    },
    {
      path: '/Blog/BlogDetail',
      component: BlogDetail
    },
    {
      path: '/Contact',
      component: ContactUs
    },
    {
      path: '/Contact-en',
      component: ContactUsEnglish
    },
    {
      path: '/Contact/InforList',
      component: InforList,
    },
    {
      path: '/Contact/InforDetail',
      component: InforDetail,
    },
    {
      path: '/Params/:newsId/:newsTitle',
      component: Params,
      beforeEnter:(to,from,next)=>{
        // console.log('beforeEnter');
        // console.log(to);
        // console.log(from);
        // next(false);
        next();
      }
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ],
  // 窗口滚动到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
