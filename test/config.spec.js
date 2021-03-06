import assert from 'assert';
import { assertAsync } from './helpers/helpers';
import settings from './helpers/settings';
import Crowd from '../src/client';

describe('Crowd config resource', () => {
  let crowd = new Crowd(settings.crowd);

  it('should allow fetching cookie config', (done) => {
    assertAsync(crowd.config.cookie(), (res) => {
      assert.notStrictEqual(res.secure, undefined);
      assert.notStrictEqual(res.name, undefined);
    }).then(done, done);
  });
});
