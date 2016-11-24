class NavbarController {
  constructor() {
    this.name = 'navbar';
  }

  openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }
}

export default NavbarController;
