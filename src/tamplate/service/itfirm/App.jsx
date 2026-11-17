import React, { useState } from 'react';
import ITFirmNav from './nav.jsx';
import ITFirmFooter from './footer.jsx';
import ITFirmHomePage from './home/homepage.jsx';
import ItFirmServicesPage from './pages/servicesPage.jsx';
import ItFirmQuotePage from './pages/quotePage.jsx';
import ItFirmDetailPage from './pages/detailPage.jsx';
import ITFirmAboutPage from './pages/aboutPage.jsx';
import ITFirmContactPage from './pages/contactPage.jsx';
import itfirmData from './data.js';

export default function ITFirmApp() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedService, setSelectedService] = useState(itfirmData.items[0]);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setCurrentTab('detail');
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans antialiased">
      <ITFirmNav activeTab={currentTab} onSelectTab={setCurrentTab} />
      <main className="flex-1">
        {currentTab === 'home' && (
          <ITFirmHomePage
            onNavigate={setCurrentTab}
            onSelectService={handleSelectService}
          />
        )}
        {currentTab === 'services' && (
          <ItFirmServicesPage
            onNavigate={setCurrentTab}
            onSelectService={handleSelectService}
          />
        )}
        {currentTab === 'quote' && (
          <ItFirmQuotePage onNavigate={setCurrentTab} />
        )}
        {currentTab === 'detail' && (
          <ItFirmDetailPage
            service={selectedService}
            onNavigate={setCurrentTab}
          />
        )}
        {currentTab === 'about' && <ITFirmAboutPage onNavigate={setCurrentTab} />}
        {currentTab === 'contact' && <ITFirmContactPage onNavigate={setCurrentTab} />}
      </main>
      <ITFirmFooter onSelectTab={setCurrentTab} />
    </div>
  );
}
