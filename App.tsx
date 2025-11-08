
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Course } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedCourse]);

  const handleNavigate = (page: string) => {
    setSelectedCourse(null);
    setCurrentPage(page);
  };
  
  const handleViewCourse = (course: Course) => {
    setSelectedCourse(course);
    setCurrentPage('courseDetail');
  };
  
  const handleBackToCourses = () => {
      setSelectedCourse(null);
      setCurrentPage('courses');
  }

  const renderPage = () => {
    if (selectedCourse && currentPage === 'courseDetail') {
      return <CourseDetailPage course={selectedCourse} onBack={handleBackToCourses} />;
    }
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onViewCourse={handleViewCourse} />;
      case 'courses':
        return <CoursesPage onViewCourse={handleViewCourse} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} onViewCourse={handleViewCourse} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
