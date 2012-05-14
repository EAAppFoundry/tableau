/* put controller actions here */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.detail = function(req, res){
    res.render('detail', {title: 'Detail'});
}