
import React from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { Course } from '../types';

interface HomePageProps {
    onNavigate: (page: string) => void;
    onViewCourse: (course: Course) => void;
}

const Feature: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="text-blue-600 text-4xl mb-4"><i className={icon}></i></div>
        <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onNavigate, onViewCourse }) => {
  const featuredCourses = courses.slice(0, 3);
  
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white text-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">بوابتك للاحتراف في الدعاية الطبية</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            كورسات متخصصة ومكثفة تؤهلك لتكون مندوبًا طبيًا ناجحًا ومتميزًا في سوق العمل.
          </p>
          <button onClick={() => onNavigate('courses')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300">
            استكشف الكورسات
          </button>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">أبرز الكورسات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} onViewDetails={onViewCourse} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-100 py-16 md:py-24">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">لماذا تختارنا؟</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Feature 
                      icon="fas fa-user-tie" 
                      title="مدربون خبراء" 
                      description="نخبة من أفضل الخبراء في مجال الدعاية الطبية والتسويق الدوائي بخبرات عملية واسعة."
                  />
                  <Feature 
                      icon="fas fa-book-open" 
                      title="محتوى عملي وتطبيقي" 
                      description="نركز على المهارات التي يحتاجها سوق العمل مباشرة، مع دراسات حالة وتمارين عملية."
                  />
                  <Feature 
                      icon="fas fa-certificate" 
                      title="شهادات معتمدة" 
                      description="احصل على شهادة معتمدة بعد إتمام كل كورس لتعزيز سيرتك الذاتية وفرصك الوظيفية."
                  />
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">آراء طلابنا</h2>
              <TestimonialSlider />
          </div>
      </section>
    </div>
  );
};

export default HomePage;
