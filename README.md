# Amazon Clone 2.0

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue?cacheSeconds=2592000" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow" />
  <img alt="Amazon Clone 2.0" src="https://img.shields.io/badge/Amazon-Clone%202.0-blue" />
  <a href="">
    <img alt="Template Video" src="https://img.shields.io/badge/Template-Video-brightgreen" />
  </a>
</p>

## Next.js + Tailwind CSS

Next.js is a React Production Framework which gives the best developer experience with all the features for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.


## How To Start
## Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


## Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```


## Environment variables

Open or create a `.env` file then edit add this setting

```
SKIP_PREFLIGHT_CHECK=true

# Authentication
GOOGLE_ID=key_goes_here
GOOGLE_SECRET=key_goes_here
NEXTAUTH_URL=http://localhost:3000

# Stripe
STRIPE_PUBLIC_KEY=key_goes_here
STRIPE_SECRET_KEY=key_goes_here

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=key_goes_here

HOST=http://localhost:3000

# Need to add this to... google cloud
# http://localhost:3000/api/auth/callback/google

# Firebase
FIREBASE_SERVICE_ACCOUNT_KEY=service_account_with_single_quote 
```

Use the link for more info on using Firebase ServiceAccount Key in .env: https://dev.to/vvo/how-to-add-firebase-service-account-json-files-to-vercel-ph5

## Author

👤 **Jayesh Saini**

- Website: 
- Github: [@jayeshsaini](https://github.com/jayeshsaini)

## Show your support

Give a ⭐️ if this project helped you!
