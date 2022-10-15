import { module, test } from 'qunit';
import { setupTest } from 'heka-client/tests/helpers';

module('Unit | Service | ding', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:ding');
    assert.ok(service);
  });
});
