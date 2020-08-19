import axios from 'axios';

const services = require('../config/services.json');

class Events {
  constructor(client = axios) {
    this.client = client;
  }

  async list() {
    const response = await this.client.get(`${services.host}/events`);
    return response.data;
  }
}

export default Events;
