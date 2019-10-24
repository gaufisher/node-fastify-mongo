const fastify = require('fastify')({logger: true});

fastify.register(require('./src/db/mongo-connector'), {
  url: 'mongodb://localhost:27017/'
});

fastify.register(require('./src/routes/arbitrary-file'));

fastify.listen(3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})