import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Coins } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Home from './pages/Home';
import Mission from './pages/Mission';
import Whitepaper from './pages/Whitepaper';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Coins className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">CRYPTOVAULT</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link to="/mission" className="text-sm font-medium transition-colors hover:text-primary">
                  Mission
                </Link>
                <Link to="/whitepaper" className="text-sm font-medium transition-colors hover:text-primary">
                  Whitepaper
                </Link>
                <a href='https://t.me/+IUW5eNUmTBA1ZDY0' target="_blank" rel="noopener noreferrer">
                  <Link to="/" className="text-sm font-medium transition-colors hover:text-primary ">
                    Telegram
                  </Link>
                </a>
              </div>
              <a href="https://pump.fun/coin/D5rhLTWL3Moh9FoHRbssE4uVuHNYGYfPg5iWZ7z8pump" target="_blank" rel="noopener noreferrer">
                <Button variant="default">Buy $VAULT</Button>
              </a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
        </Routes>

        {/* Footer */}
        <footer className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Coins className="h-6 w-6 text-primary" />
                <span className="font-bold">CRYPTOVAULT</span>
              </div>
              <div className="text-sm text-muted-foreground">
                © 2025 CRYPTOVAULT. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;