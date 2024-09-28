const createSendResponse = (user, statusCode, res) => {
    const token = signToken(user._id);
    const options  = {
      maxAge: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      secure: true,
      httpOnly: true,
    };
    res.cookie('jwt', token, options);
  
    if (process.env.NODE_ENV === 'production') {
      options.secure = true;
    }
  
    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  }