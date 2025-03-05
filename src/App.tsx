import React, { useState } from 'react';
import { Plane, Hotel, Car, CreditCard, CheckCircle, Globe2, Users, Wallet, Calendar, MapPin, Heart } from 'lucide-react';

interface TravelPreferences {
  originCity: string;
  travelType: 'domestic' | 'international';
  groupType: 'solo' | 'family' | 'group';
  budget: '500-1000' | '1001-2000' | 'open';
  startDate: string;
  endDate: string;
  destinationType: 'beach' | 'mountain' | 'city';
  travelPurpose: 'relaxing' | 'party' | 'food' | 'luxury';
}

interface Message {
  type: 'user' | 'agent';
  content: React.ReactNode;
}

function App() {
  const [showChat, setShowChat] = useState(false);
  const [preferences, setPreferences] = useState<TravelPreferences>({
    originCity: 'New Delhi',
    travelType: 'international',
    groupType: 'solo',
    budget: '1001-2000',
    startDate: '2025-03-06',
    endDate: '2025-03-07',
    destinationType: 'city',
    travelPurpose: 'relaxing'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowChat(true);
  };

  const PreferencesForm = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome John!</h1>
          <p className="text-gray-600">Please share your travel preferences to help us plan your perfect trip.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Origin City */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Origin City
              </label>
              <input
                type="text"
                value={preferences.originCity}
                onChange={(e) => setPreferences({...preferences, originCity: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Travel Type */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Globe2 className="w-4 h-4 mr-2" />
                Travel Type
              </label>
              <div className="flex gap-4">
                {['domestic', 'international'].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      checked={preferences.travelType === type}
                      onChange={() => setPreferences({...preferences, travelType: type as 'domestic' | 'international'})}
                      className="mr-2"
                    />
                    <span className="capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Group Type */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Users className="w-4 h-4 mr-2" />
                Travel Group
              </label>
              <div className="flex gap-4">
                {['solo', 'family', 'group'].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      checked={preferences.groupType === type}
                      onChange={() => setPreferences({...preferences, groupType: type as 'solo' | 'family' | 'group'})}
                      className="mr-2"
                    />
                    <span className="capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Wallet className="w-4 h-4 mr-2" />
                Budget (S$)
              </label>
              <div className="flex gap-4">
                {[
                  { value: '500-1000', label: '500-1000' },
                  { value: '1001-2000', label: '1001-2000' },
                  { value: 'open', label: "I'm open" }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      checked={preferences.budget === option.value}
                      onChange={() => setPreferences({...preferences, budget: option.value as '500-1000' | '1001-2000' | 'open'})}
                      className="mr-2"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Travel Dates */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                Start Date
              </label>
              <input
                type="date"
                value={preferences.startDate}
                onChange={(e) => setPreferences({...preferences, startDate: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                End Date
              </label>
              <input
                type="date"
                value={preferences.endDate}
                onChange={(e) => setPreferences({...preferences, endDate: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Destination Type */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Destination Type
              </label>
              <div className="flex gap-4">
                {['beach', 'mountain', 'city'].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      checked={preferences.destinationType === type}
                      onChange={() => setPreferences({...preferences, destinationType: type as 'beach' | 'mountain' | 'city'})}
                      className="mr-2"
                    />
                    <span className="capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Travel Purpose */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Travel Purpose
              </label>
              <div className="flex gap-4">
                {['relaxing', 'party', 'food', 'luxury'].map((purpose) => (
                  <label key={purpose} className="flex items-center">
                    <input
                      type="radio"
                      checked={preferences.travelPurpose === purpose}
                      onChange={() => setPreferences({...preferences, travelPurpose: purpose as 'relaxing' | 'party' | 'food' | 'luxury'})}
                      className="mr-2"
                    />
                    <span className="capitalize">{purpose}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
            >
              <Plane className="w-5 h-5 mr-2" />
              Start Planning
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const messages: Message[] = [
    {
      type: 'user',
      content: 'Please plan my travel based on my preferences'
    },
    {
      type: 'agent',
      content: (
        <div>
          <p className="mb-4">Hi John, Here are the best 2 flights options I can propose:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 border border-blue-100 hover:border-blue-300 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <Plane className="text-blue-500" />
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Economic</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" 
                alt="Flight"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <div className="space-y-2">
                <p className="font-semibold">Departure: 05:30 AM</p>
                <p className="font-semibold">Arrival: 08:45 AM</p>
                <p className="text-green-600 font-bold">$450</p>
                <p className="text-sm text-gray-600">12 seats available</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 border border-blue-100">
              <div className="flex items-center justify-between mb-3">
                <Plane className="text-blue-500" />
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Express</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80" 
                alt="Flight"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <div className="space-y-2">
                <p className="font-semibold">Departure: 06:00 AM</p>
                <p className="font-semibold">Arrival: 08:30 AM</p>
                <p className="text-green-600 font-bold">$650</p>
                <p className="text-sm text-gray-600">8 seats available</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: 'user',
      content: 'Please book option 1.'
    },
    {
      type: 'agent',
      content: 'Would you like to proceed with checkout or want to book a taxi?'
    },
    {
      type: 'user',
      content: 'I want to book a taxi.'
    },
    {
      type: 'agent',
      content: 'Where will you be staying?'
    },
    {
      type: 'user',
      content: 'I haven\'t figured out yet, suggest something around Marina Bay'
    },
    {
      type: 'agent',
      content: (
        <div>
          <p className="mb-4">Here are 3 recommended hotels near Marina Bay:</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: 'Marina Bay Sands',
                image: 'https://images.unsplash.com/photo-1582642017153-e36e8796b3e8?auto=format&fit=crop&w=800&q=80',
                price: '$450/night',
                amenities: ['Pool', 'Spa', 'Restaurant', 'Gym']
              },
              {
                name: 'Fullerton Bay Hotel',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
                price: '$380/night',
                amenities: ['Rooftop Bar', 'Restaurant', 'Gym', 'Spa']
              },
              {
                name: 'Pan Pacific',
                image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
                price: '$320/night',
                amenities: ['Pool', 'Restaurant', 'Business Center', 'Gym']
              }
            ].map((hotel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
                  <p className="text-green-600 font-bold mb-2">{hotel.price}</p>
                  <div className="space-y-1">
                    {hotel.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      type: 'user',
      content: 'Please book option 1.'
    },
    {
      type: 'agent',
      content: 'Thanks for choosing Marina Bay Sands, I will book a taxi from the Airport to the hotel.'
    },
    {
      type: 'user',
      content: 'Please proceed with booking'
    },
    {
      type: 'agent',
      content: (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Plane className="w-5 h-5 mr-3 text-blue-500" />
              <div>
                <p className="font-semibold">Economic Flight</p>
                <p className="text-gray-600">March 6, 05:30 AM - 08:45 AM</p>
                <p className="text-green-600 font-bold">$450</p>
              </div>
            </div>
            <div className="flex items-center">
              <Hotel className="w-5 h-5 mr-3 text-blue-500" />
              <div>
                <p className="font-semibold">Marina Bay Sands</p>
                <p className="text-gray-600">1 night</p>
                <p className="text-green-600 font-bold">$450</p>
              </div>
            </div>
            <div className="flex items-center">
              <Car className="w-5 h-5 mr-3 text-blue-500" />
              <div>
                <p className="font-semibold">Airport Transfer</p>
                <p className="text-gray-600">To Marina Bay Sands</p>
                <p className="text-green-600 font-bold">$30</p>
              </div>
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center justify-between">
                <p className="font-bold">Total</p>
                <p className="font-bold text-green-600">$930</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: 'user',
      content: 'Please proceed with booking.'
    },
    {
      type: 'agent',
      content: (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center mb-2">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="text-green-700 font-bold">Booking Successful!</h3>
          </div>
          <p className="text-green-600">You will receive an email shortly with your booking details.</p>
          <p className="text-green-600">Thank you for choosing TravelBuddy!</p>
        </div>
      )
    }
  ];

  return showChat ? (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-4">
            <h1 className="text-white text-xl font-bold">TravelBuddy Chat</h1>
          </div>
          <div className="p-4 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <PreferencesForm />
  );
}

export default App;
