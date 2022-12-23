const user = require('../model/user')
class AuthController {
  home(req, res) {
    //example use monggose user.find()
    res.status(200).json({
      status: 'success',
      code: 200,
      data: [
        {
          id: 1,
          name: 'John Doe',
        },
      ],
      message: 'Home',
    })
  }
}
module.exports = new AuthController()
