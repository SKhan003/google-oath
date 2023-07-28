passport js  documentation
user login

1. copy '/login'  route code and paste inside index.js
2. make a login page and add '/login/federated/google' in <a> tag.
3. now require passport and google strategy 
4. create  get  route for '/login/federated/google'
5. register your app on google cloud platform   console.
6. create .env file and paste the folling client ID and client secret.
7. now copy googleStrategy code and paste inside index.js , remove my sql code, and add mongoDB code and add 'email' inside scope option.
8. Add express-session inside app.js
9. add redirect back to app route inside index.js
10. create userSchema inside user.js   