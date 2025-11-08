
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onViewDetails }) => {
  const levelColor = {
    'مبتدئ': 'bg-green-100 text-green-800',
    'متوسط': 'bg-yellow-100 text-yellow-800',
    'متقدم': 'bg-red-100 text-red-800',
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full ${levelColor[course.level]}`}>{course.level}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
        <p className="text-slate-600 text-sm flex-grow">{course.shortDescription}</p>
        <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center text-sm text-slate-500">
            <span><i className="fas fa-clock ml-1"></i>{course.duration}</span>
            <span><i className="fas fa-tag ml-1"></i>{course.price}</span>
        </div>
        <button 
            onClick={() => onViewDetails(course)}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
        >
            التفاصيل
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
