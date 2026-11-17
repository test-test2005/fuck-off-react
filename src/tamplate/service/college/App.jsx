import React, { useState } from 'react';
import CollegeNav from './nav.jsx';
import CollegeFooter from './footer.jsx';
import CollegeHomePage from './home/homepage.jsx';
import CollegeDepartmentsPage from './pages/departmentsPage.jsx';
import CollegeDetailPage from './pages/detailPage.jsx';
import CollegeAboutPage from './pages/aboutPage.jsx';
import CollegeContactPage from './pages/contactPage.jsx';
import collegeData from './data.js';

export default function CollegeApp() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedProgram, setSelectedProgram] = useState(collegeData.items[0]);

  const handleSelectProgram = (program) => {
    setSelectedProgram(program);
    setCurrentTab('detail');
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans antialiased">
      <CollegeNav activeTab={currentTab} onSelectTab={setCurrentTab} />
      <main className="flex-1">
        {currentTab === 'home' && (
          <CollegeHomePage
            onNavigate={setCurrentTab}
            onSelectProgram={handleSelectProgram}
          />
        )}
        {currentTab === 'departments' && (
          <CollegeDepartmentsPage
            onNavigate={setCurrentTab}
            onSelectProgram={handleSelectProgram}
          />
        )}
        {currentTab === 'detail' && (
          <CollegeDetailPage
            program={selectedProgram}
            onNavigate={setCurrentTab}
          />
        )}
        {currentTab === 'about' && <CollegeAboutPage onNavigate={setCurrentTab} />}
        {currentTab === 'contact' && <CollegeContactPage onNavigate={setCurrentTab} />}
      </main>
      <CollegeFooter onSelectTab={setCurrentTab} />
    </div>
  );
}
