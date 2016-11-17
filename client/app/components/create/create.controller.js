class CreateController {
  constructor() {
    this.name = 'create';
    this.poll = {
      start: new Date(),
      end: new Date()
    };
    this.sortableOptions = {
      update: (e, ui) => {
        //
      },
      stop: (e, ui) => {
        //
      }
    }
    this.poll = {
      name: '',
      sendTo: '',
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
  }

  activateItem(index) {
    this.poll.queries.forEach((ele) => {
      ele.active = false;
    })
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
