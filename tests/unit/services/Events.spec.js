import Service from '@/services/Events';

import createAxios from '../../fakes/axios';

const fixture = require('../../fixtures/events.json');

describe('Events', () => {
  it('fetches events', async () => {
    const client = createAxios(fixture);
    const service = new Service(client);
    const events = await service.list();
    expect(events[0].name).toEqual(fixture[0].name);
  });
});
