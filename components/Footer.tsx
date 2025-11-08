
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">MedRep أكاديمي</h3>
            <p className="text-slate-400">
              منصة رائدة لتأهيل وتطوير مهارات المندوبين الطبيين، لمساعدتهم على تحقيق النجاح في مسيرتهم المهنية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">الكورسات</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center"><i className="fas fa-map-marker-alt ml-2"></i> القاهرة، مصر</li>
              <li className="flex items-center"><i className="fas fa-envelope ml-2"></i> info@medrep.academy</li>
              <li className="flex items-center"><i className="fas fa-phone ml-2"></i> +20 123 456 7890</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-slate-400 hover:text-white text-2xl transition-transform transform hover:scale-110"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-slate-400 hover:text-white text-2xl transition-transform transform hover:scale-110"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-slate-400 hover:text-white text-2xl transition-transform transform hover:scale-110"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-slate-400 hover:text-white text-2xl transition-transform transform hover:scale-110"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} MedRep أكاديمي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
