import jwt from 'jsonwebtoken';

const authMidddleware = async (req, res, next) => {
  const { token } = req.headers;
  
  if (!token) {
    return res.json({
      success: false,
      message: "Not authorised, login again"
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = tokenDecode.id; // ✅ Correct place to attach user info
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Authentication error"
    });
  }
};

export default authMidddleware;
