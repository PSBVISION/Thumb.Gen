<p align="center">
  <img src="client/public/logo.svg" alt="ThumbGen Logo" width="80" height="80" />
</p>

<h1 align="center">ThumbGen</h1>

<p align="center">
  <strong>AI-Powered Thumbnail Generator for Content Creators</strong>
</p>

<p align="center">
  Stop wasting hours on design. Get high-converting thumbnails in seconds with our advanced AI.
</p>

<p align="center">
  <a href="https://thumbgen.psbvision.engineer">🌐 Live Demo</a> •
  <a href="#features">✨ Features</a> •
  <a href="#tech-stack">🛠️ Tech Stack</a> •
  <a href="#getting-started">🚀 Getting Started</a> •
  <a href="#screenshots">📸 Screenshots</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express-5.2-000000?style=flat-square&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Latest-47A248?style=flat-square&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Google_AI-Gemini-4285F4?style=flat-square&logo=google" alt="Google AI" />
</p>

---

## 🎯 Overview

**ThumbGen** is a powerful AI-powered thumbnail generator designed specifically for YouTubers, content creators, and digital marketers. Generate eye-catching, click-worthy thumbnails in seconds without any design skills required.

### Why ThumbGen?

- 🚀 **Fast Generation** - Create professional thumbnails in seconds, not hours
- 🎨 **No Design Skills Needed** - AI handles all the creative work
- 📈 **High CTR Templates** - Proven designs that increase click-through rates
- 🎯 **Multiple Styles** - From bold & graphic to minimalist and photorealistic

---

## ✨ Features

### 🖼️ AI Thumbnail Generation
Generate stunning thumbnails using Google's Gemini AI with customizable options:

| Feature | Description |
|---------|-------------|
| **Multiple Styles** | Bold & Graphic, Minimalist, Photorealistic, Illustrated, Tech/Futuristic |
| **Aspect Ratios** | 16:9 (YouTube), 1:1 (Instagram), 9:16 (Shorts/Reels) |
| **Color Schemes** | Vibrant, Sunset, Ocean, Forest, Purple Dream, Monochrome, Neon, Pastel |
| **Text Overlay** | Automatic text overlay generation |

### 🔐 User Authentication
- Secure session-based authentication
- Password encryption with bcrypt
- Persistent sessions with MongoDB store

### ☁️ Cloud Storage
- Automatic image upload to Cloudinary
- Secure and reliable image hosting
- Fast CDN delivery

### 📱 Responsive Design
- Fully responsive across all devices
- Beautiful animations with Framer Motion
- Smooth scrolling with Lenis

### 🎬 YouTube Preview
- Preview your thumbnails in a realistic YouTube interface
- See how your thumbnail will appear to viewers

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite 7** | Build Tool |
| **Tailwind CSS 4** | Styling |
| **Motion (Framer)** | Animations |
| **React Router 7** | Routing |
| **Axios** | HTTP Client |
| **React Hot Toast** | Notifications |
| **Lenis** | Smooth Scrolling |
| **Lucide React** | Icons |

### Backend
| Technology | Purpose |
|------------|---------|
| **Express 5** | Web Framework |
| **TypeScript** | Type Safety |
| **MongoDB** | Database |
| **Mongoose** | ODM |
| **Google Gemini AI** | Image Generation |
| **Cloudinary** | Image Storage |
| **bcrypt** | Password Hashing |
| **express-session** | Session Management |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB instance
- Google AI API key
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/psbvision/ThumbGen.git
   cd ThumbGen
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Configure environment variables**

   **Client** (`client/.env`):
   ```env
   VITE_API_URL=http://localhost:8080
   ```

   **Server** (`server/.env`):
   ```env
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   NODE_ENV=development
   
   # Google AI Configuration
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Start the development servers**
   ```bash
   # Start the backend server (from server directory)
   npm run server

   # Start the frontend (from client directory)
   npm run dev
   ```

5. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:8080`

---

## 📁 Project Structure

```
ThumbGen/
├── client/                 # React Frontend
│   ├── public/             # Static assets
│   │   └── assets/         # Images, icons
│   └── src/
│       ├── assets/         # TypeScript assets & types
│       ├── components/     # Reusable UI components
│       ├── configs/        # API configuration
│       ├── context/        # React Context (Auth)
│       ├── data/           # Static data (features, pricing)
│       ├── pages/          # Route pages
│       └── sections/       # Homepage sections
│
├── server/                 # Express Backend
│   ├── configs/            # Database & AI configs
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Auth middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── tmp/                # Temporary files
│
└── README.md
```

---

## 🔗 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/logout` | User logout |
| GET | `/api/auth/check` | Check auth status |

### Thumbnails
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/thumbnail/generate` | Generate new thumbnail |
| GET | `/api/user/thumbnail/:id` | Get specific thumbnail |
| GET | `/api/user/thumbnails` | Get all user thumbnails |

---

## 💰 Pricing Plans

| Plan | Price | Features |
|------|-------|----------|
| **Basic** | $29/mo | 50 thumbnails, Basic templates, Standard resolution |
| **Pro** | $79/mo | Unlimited thumbnails, Premium templates, 4K resolution, A/B testing |
| **Enterprise** | $199/mo | Everything in Pro + API access, Team collaboration, Custom branding |

---

## 🎨 Available Thumbnail Styles

| Style | Description |
|-------|-------------|
| **Bold & Graphic** | Eye-catching with bold typography, vibrant colors, dramatic lighting |
| **Tech/Futuristic** | Sleek modern design with digital UI elements and holographic effects |
| **Minimalist** | Clean layout with simple shapes and limited color palette |
| **Photorealistic** | Ultra-realistic with natural lighting and DSLR-style photography |
| **Illustrated** | Custom digital illustration with stylized characters and vector art |

---

## 🌈 Color Schemes

| Scheme | Colors |
|--------|--------|
| 🔴 Vibrant | High saturation, bold contrasts |
| 🌅 Sunset | Orange, pink, and purple hues |
| 🌊 Ocean | Cool blue and teal tones |
| 🌲 Forest | Natural green, earthy colors |
| 💜 Purple Dream | Purple-dominant palette |
| ⬛ Monochrome | Black and white, high contrast |
| ✨ Neon | Electric blues and pinks, cyberpunk |
| 🎀 Pastel | Soft, gentle tones |

---

## 🚀 Deployment

The application is deployed on **Vercel**:

- **Frontend**: Deployed as a Vite React application
- **Backend**: Deployed as a serverless Express API

### Production URL
🔗 **[https://thumbgen.psbvision.engineer](https://thumbgen.psbvision.engineer)**

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**PSB Vision**

- Website: [psbvision.engineer](https://psbvision.engineer)
- GitHub: [@psbvision](https://github.com/psbvision)

---

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) - For powerful image generation
- [Cloudinary](https://cloudinary.com/) - For reliable image hosting
- [Tailwind CSS](https://tailwindcss.com/) - For beautiful styling
- [Lucide Icons](https://lucide.dev/) - For elegant icons
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations

---

<p align="center">
  Made with ❤️ by <a href="https://psbvision.engineer">PSBVISION</a>
</p>

<p align="center">
  <a href="https://thumbgen.psbvision.engineer" target="_blank" rel="noopener noreferrer">
    <img src="client/public/assets/footer-logo.png" alt="ThumbGen Logo" width="260" height="40" />
 
  </a>
</p>
<h6 align="right"><sub><i>Thanks AI for writing this cool README</i></sub></h6>