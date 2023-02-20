const authorize = async (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).send({
          success: false,
          message: "Access denied"
        })
      }
      next();
    };
    
    module.exports = authentication;   
