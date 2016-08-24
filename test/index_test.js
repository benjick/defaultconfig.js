import { strictEqual } from 'assert';
import defaultconfig from '../';

const config = {
  user: {
    name: 'max',
  },
};

describe('Test', () => {
  it('should return a function', () => {
    const configFactory = defaultconfig(config);
    strictEqual(typeof (configFactory), 'function');
  });

  it('should apply default options where it\'s missing', () => {
    const configFactory = defaultconfig(config);
    const newConfig = configFactory({ lastName: 'malm' });
    strictEqual(newConfig.user.name, 'max');
  });

  it('should overwrite default options when they are supplied', () => {
    const configFactory = defaultconfig(config);
    const newConfig = configFactory({ user: { name: 'benjick' } });
    strictEqual(newConfig.user.name, 'benjick');
  });

  it('should handle many configurations', () => {
    const configFactory = defaultconfig(config);
    const newConfig = configFactory({ user: { name: 'benjick' } }, { user: { lastName: 'malm' } });
    strictEqual(newConfig.user.name, 'benjick');
    strictEqual(newConfig.user.lastName, 'malm');
  });
});
