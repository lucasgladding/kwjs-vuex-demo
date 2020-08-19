<template>
  <div class="events">
    <h1 class="mb-2">Events</h1>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <div v-for="event in events" :key="event.name" class="border-b py-2">
        <div>{{ event.name }}</div>
        <div class="mb-2 text-gray-500">{{ date(event.starts_at) }}</div>
        <div>{{ event.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions, mapState } from 'vuex';

import Service from '../services/Events';

export default {
  computed: {
    ...mapState({
      loading: (state) => state.events.loading,
      events: (state) => state.events.events,
    }),
  },
  created() {
    const service = new Service();
    this.load({ service });
  },
  methods: {
    ...mapActions('events', [
      'load',
    ]),
    date(input) {
      if (!input) {
        return '';
      }
      return moment(input).format('MMMM DD, YYYY');
    },
  },
};
</script>
