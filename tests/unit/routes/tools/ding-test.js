import { module, test } from 'qunit';
import { setupTest } from 'heka-client/tests/helpers';

module('Unit | Route | tools/ding', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tools/ding');
    assert.ok(route);
  });
});
