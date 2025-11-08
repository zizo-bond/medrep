
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setIsSubmitted(true);
        } else {
            alert('يرجى ملء جميع الحقول.');
        }
    };

  return (
    <div className="bg-slate-50">
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl font-bold text-slate-800">تواصل معنا</h1>
                <p className="text-slate-600 mt-2">نحن هنا للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا.</p>
            </div>
        </header>

        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <i className="fas fa-paper-plane text-6xl text-green-500 mb-4"></i>
                            <h2 className="text-2xl font-bold text-slate-800">تم إرسال رسالتك بنجاح!</h2>
                            <p className="text-slate-600 mt-2">شكرًا لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">أرسل لنا رسالة</h2>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">الاسم</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">رسالتك</label>
                                <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 font-bold">
                                إرسال
                            </button>
                        </form>
                    )}
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                        <i className="fas fa-map-marker-alt text-3xl text-blue-600 mt-1"></i>
                        <div className="mr-4">
                            <h3 className="text-xl font-bold text-slate-800">العنوان</h3>
                            <p className="text-slate-600">123 شارع المعز، القاهرة، مصر</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                        <i className="fas fa-envelope text-3xl text-blue-600 mt-1"></i>
                        <div className="mr-4">
                            <h3 className="text-xl font-bold text-slate-800">البريد الإلكتروني</h3>
                            <p className="text-slate-600">info@medrep.academy</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                        <i className="fas fa-phone text-3xl text-blue-600 mt-1"></i>
                        <div className="mr-4">
                            <h3 className="text-xl font-bold text-slate-800">الهاتف</h3>
                            <p className="text-slate-600">+20 123 456 7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
