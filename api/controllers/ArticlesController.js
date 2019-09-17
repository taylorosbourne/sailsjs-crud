/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: (req, res) => (
        Articles.find({}).exec((err, articles) => {
            if (err) {
                res.send(500, { err })
            }
            res.view('pages/list', { articles: articles })
        })
    ),
    add: (req, res) => res.view('pages/add'),
    create: (req, res) => {
        const title = req.body.title;
        const body = req.body.body;
        Articles.create({ title, body }).exec((err) => {
            if (err) {
                res.send(500, { err });
            }
            res.redirect('/articles/list');
        })
    },
    delete: (req, res) => {
        Articles.destroy({ id: req.params.id }).exec((err) => {
            if (err) {
                res.send(500, { err });
            }
            res.redirect('/articles/list');
        })
        return false;
    },
    edit: (req, res) => {
        Articles.findOne({ id: req.params.id }).exec((err, article) => {
            if (err) {
                res.send(500, { err })
            }
            res.view('pages/edit', { article })
        })
    },
    update: (req, res) => {
        const title = req.body.title;
        const body = req.body.body;
        Articles.update({ id: req.params.id }, { title, body }).exec((err) => {
            if (err) {
                res.send(500, { err });
            }
            res.redirect('/articles/list');
        })
    }
};

