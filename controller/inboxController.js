//get inbox page
function getInbox(req, res, next) {
  res.render('inbox');
}

module.exports = {
  getInbox,
};

//previous was like that
// function getInbox(req, res, next) {
//   res.render('inbox', {
//     title: 'Inbox - Chat Application',
//   });
// }
