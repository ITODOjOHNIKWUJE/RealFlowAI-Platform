# RealFlow AI MVP

A comprehensive AI automation platform for real estate and service-based businesses, featuring a React frontend and Flask backend.

## 🚀 Live Demo

**Frontend**: https://pznvqraq.manus.space

## 📋 Project Overview

RealFlow AI MVP is a complete web application that provides:

- **AI Chatbot Integration**: Automated customer service and lead qualification
- **Booking Automation**: Streamlined appointment scheduling
- **Email & SMS Automation**: Targeted communication campaigns
- **Document Automation**: Automated contract and document generation
- **CRM Integration**: Seamless data management
- **Client Portal**: Secure project management and communication

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide icons
- **State Management**: React Query for API state
- **Routing**: React Router DOM

### Backend (Flask + Python)
- **Framework**: Flask
- **Database**: SQLite (production-ready)
- **Authentication**: Session-based with secure cookies
- **API**: RESTful endpoints with CORS support
- **Production Server**: Gunicorn

## 📁 Project Structure

```
realflow_ai_mvp/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── lib/             # API and utility functions
│   │   └── App.tsx          # Main application component
│   ├── dist/                # Production build
│   └── package.json
├── backend/                 # Flask application
│   ├── src/
│   │   ├── main.py          # Application entry point
│   │   └── models/          # Database models
│   ├── venv/                # Python virtual environment
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # Environment configuration
└── DEPLOYMENT_GUIDE.md      # Deployment instructions
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and pnpm
- Python 3.11+
- Git

### Frontend Setup
```bash
cd frontend
pnpm install
pnpm run dev
```
Access at: http://localhost:5173

### Backend Setup
```bash
cd backend
python3.11 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
./start_dev.sh  # On Windows: python src/main.py
```
Access at: http://localhost:5000

## 🔐 Demo Credentials

**Admin Login**:
- Email: admin@realflowai.com
- Password: admin123

## 🌟 Features

### Public Pages
- **Home**: Company overview and value proposition
- **Services**: Detailed service offerings
- **Pricing**: Subscription plans and pricing
- **Contact**: Lead capture form with validation

### Client Portal
- **Authentication**: Secure login system
- **Dashboard**: Project status and progress tracking
- **Resources**: Access to project files and documents
- **Messaging**: Direct communication with the team

### Admin Features
- **Lead Management**: View and manage contact form submissions
- **Client Management**: User authentication and session management
- **Project Tracking**: Monitor client project progress

## 🛠️ Development

### Available Scripts

#### Frontend
```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run preview  # Preview production build
```

#### Backend
```bash
./start_dev.sh         # Start development server
./start_production.sh  # Start production server with Gunicorn
```

### API Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/user` - Get current user

#### Leads
- `POST /api/leads` - Submit contact form

#### Client Portal
- `GET /api/client/resources` - Get client resources
- `GET /api/client/messages` - Get client messages
- `POST /api/client/messages` - Send message
- `GET /api/client/project` - Get project status

## 🚀 Deployment

### Frontend (Deployed)
The frontend is already deployed and accessible at: https://pznvqraq.manus.space

### Backend Deployment Options

1. **Local/VPS Deployment**
   - Upload backend folder to server
   - Install dependencies: `pip install -r requirements.txt`
   - Run: `./start_production.sh`

2. **Cloud Platforms**
   - **Heroku**: Add Procfile and deploy via Git
   - **DigitalOcean**: Use App Platform with auto-deploy
   - **AWS/GCP**: Deploy using container services

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```
DATABASE_URL=sqlite:///site.db
SECRET_KEY=your_secret_key_here
```

#### Frontend
Update `API_URL` in `src/lib/api.tsx` for production backend URL.

## 🧪 Testing

### Manual Testing Completed
- ✅ All pages render correctly
- ✅ Navigation works properly
- ✅ Contact form submission
- ✅ Client portal authentication
- ✅ API integration functional
- ✅ Responsive design verified
- ✅ Production build successful

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software developed for RealFlow AI.

## 📞 Support

For technical support or questions:
- Check the deployment guide
- Review the API documentation
- Contact the development team

---

**Status**: ✅ Production Ready
**Last Updated**: December 2024
**Version**: 1.0.0

