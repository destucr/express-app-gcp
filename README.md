
# Node.js App for Google App Engine

## **Description**
A Node.js app with controllers, routes, and middleware, deployable on Google App Engine.


## **Project Structure**
```plaintext
/app.yaml       # App Engine config
/app.js         # Main entry point
/routes/        # API routes
/controllers/   # Route logic
/middlewares/   # Custom middleware
```

## **Setup**

### **Install and Run Locally**
```bash
npm install
npm start
```

## **Deploy to App Engine**
1. Ensure `app.yaml` is configured:
   ```yaml
    runtime: nodejs20
    env_variables:
        NODE_ENV: production
    handlers:
    - url: /.*
      script: auto
   ```
2. Deploy:
   ```bash
   gcloud app deploy
   ```
