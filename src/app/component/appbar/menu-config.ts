// menu-config.ts

// import { icons } from './icons';

type MenuItem = {
  name: string;
  icon?: string;
  link: string;
  hasSubMenu?: boolean;
  subMenu?: {
    name: string;
    link: string;
  }[];
};

type MenuConfig = {
  [key: string]: MenuItem[];
};

export const menuConfig: MenuConfig = {
  all: [
    {
      name: 'Main Dashboard',
      link: '/dashboard',
    },
    // {
    //   name: 'Registration',
    //   icon: icons.registration,
    //   link: '',
    //   hasSubMenu: true,
    //   subMenu: [
    //     { name: 'Employer Registration', link: '/employer-registration' },
    //     { name: 'Employee Registration', link: '/employeeRegister' },
    //   ],
    // },
    
    // Other menu items for 'all' role
  ],
  // employee: [
  //   {
  //     name: 'Dashboard',
  //     icon: icons.dashboard,
  //     link: '/employee/dashboard',
  //   },
   
  // ],
  
  // Add other roles as needed
};
