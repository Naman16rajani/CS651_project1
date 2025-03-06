import React from 'react';
import { ArrowRight, Camera, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Revolutionizing Industries with Computer Vision & AI
            </h1>
            <p className="text-xl mb-8">
              VisionAI Labs delivers cutting-edge computer vision solutions powered by advanced machine learning algorithms.
            </p>
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started <ArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Camera className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Advanced Object Detection</h3>
              <p className="text-gray-600">
                Real-time object detection and tracking for security and automation applications.
              </p>
            </div>
            <div className="text-center p-6">
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Deep Learning Models</h3>
              <p className="text-gray-600">
                Custom-trained neural networks for specific industry applications.
              </p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Privacy-First Approach</h3>
              <p className="text-gray-600">
                Secure, on-device processing with data protection guarantees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Box */}
      <div className="floating-box">
        <h3 className="text-xl font-semibold mb-4">Latest News</h3>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            🎉 New partnership announcement with leading automotive manufacturer
          </p>
          <p className="text-sm text-gray-600">
            📱 Mobile SDK now available for iOS and Android
          </p>
          <p className="text-sm text-gray-600">
            🏆 Named "Most Innovative AI Company" at Tech Summit 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;