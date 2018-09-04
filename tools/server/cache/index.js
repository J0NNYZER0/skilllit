'use strict';

module.exports = {
  name: 'cache',
  register: async function (server, options) {

    // Create a route for example
    const add = async (a, b) => {

        return Number(a) + Number(b)
    }

    const accountCache = server.cache({
        cache: 'account',
        expiresIn: 10 * 1000,
        segment: 'customSegment',
        generateFunc: async (id) => {

            return await add(id.a, id.b);
        },
        generateTimeout: 2000
    })

    // etc ...
    await add()
  }
}
