import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}
const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});
const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});
const Users2 = Loadable({
  loader: () => import('./views/Users/Users2'),
  loading: Loading,
});
const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});
const Article= Loadable({
  loader:()=> import('./views/Articles/article'),
   loading: Loading,
});
const Certificate = Loadable({
  loader:()=> import('./views/Certificates/certificate'),
   loading: Loading,
});
const HiringPartner= Loadable({
  loader:()=> import('./views/HiringPartner/hiringpartner'),
   loading: Loading,
});
const Mainskill = Loadable({
  loader:()=> import('./views/Skill/mainskill'),
   loading: Loading,
});
const Generalskill = Loadable({
  loader:()=> import('./views/Skill/generalskill'),
   loading: Loading,
});
const Detailskill = Loadable({
  loader:()=> import('./views/Skill/detailskill'),
   loading: Loading,
});
const examReport = Loadable({
  loader:()=> import('./views/examReport/examReport'),
   loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/exam', exact: true,  name: 'Users2', component: Users2 },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/user-profil/articles', exact:true, name:'Article', component:Article},
  { path: '/user-profil/certificates', exact:true, name:'Certificate', component:Certificate},
  { path: '/skill/mainskill', exact:true, name:'Mainskill', component:Mainskill},
  { path: '/skill/generalskill', exact:true, name:'Generalskill', component:Generalskill},
  { path: '/skill/detailskill', exact:true, name:'Detailskill', component:Detailskill},
  { path: '/exam/report/:id', exact:true, name:'examReport', component:examReport},
  { path: '/HiringPartner/hiringpartner', exact:true, name:'HiringPartner', component:HiringPartner}
];

export default routes;
