# 🌫️ Mist-OS

A sleek, modern portfolio website inspired by macOS design principles. Built with React and Vite, this project showcases projects and skills with a clean, intuitive interface featuring a dock-based navigation system, draggable windows, and a minimalist aesthetic.

🔗 **[Live Demo](https://mist-os.vercel.app/)**

## ✨ Features

- 🎯 **macOS-Inspired Design** - A beautiful dock navigation component mimicking macOS for an elegant user experience.
- 🪟 **Interactive Windows** - Fully draggable and resizable application windows powered by `react-rnd`.
- 💻 **Terminal Emulator** - A functional command-line interface built with `react-console-emulator`.
- 📱 **App Ecosystem** - Includes custom applications like a Spotify player, GitHub profile viewer, PDF reader, and Notes.
- 🎨 **Modern UI** - Built with SCSS for scalable and maintainable styling.
- ⚡ **Fast Development** - Powered by Vite with Hot Module Replacement (HMR) for instant feedback.
- 🚀 **Production Ready** - Optimized build process for seamless portfolio deployment.

## 📁 Project Structure

```text
Mist-OS/
├── src/
│   ├── components/
│   │   ├── DateTime.jsx      # Top navigation bar clock
│   │   ├── Dock.jsx          # macOS-inspired dock navigation
│   │   ├── Nav.jsx           # Top navigation bar
│   │   └── windows/          # Interactive application windows
│   │       ├── BootScreen.jsx # Startup sequence
│   │       ├── Cli.jsx       # Terminal emulator
│   │       ├── GitHub.jsx    # GitHub profile viewer
│   │       ├── MacWindow.jsx # Base window wrapper
│   │       ├── Note.jsx      # Notes application
│   │       ├── PdfWindow.jsx # PDF document viewer
│   │       └── Spotify.jsx   # Spotify player integration
│   ├── assets/               # Static assets (JSON data, etc.)
│   ├── App.jsx               # Root application component
│   ├── app.scss              # Main application styles
│   └── main.jsx              # Application entry point
├── public/
│   ├── doc-icons/            # Document and section icons
│   └── navbar-icons/         # Navigation bar icons
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── package.json              # Project dependencies
```

## 🛠️ Technology Stack

- ⚛️ **React** - UI library for building interactive components
- ⚙️ **Vite** - Next-generation build tool and dev server
- 🎨 **SCSS** - CSS preprocessor for advanced styling
- 🪟 **React RND** - Resizable and draggable window components
- 💻 **React Console Emulator** - Interactive terminal interface

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Mist-OS.git
   cd Mist-OS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```



