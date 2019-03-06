export default interface Module {
  getAppBarItems(): Array<JSX.Element>,
  getMenuItems(): Array<{ label: string, icon: JSX.Element, link: string }>,
  getRoutes(): Array<{ path: string, exact?: Boolean, component: React.ComponentType<any> }>,
  init(): void,
}