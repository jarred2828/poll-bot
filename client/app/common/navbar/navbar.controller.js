class NavbarController {
  constructor($state) {
    this.name = 'navbar';
    this.$state = $state;
  }

  openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }
}

export default NavbarController;
