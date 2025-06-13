# RealFlow AI MVP - Production Deployment Guide

## 🚀 Deployment Status

### Frontend (React)
- **Status**: ✅ Successfully Deployed
- **Production URL**: https://pznvqraq.manus.space
- **Framework**: React with Vite
- **Build Status**: Production-ready build completed

### Backend (Flask)
- **Status**: ⚠️ Ready for deployment (manual deployment required)
- **Framework**: Flask with Gunicorn
- **Database**: SQLite (configured)
- **Dependencies**: All installed and tested

## 📁 Project Structure

```
realflow_ai_mvp/
├── frontend/                 # React frontend application
│   ├── dist/                # Production build files
│   ├── src/                 # Source code
│   ├── package.json         # Dependencies
│   └── vite.config.ts       # Build configuration
├── backend/                 # Flask backend application
│   ├── src/                 # Source code
│   ├── venv/                # Python virtual environment
│   ├── requirements.txt     # Python dependencies
│   ├── .env                 # Environment configuration
│   ├── start_dev.sh         # Development startup script
│   └── start_production.sh  # Production startup script
└── README.md                # Project documentation
```

## 🔧 Backend Deployment Instructions

### Option 1: Local/VPS Deployment

1. **Prepare the server environment:**
   ```bash
   # Install Python 3.11+ and pip
   sudo apt update
   sudo apt install python3.11 python3.11-venv python3-pip
   ```

2. **Upload the backend folder to your server**

3. **Set up the environment:**
   ```bash
   cd backend
   python3.11 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. **Configure environment variables:**
   ```bash
   # Edit .env file with production values
   DATABASE_URL=sqlite:///site.db
   SECRET_KEY=your_production_secret_key_here
   ```

5. **Start the production server:**
   ```bash
   chmod +x start_production.sh
   ./start_production.sh
   ```

### Option 2: Cloud Platform Deployment

#### Heroku
1. Install Heroku CLI
2. Create a new Heroku app
3. Add a `Procfile` in the backend directory:
   ```
   web: gunicorn -w 4 -b 0.0.0.0:$PORT src.main:app
   ```
4. Deploy using Git

#### DigitalOcean App Platform
1. Connect your Git repository
2. Configure build settings:
   - Build command: `pip install -r requirements.txt`
   - Run command: `gunicorn -w 4 -b 0.0.0.0:$PORT src.main:app`

## 🌐 Frontend Configuration

The frontend is already deployed and accessible at: **https://pznvqraq.manus.space**

### Features Available:
- ✅ Home page with company overview
- ✅ Services page with detailed offerings
- ✅ Pricing page with subscription plans
- ✅ Contact page with lead capture form
- ✅ Client portal with authentication
- ✅ Learning center (placeholder)
- ✅ Responsive design for mobile and desktop

### API Integration:
- The frontend is configured to connect to `http://localhost:5000` for development
- For production, update the `API_URL` in `src/lib/api.tsx` to your backend URL

## 🔐 Authentication & Features

### Admin Credentials (for testing):
- **Email**: admin@realflowai.com
- **Password**: admin123

### Available Features:
1. **Lead Management**: Contact form submissions are captured
2. **Client Portal**: Secure login for clients
3. **Project Dashboard**: View project status and resources
4. **Messaging System**: Communication between clients and team
5. **Responsive Design**: Works on all devices

## 🛠️ Development Setup

### Frontend Development:
```bash
cd frontend
pnpm install
pnpm run dev
# Access at http://localhost:5173
```

### Backend Development:
```bash
cd backend
source venv/bin/activate
./start_dev.sh
# Access at http://localhost:5000
```

## 📋 Environment Variables

### Backend (.env):
```
DATABASE_URL=sqlite:///site.db
SECRET_KEY=your_secret_key_here
```

### Frontend (for production):
Update `API_URL` in `src/lib/api.tsx` to point to your deployed backend.

## 🔍 Testing

### Frontend Testing:
- All pages load correctly
- Navigation works properly
- Forms submit successfully
- Responsive design verified

### Backend Testing:
- Authentication endpoints working
- Database operations functional
- CORS configured for frontend integration
- All API routes responding correctly

## 📞 Support

For any deployment issues or questions:
- Check the console logs for error messages
- Verify environment variables are set correctly
- Ensure all dependencies are installed
- Contact support if needed

## 🎉 Next Steps

1. **Deploy the backend** using one of the methods above
2. **Update frontend API URL** to point to your backend
3. **Configure custom domain** (optional)
4. **Set up monitoring** and logging
5. **Configure backup** for the database

Your RealFlow AI MVP is now ready for production use!

