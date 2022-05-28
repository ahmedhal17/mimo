import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">About</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Community</h5>
            <p>Accessibilty</p>
            <p>This is not a real site</p>
            <p>It's awesome clone</p>
            <p>Referrals accepted</p>
            <p>Digital Trendz</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Hosting</h5>
            <p>Try hosting</p>
            <p>AirCover for Hosts</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
            <p>Host responsibly</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Support</h5>
            <p>Help Center</p>
            <p>AirCover</p>
            <p>Safety information</p>
            <p>People with disabilities</p>
            <p>Cancellation options</p>
        </div>
       
    </div>
  )
}

export default Footer