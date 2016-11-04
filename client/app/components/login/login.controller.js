class LoginController {
  static $inject = ['$state'];
  constructor($state) {
    this.name = 'login';
    this.$state = $state;
  }
  nextPage() {
    this.$state.go('home');
  }
}

export default LoginController;