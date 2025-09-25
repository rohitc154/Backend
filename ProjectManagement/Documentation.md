# Project Management

Validation Tools :

- Zod
- yup
- express-validator

## Registering a User

- Input data
- Validate Data
- Check in DB, If user already exist
- Save the new user (AT, RT, GT, Send Email)
- User Verification
- Send response back to the request

## How to login :

- Take input from user
- Validate
- if user exists :
  - Check password is correct
  - Generate TOKENS
  - Send tokens in cookies

Note : Express don't have coookies access directly

## Decoding Authentication middleware

- (req, res) => {} --> req = {}
- First we'll intercept the request in the middleware
- Access the accessToken
- Decode the information out
- now, inject the information in the request
