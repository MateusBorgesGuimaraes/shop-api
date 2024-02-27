const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        console.error('Erro ao verificar o token:', err);
        return res.status(403).json('Token invalido');
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json('Voce não esta autenticado');
  }
};

const verifyTokenProd = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        console.error('Erro ao verificar o token:', err);
        return res.status(403).json('Token invalido');
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json('Voce não esta autenticado');
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Voce não pode fazer isso');
    }
  });
};

const verifyTokenAndAuthorizationUpdateCart = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.body.userId || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Voce não pode fazer isso');
    }
  });
};

const verifyTokenAndAuthorizationGetCart = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.userId || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Você não pode fazer isso');
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyTokenProd(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Voce não pode fazer isso');
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorizationGetCart,
  verifyTokenAndAuthorizationUpdateCart,
  verifyTokenProd,
};
