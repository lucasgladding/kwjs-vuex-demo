import events from '@/store/events';

const fixture = require('../../fixtures/events.json');

describe('events', () => {
  describe('actions', () => {
    it('loads', async () => {
      const commit = jest.fn();
      const service = {
        async list() {
          return Promise.resolve(fixture);
        },
      };
      await events.actions.load({ commit }, { service });
      expect(commit).toHaveBeenCalledWith('load');
      expect(commit).toHaveBeenCalledWith('update', fixture);
    });
  });

  describe('mutations', () => {
    it('loads', () => {
      const state = {
        loading: false,
        events: [],
      };
      events.mutations.load(state);
      expect(state.loading).toEqual(true);
    });

    it('updates', () => {
      const state = {
        loading: true,
        events: [],
      };
      events.mutations.update(state, fixture);
      expect(state.loading).toEqual(false);
      expect(state.events).toEqual(fixture);
    });
  });
});
