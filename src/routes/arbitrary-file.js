async function routes (fastify, options) {
  const database = fastify.mongo.db('nothing_to_see_here');
  const collection = database.collection('move_along')

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  });

  fastify.get('/arbitrary/path/:id', async (request, reply) => {
    const result = await collection.findOne({ _id: request.params.id });
    if (result.value === null) {
      throw new Error('This is not the data you\'re looking for.');
    }
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(result);
  });
}

module.exports = routes;