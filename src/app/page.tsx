'use client';

import React, { useState } from 'react';
import { ArrowRight, Shield, BarChart3, Users, Settings, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const quickActions = [
    { icon: Users, title: 'User Management', desc: 'Manage user accounts and permissions' },
    { icon: BarChart3, title: 'Analytics', desc: 'View detailed system analytics' },
    { icon: Shield, title: 'Security', desc: 'Monitor security and access logs' },
    { icon: Settings, title: 'Settings', desc: 'Configure system preferences' }
  ];

  return (
    <div className="min-h-screen bg-white text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

     

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold mb-4 pt-12 bg-gray-500 bg-clip-text text-transparent">
            Welcome Back, Admin
          </h2>
          
        </div>


        {/* Quick Actions */}
        <div className="mb-12">
          <h3 className="text-2xl text-gray-500 font-bold mb-6 text-center">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r bg-gray-500 rounded-lg group-hover:scale-110 transition-transform">
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg text-gray-900 font-semibold mb-2">{action.title}</h4>
                <p className="text-gray-400 text-sm">{action.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard CTA */}
        <div className="text-center">
          <Link href="/dashboard" className="inline-flex items-center space-x-4 bg-gray-500 rounded-full px-8 py-4  transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="text-lg font-semibold">Go to Dashboard</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-64 h-full bg-slate-900 border-l border-white/10 p-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-semibold">Menu</h3>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="space-y-4">
              <Link href="/dashboard" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors">
                Dashboard
              </Link>
              <Link href="/analytics" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors">
                Analytics
              </Link>
              <Link href="/settings" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors">
                Settings
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}