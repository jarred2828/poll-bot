import angular from 'angular';

class HomeController {
  static $inject = ['$timeout', '$state'];
  constructor($timeout, $state) {
    this.$timeout = $timeout;
    this.$state = $state;
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
            id: 1,
            name: 'Sample Name',
            total: 30,
            completed: 20,
            status: 'Active'
          },
          {
            id: 2,
            name: 'Sample Name',
            total: 50,
            completed: 15,
            status: 'Scheduled'
          },
          {
            id: 3,
            name: 'Sample Name',
            total: 0,
            completed: 0,
            status: 'Draft'
          },
          {
            id: 4,
            name: 'Sample Name',
            total: 45,
            completed: 25,
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
  
  }
  
  logOrder(order) {
    
  }
  
  logPagination(page, limit) {
    
  }
}

export default HomeController;
