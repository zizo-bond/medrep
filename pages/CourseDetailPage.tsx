
import React, { useState } from 'react';
import { Course } from '../types';

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, onBack }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
        setIsSubmitted(true);
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
  };


  return (
    <div className="bg-slate-50">
        <div className="container mx-auto px-6 py-12">
            <button onClick={onBack} className="mb-8 text-blue-600 hover:text-blue-800 transition-colors">
                <i className="fas fa-arrow-right ml-2"></i> العودة إلى قائمة الكورسات
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Course Content */}
                <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
                    <span className={`inline-block text-sm font-semibold mb-2 px-3 py-1 rounded-full ${course.level === 'مبتدئ' ? 'bg-green-100 text-green-800' : course.level === 'متوسط' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{course.level}</span>
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">{course.title}</h1>
                    <img src={course.image} alt={course.title} className="w-full h-80 object-cover rounded-lg mb-6" />
                    <p className="text-slate-600 text-lg mb-8">{course.longDescription}</p>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">محتويات الكورس</h2>
                    <div className="space-y-4">
                        {course.modules.map((module, index) => (
                            <div key={index} className="bg-slate-100 p-4 rounded-md">
                                <h3 className="font-bold text-slate-700">{module.title}</h3>
                                <ul className="list-disc list-inside mt-2 text-slate-600 space-y-1">
                                    {module.lessons.map((lesson, i) => <li key={i}>{lesson}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4 border-b pb-2">عن المدرب</h2>
                    <div className="flex items-center bg-slate-100 p-6 rounded-lg">
                        <img src={course.instructor.image} alt={course.instructor.name} className="w-24 h-24 rounded-full object-cover ml-6" />
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">{course.instructor.name}</h3>
                            <p className="text-blue-600 font-semibold">{course.instructor.title}</p>
                            <p className="text-slate-600 mt-2">{course.instructor.bio}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar with Registration Form */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-center border-b pb-4 mb-4">
                            <p className="text-3xl font-bold text-blue-600">{course.price}</p>
                            <p className="text-slate-500">{course.duration}</p>
                        </div>
                        
                        {isSubmitted ? (
                            <div className="text-center p-8 bg-green-100 rounded-lg">
                                <i className="fas fa-check-circle text-5xl text-green-500 mb-4"></i>
                                <h3 className="text-xl font-bold text-green-800">تم التسجيل بنجاح!</h3>
                                <p className="text-green-700 mt-2">سنتواصل معك قريبًا لتأكيد التفاصيل.</p>
                            </div>
                        ) : (
                             <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="text-xl font-bold text-center text-slate-800">سجل في الكورس الآن</h3>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">الاسم الكامل</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">رقم الهاتف</label>
                                    <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 font-bold">
                                    التسجيل
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CourseDetailPage;
