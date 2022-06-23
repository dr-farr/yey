import { objectType } from 'nexus';

export const Campaign = objectType({
  name: 'Campaign',
  definition(t) {
    t.int('id');
    t.string('name');
  },
});
