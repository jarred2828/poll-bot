import angular from 'angular';

class CreateController {
  constructor() {
    this.name = 'create';
    this.isHeaderActive = false;
    this.poll = {
      start: new Date(),
      end: new Date()
    };
    this.sortableOptions = {
      update: (e, ui) => {
        //
      },
      stop: (e, ui) => {
        console.log(this.poll.queries);
      }
    }
    this.poll = {
      name: '',
      sendTo: [],
      immediate: 1,
      sendTime: new Date(),
      queries: [
        {
          type: 'multiple',
          active: false,
          question: '',
          options: [
            {
              name: 'Option 1'
            }
          ]
        }
      ]
    };
    this.allContacts = this.loadContacts();
    this.filterSelected = true;
  }

  loadContacts() {
    var contacts = [
      'Marina Augustine',
      'Oddr Sarno',
      'Nick Giannopoulos',
      'Narayana Garner',
      'Anita Gros',
      'Megan Smith',
      'Tsvetko Metzger',
      'Hector Simek',
      'Some-guy withalongalastaname'
    ];

    return contacts.map((c, index) => {
      var cParts = c.split(' ');
      var contact = {
        name: c,
        email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
        image: 'http://lorempixel.com/50/50/people?' + index
      };
      contact._lowername = contact.name.toLowerCase();
      return contact;
    });
  }

  querySearch(criteria) {
    return criteria ? this.allContacts.filter(this.createFilterFor(criteria)) : [];
  }

  createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return (contact) => {
      return (contact._lowername.indexOf(lowercaseQuery) != -1);;
    };
  }

  activateHeader() {
    this.poll.queries.forEach((ele) => {
      ele.active = false;
    })
    this.isHeaderActive = true;
  }

  activateItem(index) {
    this.poll.queries.forEach((ele) => {
      ele.active = false;
    })
    this.isHeaderActive = false;
    this.poll.queries[index].active = true;
  }

  addOption(index) {
    var length = this.poll.queries[index].options.length;
    this.poll.queries[index].options.push({ name: 'Option ' + (length + 1) });
  }

  removeOption(rootIndex, index) {
    if (this.poll.queries[rootIndex].options.length > 1) {
      this.poll.queries[rootIndex].options.splice(index, 1);
    }
  }

  changeType(index) {
    if (this.poll.queries[index].type == 'multiple' && !this.poll.queries[index].options) {
      this.poll.queries[index].options = [
        { name: 'Option 1' }
      ];
    } else if (this.poll.queries[index].type == 'short' && !this.poll.queries[index].answer) {
      this.poll.queries[index].answer = 'Short answer';
    } else if (this.poll.queries[index].type == 'attachment' && !this.poll.queries[index].file) {
      this.poll.queries[index].file = null;
    }
  }

  removeQuery(index) {
    this.poll.queries.splice(index, 1);
  }

  addQuery() {
    this.poll.queries.push({
      type: 'multiple',
      active: false,
      question: '',
      options: [
        {
          name: 'Option 1'
        }
      ]
    });
  }
}

export default CreateController;
