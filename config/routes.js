/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /': { view: 'pages/homepage' },
  'GET /articles/list': {controller: 'ArticlesController', action: 'list'},
  'GET /articles/add': {controller: 'ArticlesController', action: 'add'},
  'POST /articles/create': {controller: 'ArticlesController', action: 'create'},
  'POST /articles/delete/:id': {controller: 'ArticlesController', action: 'delete'},
  'GET /articles/edit/:id': {controller: 'ArticlesController', action: 'edit'},
  'POST /articles/update/:id': {controller: 'ArticlesController', action: 'update'},


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
