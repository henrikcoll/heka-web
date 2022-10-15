import Component from '@glimmer/component';

export default class ContainerComponent extends Component {
  get size() {
    return this.args.size ?? 'default';
  }
}
