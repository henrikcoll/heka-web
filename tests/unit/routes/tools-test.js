import { module, test } from 'qunit';
import { setupTest } from 'heka-client/tests/helpers';

module('Unit | Route | tools', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tools');
    assert.ok(route);
  });
});
