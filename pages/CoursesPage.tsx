
import React, { useState, useMemo } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { Course, CourseLevel } from '../types';

interface CoursesPageProps {
  onViewCourse: (course: Course) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onViewCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | 'all'>('all');

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevel]);
  
  const levels: (CourseLevel | 'all')[] = ['all', CourseLevel.Beginner, CourseLevel.Intermediate, CourseLevel.Advanced];

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-slate-800">جميع الكورسات</h1>
          <p className="text-slate-600 mt-2">ابحث عن الكورس المناسب الذي يلبي طموحاتك المهنية.</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full md:w-auto">
                <input
                    type="text"
                    placeholder="ابحث عن كورس..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                </div>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse flex-wrap justify-center">
                {levels.map(level => (
                    <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${selectedLevel === level ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
                    >
                        {level === 'all' ? 'الكل' : level}
                    </button>
                ))}
            </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} onViewDetails={onViewCourse} />
                ))}
            </div>
        ) : (
            <div className="text-center py-16">
                <i className="fas fa-search text-6xl text-slate-300 mb-4"></i>
                <p className="text-xl text-slate-500">لا توجد نتائج مطابقة لبحثك.</p>
            </div>
        )}
      </main>
    </div>
  );
};

export default CoursesPage;
