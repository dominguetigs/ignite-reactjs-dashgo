import { createServer, Factory, Model } from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(idx) {
          return `User ${idx + 1}`;
        },
        email(idx) {
          return `user${idx + 1}@email.com`;
        },
        createdAt() {
          return '25/10/2022';
        },
      }),
    },

    seeds(server) {
      server.createList('user', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      // to not conflict with next api routes
      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
