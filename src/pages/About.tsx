import React from 'react'; // Import React for component creation
import { Users, Target, Award } from 'lucide-react'; // Import icons from Lucide React

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20"> {/* Full-page background with padding */}
      <div className="container mx-auto px-4"> {/* Centered content with padding */}
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About VisionAI Labs</h1> {/* Main heading */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate engineers and researchers dedicated to pushing the boundaries
            of computer vision and machine learning technology.
          </p> {/* Introductory text */}
        </div>

        {/* Mission Section with Image */}
        <div className="grid md:grid-cols-2 gap-8 mb-16"> {/* Two-column layout on medium+ screens */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg" /* Rounded image with shadow */
            />
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2> {/* Mission heading */}
              <p className="text-gray-600 mb-6">
                To democratize access to advanced computer vision technology and empower businesses
                with intelligent visual processing capabilities that drive innovation and efficiency.
              </p> {/* Mission description */}
              
              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow"> {/* Card for Expert Team */}
                  <Users className="text-indigo-600 w-8 h-8 mb-2" /> {/* Icon */}
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600">50+ AI specialists</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow"> {/* Card for Projects */}
                  <Target className="text-purple-600 w-8 h-8 mb-2" /> {/* Icon */}
                  <h3 className="font-semibold mb-2">Projects</h3>
                  <p className="text-sm text-gray-600">200+ deployments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="grid md:grid-cols-3 gap-8"> {/* Three-column layout */}
          {/* Industry Recognition Card */}
          <div className="about-card bg-white p-6 rounded-lg shadow-lg">
            <Award className="text-indigo-600 w-12 h-12 mb-4" /> {/* Award icon */}
            <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
            <p className="text-gray-600">
              Multiple awards for our innovative solutions in computer vision and AI.
            </p>
          </div>

          {/* Research & Development Card */}
          <div className="about-card bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
              alt="AI Technology"
              className="w-full h-48 object-cover rounded-lg mb-4" /* Image with rounded corners */
            />
            <h3 className="text-xl font-semibold mb-2">Research & Development</h3>
            <p className="text-gray-600">
              Continuous innovation in ML algorithms and computer vision techniques.
            </p>
          </div>

          {/* Global Impact Card */}
          <div className="about-card bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Team Meeting"
              className="w-full h-48 object-cover rounded-lg mb-4" /* Image with rounded corners */
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

export default About; // Export the About component
