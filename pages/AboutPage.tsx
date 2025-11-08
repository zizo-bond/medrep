
import React from 'react';
import { teamMembers } from '../data/team';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <header className="bg-slate-800 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">من نحن</h1>
          <p className="text-lg text-slate-300 mt-2">تعرف على قصتنا ورؤيتنا وفريق العمل الذي يقف خلف نجاحك</p>
        </div>
      </header>

      {/* Mission and Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                <i className="fas fa-bullseye text-blue-600 ml-3"></i>
                مهمتنا
              </h2>
              <p className="text-slate-600 leading-relaxed">
                تمكين وتأهيل المندوبين الطبيين بالمعرفة والمهارات اللازمة للتفوق في حياتهم المهنية، من خلال تقديم محتوى تعليمي عالي الجودة يجمع بين الأسس العلمية والخبرات العملية، مما يساهم في رفع كفاءة قطاع الرعاية الصحية.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                <i className="fas fa-eye text-blue-600 ml-3"></i>
                رؤيتنا
              </h2>
              <p className="text-slate-600 leading-relaxed">
                أن نكون المنصة التعليمية الرائدة والأكثر موثوقية في مجال الدعاية الطبية في الشرق الأوسط، والمصدر الأول لكل من يسعى للتميز والاحتراف في هذا المجال الحيوي والمهم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">فريقنا المتميز</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg text-center p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-200"
                />
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
