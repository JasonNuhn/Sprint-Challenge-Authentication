<!-- Answers to the Short Answer Essay Questions go here -->
Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    Answer: Middleware is a global function that allows for minimal coding and readability.  Rather than write session code for each link, you can establish the middleware and call it for each of the links.
    Sessions is when a user first logs in or register to a website and submitting their information to the server.
    Bcrypt is a function where it hashes the user's password.  This is to help secure users data from hackers who wish to steal the data.
    JWT or JSON web token is access tokens created that assert number of claims.  JWT consists of 3 parts, header, payload and a signature.

What does bcrypt do in order to prevent attacks?
    Answer: Bcrypt hashes the password by incorporating a salt to protect from attacks.  Bcrypt is an adaptive function where it iterate counts can be increaed to have a better chance of resisting attacks by attackers needing to increase their computation power on their end.

What are the three parts of the JSON Web Token?
    Answer: JWT consists of 3 parts, header, payload and a signature.