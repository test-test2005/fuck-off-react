import React, { useState } from 'react';
import HospitalNav from './nav.jsx';
import HospitalFooter from './footer.jsx';
import HospitalHomePage from './home/homepage.jsx';
import HospitalDoctorsPage from './pages/doctorsPage.jsx';
import HospitalAppointmentPage from './pages/appointmentPage.jsx';
import HospitalDetailPage from './pages/detailPage.jsx';
import HospitalAboutPage from './pages/aboutPage.jsx';
import HospitalContactPage from './pages/contactPage.jsx';
import hospitalData from './data.js';

export default function HospitalApp() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedDoctor, setSelectedDoctor] = useState(hospitalData.items[0]);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setCurrentTab('detail');
  };

  const handleBookDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setCurrentTab('appointment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans antialiased">
      <HospitalNav activeTab={currentTab} onSelectTab={setCurrentTab} />
      <main className="flex-1">
        {currentTab === 'home' && (
          <HospitalHomePage
            onNavigate={setCurrentTab}
            onSelectDoctor={handleSelectDoctor}
            onBookDoctor={handleBookDoctor}
          />
        )}
        {currentTab === 'doctors' && (
          <HospitalDoctorsPage
            onNavigate={setCurrentTab}
            onSelectDoctor={handleSelectDoctor}
          />
        )}
        {currentTab === 'appointment' && (
          <HospitalAppointmentPage
            selectedDoctor={selectedDoctor}
            onNavigate={setCurrentTab}
          />
        )}
        {currentTab === 'detail' && (
          <HospitalDetailPage
            doctor={selectedDoctor}
            onNavigate={setCurrentTab}
          />
        )}
        {currentTab === 'about' && <HospitalAboutPage onNavigate={setCurrentTab} />}
        {currentTab === 'contact' && <HospitalContactPage onNavigate={setCurrentTab} />}
      </main>
      <HospitalFooter onSelectTab={setCurrentTab} />
    </div>
  );
}
