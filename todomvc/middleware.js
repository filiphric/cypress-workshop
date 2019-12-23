
module.exports = (req, res, next) => {  
  if (req.method === 'POST' && req.path === '/reset') {
    req.app.db.setState({
      todos: []
    });

    return res.sendStatus(200);
    
  }
  next();
};

