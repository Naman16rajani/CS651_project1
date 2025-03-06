import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About VisionAI Labs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate engineers and researchers dedicated to pushing the boundaries
            of computer vision and machine learning technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To democratize access to advanced computer vision technology and empower businesses
                with intelligent visual processing capabilities that drive innovation and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <Users className="text-indigo-600 w-8 h-8 mb-2" />
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600">50+ AI specialists</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <Target className="text-purple-600 w-8 h-8 mb-2" />
                  <h3 className="font-semibold mb-2">Projects</h3>
                  <p className="text-sm text-gray-600">200+ deployments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="about-card bg-white p-6 rounded-lg shadow-lg">
            <Award className="text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
            <p className="text-gray-600">
              Multiple awards for our innovative solutions in computer vision and AI.
            </p>
          </div>
          <div className="about-card bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
              alt="AI Technology"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Research & Development</h3>
            <p className="text-gray-600">
              Continuous innovation in ML algorithms and computer vision techniques.
            </p>
          </div>
          <div className="about-card bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Team Meeting"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">
              Supporting clients across industries worldwide with custom AI solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;