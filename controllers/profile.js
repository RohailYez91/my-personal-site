module.exports = {
  index,
};

function index(req, res, next) {
  res.render('profile/index', { title: 'Profile' });
}
