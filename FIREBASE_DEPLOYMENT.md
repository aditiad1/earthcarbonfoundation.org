# Firebase Deployment Guide for EcoRegistry

## 🚀 **Firebase Hosting Setup for earthcarbonregistry.web**

### **Prerequisites**
1. Firebase CLI installed: `npm install -g firebase-tools`
2. Firebase project created at console.firebase.google.com
3. Custom domain `earthcarbonregistry.web` ready

### **Step 1: Initialize Firebase in Project**

```bash
cd /app/frontend

# Login to Firebase
firebase login

# Initialize Firebase project
firebase init hosting
```

**Configuration Options:**
- Select existing Firebase project
- Set public directory: `build`
- Configure as single-page app: `Yes`
- Set up automatic builds: `No`

### **Step 2: Create Firebase Configuration**

Create `/app/frontend/firebase.json`:
```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

### **Step 3: Update Environment Variables for Production**

Create `/app/frontend/.env.production`:
```bash
# Production Backend URL - Update with your actual backend
REACT_APP_BACKEND_URL=https://your-backend-api.com
```

### **Step 4: Build and Deploy**

```bash
# Install dependencies
yarn install

# Build for production
yarn build

# Deploy to Firebase
firebase deploy --only hosting

# Deploy with custom domain
firebase hosting:channel:deploy earthcarbonregistry --expires 7d
```

### **Step 5: Custom Domain Setup**

1. **In Firebase Console:**
   - Go to Hosting section
   - Click "Add custom domain"
   - Enter: `earthcarbonregistry.web`
   - Follow DNS verification steps

2. **DNS Configuration:**
   - Add A records provided by Firebase
   - Wait for DNS propagation (24-48 hours)

### **Step 6: SSL Certificate**
Firebase automatically provisions SSL certificates for custom domains.

### **Step 7: CI/CD Setup (Optional)**

Create `/app/.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'yarn'
          cache-dependency-path: 'frontend/yarn.lock'
      
      - name: Install dependencies
        run: |
          cd frontend
          yarn install
      
      - name: Build
        run: |
          cd frontend
          yarn build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-firebase-project-id
          channelId: live
        env:
          FIREBASE_CLI_PREVIEWS: hostingchannels
```

## 🛠 **Manual Deployment Commands**

### **Quick Deployment:**
```bash
# From /app/frontend directory
yarn build && firebase deploy --only hosting
```

### **Preview Deployment:**
```bash
# Test deployment with preview channel
firebase hosting:channel:deploy preview --expires 7d
```

### **Production Deployment:**
```bash
# Deploy to production
firebase deploy --only hosting --project production
```

## 📋 **Deployment Checklist**

- [ ] Firebase project created
- [ ] Custom domain verified
- [ ] Environment variables updated
- [ ] Build successful (`yarn build`)
- [ ] Firebase CLI configured
- [ ] DNS records updated
- [ ] SSL certificate active
- [ ] All routes working (SPA configuration)

## 🔧 **Troubleshooting**

### **Build Issues:**
```bash
# Clear cache and rebuild
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### **Deployment Issues:**
```bash
# Check Firebase status
firebase projects:list
firebase hosting:channel:list

# Re-authenticate if needed
firebase login --reauth
```

### **Custom Domain Issues:**
- Verify DNS propagation: `nslookup earthcarbonregistry.web`
- Check Firebase console for domain status
- Wait 24-48 hours for full propagation

## 📈 **Performance Optimizations**

1. **Code Splitting:** Already configured in React app
2. **Caching:** Set in firebase.json headers
3. **Compression:** Automatic with Firebase Hosting
4. **CDN:** Global CDN included with Firebase

## 🔐 **Security Headers**

Add to firebase.json for enhanced security:
```json
{
  "hosting": {
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          },
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          }
        ]
      }
    ]
  }
}
```

## 📞 **Support**

For deployment issues:
1. Check Firebase Console logs
2. Review build logs in terminal
3. Verify all environment variables
4. Test locally first: `yarn start`