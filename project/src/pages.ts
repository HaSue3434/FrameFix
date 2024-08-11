import Main from './assets/pages/main/main';
import Features from './assets/pages/main/main';
import Resource from './assets/pages/main/main';
import SignUp from './assets/pages/login/sign-up';
import CreateProject from './assets/pages/create-project/create-project';

export const pages = [
  { id: 0, path: '/', title: 'FrameFix', comp: Main },
  { id: 1, path: '/features', title: 'Features', comp: Features },
  { id: 2, path: '/resource', title: 'Resource', comp: Resource },
  { id: 3, path: '/sign-up', title: 'sign up', comp: Resource },
  { id: 4, path: '/create-project/project', title: 'create project', comp: Resource },
];

export  {
  Main,
  SignUp,
}