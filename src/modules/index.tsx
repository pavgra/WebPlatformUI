import React from 'react';
import Module from './Module';
import { Route, Link } from 'react-router-dom';

function loadModules() {
  return [
    // navbar
    {
      order: 1,
      moduleSpecifier: 'notifications',
      path: null,
    },
    {
      order: 2,
      moduleSpecifier: 'authentication',
      path: null,
    },
    // pages
    {
      order: 1,
      path: '/',
      moduleSpecifier: 'home',
    },
    {
      order: 2,
      path: '/concept-sets',
      moduleSpecifier: 'concept-sets',
    },
    {
      order: 3,
      path: '/',
      moduleSpecifier: 'default',
    }
  ];
}

function buildPath(context: string | null, path: string) {
  return ((context || '') + path).replace('//', '/').replace(/\/$/, '');
}

async function bootstrap() {
  const appBarItems = [];
  const menuItems = [];
  const routes: Array<JSX.Element> = [];

  const moduleList = loadModules();

  moduleList.sort((a, b) => a.order - b.order);

  for (let m of moduleList) {
    const ModuleClazz: any = (await import('./' + m.moduleSpecifier)).default;
    const module: Module = new ModuleClazz();
    
    appBarItems.push(...await module.getAppBarItems());
    menuItems.push(...(await module.getMenuItems()).map(menuItem => ({ ...menuItem, link: buildPath(m.path, menuItem.link) })));
    
    const moduleRoutes = await module.getRoutes();

    moduleRoutes.forEach(r => {
      routes.push(<Route path={m.path + r.path} exact={true} component={r.component} />);
    });
  }

  return {
    appBarItems,
    menuItems,
    routes,
  };
}

export default bootstrap;