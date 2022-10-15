import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service, inject } from '@ember/service';

export default class RequestFormComponent extends Component {
  @service ding;
  @inject notify;
  @tracked email = '';

  @action async request() {
    if (this.email === '') {
      return this.notify.alert('Please provide an email');
    }
    await this.ding.signup(this.email);
    this.notify.info('Check your email');
    this.email = '';
  }
}
