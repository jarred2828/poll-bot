class DetailController {
  static $inject = ['$stateParams'];
  constructor($stateParams) {
    this.name = 'detail';
    this.id = $stateParams.id;
  }
}

export default DetailController;