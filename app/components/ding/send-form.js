import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service, inject } from '@ember/service';

export default class SendFormComponent extends Component {
  @service ding;
  @inject notify;
  @tracked token = '';
  @tracked subject = '';
  @tracked message = '';

  @action async send() {
    if (this.subject === '' && this.message === '') {
      return this.notify.alert('Please provide a subject or a message');
    }

    await this.ding.send(this.token, this.subject, this.message);

    this.notify.info('Check your email');

    this.token = '';
    this.subject = '';
    this.message = '';
  }
}
