import Main from './assets/pages/main/main';
import Features from './assets/pages/main/main';
import Resource from './assets/pages/main/main';
import Signup from './assets/pages/sign-up/sign';

export const pages = [
  { id: 0, path: '/', title: 'FrameFix', comp: Main },
  { id: 1, path: '/features', title: 'Features', comp: Features },
  { id: 2, path: '/resource', title: 'Resource', comp: Resource },
  { id: 3, path: '/sign-up', title: 'Sign up', comp: Signup },
];