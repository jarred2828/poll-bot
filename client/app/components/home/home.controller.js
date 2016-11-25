import angular from 'angular';

var moment = require('moment');

class HomeController {
  static $inject = ['$timeout', '$state'];
  constructor($timeout, $state) {
    this.$timeout = $timeout;
    this.$state = $state;
    this.init();
  }

  init() {
    angular.extend(this, {
      data: [
        {
          id: 1,
          name: 'Sample Name 1',
          total: 30,
          completed: 20,
          status: 'Active',
          created: '2016-11-25',
          updated: '2016-11-25'
        },
        {
          id: 2,
          name: 'Sample Name 2',
          total: 50,
          completed: 15,
          status: 'Completed',
          created: '2016-11-10',
          updated: '2016-11-12'
        },
        {
          id: 3,
          name: 'Sample Name 3',
          total: 0,
          completed: 0,
          status: 'Draft',
          created: '2016-11-24',
          updated: '2016-11-25'
        },
        {
          id: 4,
          name: 'Sample Name 4',
          total: 45,
          completed: 25,
          status: 'Cancelled',
          created: '2016-11-15',
          updated: '2016-11-18'
        }
      ]
    });
  }

  momentDate(poll) {
    if (poll.status == 'Draft') {
      return `Last edit on ${moment(poll.updated).fromNow()}`;
    } else if (poll.status == 'Active') {
      return `Created ${moment(poll.updated).fromNow()}`;
    } else if (poll.status == 'Cancelled') {
      return `Cancelled on ${moment(poll.updated).fromNow()}`;
    } else {
      return `Completed on ${moment(poll.updated).fromNow()}`;
    }
  }

  completed(poll) {
    return poll.status == 'Completed' || poll.status == 'Cancelled';
  }
}

export default HomeController;
