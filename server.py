#!/usr/bin/env python3
"""
Simple HTTP server for the consulting website
Run this script to serve the website locally
"""
import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Change to website directory
website_dir = Path(__file__).parent
os.chdir(website_dir)

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

print("🚀 Starting Ghazi's Consulting Website Server...")
print(f"📁 Serving from: {website_dir}")
print(f"🌐 Local URL: http://localhost:{PORT}")
print("📱 Opening website in browser...")
print("\n" + "="*50)
print("Press Ctrl+C to stop the server")
print("="*50 + "\n")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        # Open browser automatically
        webbrowser.open(f"http://localhost:{PORT}")
        
        print(f"✅ Server running at http://localhost:{PORT}")
        httpd.serve_forever()
        
except KeyboardInterrupt:
    print("\n🛑 Server stopped by user")
except OSError as e:
    if e.errno == 48:  # Address already in use
        print(f"❌ Port {PORT} is already in use. Try a different port.")
        print("Try running: python3 -m http.server 8001")
    else:
        print(f"❌ Error starting server: {e}")