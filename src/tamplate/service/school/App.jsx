import React, { useState } from 'react';
import SchoolNav from './nav.jsx';
import SchoolFooter from './footer.jsx';
import SchoolHomePage from './home/homepage.jsx';
import SchoolCoursesPage from './pages/coursesPage.jsx';
import SchoolAdmissionPage from './pages/admissionPage.jsx';
import SchoolDetailPage from './pages/detailPage.jsx';
import SchoolAboutPage from './pages/aboutPage.jsx';
import SchoolContactPage from './pages/contactPage.jsx';
import schoolData from './data.js';

export default function SchoolApp() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(schoolData.items[0]);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setCurrentTab('detail');
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans antialiased">
      <SchoolNav activeTab={currentTab} onSelectTab={setCurrentTab} />
      <main className="flex-1">
        {currentTab === 'home' && (
          <SchoolHomePage
            onNavigate={setCurrentTab}
            onSelectCourse={handleSelectCourse}
          />
        )}
        {currentTab === 'courses' && (
          <SchoolCoursesPage
            onNavigate={setCurrentTab}
            onSelectCourse={handleSelectCourse}
          />
        )}
        {currentTab === 'admission' && (
          <SchoolAdmissionPage
            selectedCourse={selectedCourse}
            onNavigate={setCurrentTab}
          />
        )}
        {currentTab === 'detail' && (
          <SchoolDetailPage
            course={selectedCourse}
            onNavigate={setCurrentTab}
          />
        )}
        {currentTab === 'about' && <SchoolAboutPage onNavigate={setCurrentTab} />}
        {currentTab === 'contact' && <SchoolContactPage onNavigate={setCurrentTab} />}
      </main>
      <SchoolFooter onSelectTab={setCurrentTab} />
    </div>
  );
}
