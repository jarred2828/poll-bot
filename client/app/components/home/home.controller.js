import angular from 'angular';

class HomeController {
  static $inject = ['$timeout'];
  constructor($timeout) {
    this.$timeout = $timeout;
    this.init();
  }

  init() {
    angular.extend(this, {
      name: 'home',
      selected: [],
      limitOptions: [5, 10, 15],
      query: {
        order: 'name',
        limit: 5,
        page: 1
      },
      desserts: {
        count: 4,
        data: [
          {
            name: 'Sample Name',
            percentage: 50,
            status: 'Active'
          },
          {
            name: 'Sample Name',
            percentage: 0,
            status: 'Scheduled'
          },
          {
            name: 'Sample Name',
            percentage: 0,
            status: 'Draft'
          },
          {
            name: 'Sample Name',
            percentage: 70,
            status: 'Completed'
          }
        ]
      }
    });
  }
  
  toggleLimitOptions() {
    this.limitOptions = this.limitOptions ? undefined : [5, 10, 15];
  }
  
  loadStuff() {
    this.promise = this.$timeout(() => {
      // loading
    }, 2000);
  }
  
  logItem(item) {
    console.log(this.selected);
    console.log(item, 'was selected');
  }
  
  logOrder(order) {
    console.log('order: ', order);
  }
  
  logPagination(page, limit) {
    console.log('page: ', page);
    console.log('limit: ', limit);
  }
}

export default HomeController;
