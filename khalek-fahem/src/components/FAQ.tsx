import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

const professionalQuestions: FAQItem[] = [
  {
    id: 1,
    question: "ما هي حقوقي كمستهلك في مصر؟",
    answer: "لك الحق في الحصول على منتجات آمنة وذات جودة، معرفة السعر الحقيقي، إرجاع المنتج المعيب خلال 14 يوم، الحصول على فاتورة مفصلة، والشكوى لجهاز حماية المستهلك عند التعرض للغش التجاري.",
    icon: "🛡️"
  },
  {
    id: 2,
    question: "كيف أحمي نفسي من النصب الإلكتروني؟",
    answer: "تجنب تسريب بياناتك الشخصية، تأكد من أمان المواقع قبل الدفع، لا تنقر على روابط مشبوهة، استخدم كلمات مرور قوية، وأبلغ عن أي محاولة نصب للنيابة الإلكترونية فوراً.",
    icon: "🔐"
  },
  {
    id: 3,
    question: "ما هي حقوقي في العمل كموظف؟",
    answer: "لك الحق في عقد عمل مكتوب، راتب لا يقل عن الحد الأدنى، إجازة سنوية مدفوعة الأجر، تأمين صحي واجتماعي، بيئة عمل آمنة، وعدم التعرض للتنمر أو التمييز في مكان العمل.",
    icon: "💼"
  },
  {
    id: 4,
    question: "كيف أتعامل مع حوادث الطرق قانونياً؟",
    answer: "اتصل بالإسعاف والشرطة فوراً، التقط صور للحادث والسيارات، احصل على بيانات الطرف الآخر وشهود العيان، لا توقع على أي أوراق غير واضحة، واحتفظ بالمحضر وتقرير الطبيب الشرعي.",
    icon: "🚗"
  },
  {
    id: 5,
    question: "ما حقوقي كمريض في المستشفى؟",
    answer: "لك الحق في العلاج المناسب، معرفة حالتك الصحية بوضوح، الحصول على تقرير طبي مفصل، اختيار الطبيب المعالج، رفض العلاج، والشكوى لنقابة الأطباء عند الإهمال الطبي.",
    icon: "🏥"
  },
  {
    id: 6,
    question: "كيف أحمي حقوقي الرقمية على الإنترنت؟",
    answer: "تحكم في إعدادات الخصوصية لحساباتك، تجنب مشاركة المعلومات الحساسة، استخدم المصادقة الثنائية، احذر من تطبيقات التجسس، وأبلغ عن أي انتهاك لخصوصيتك للجهات المختصة.",
    icon: "🌐"
  }
];

const FAQ: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">
          💡 الأسئلة الأكثر شيوعاً
        </h2>
        
        <div className="faq-grid">
          {professionalQuestions.map((item) => (
            <div
              key={item.id}
              className="faq-item"
              onClick={() => toggleItem(item.id)}
            >
              <div className="faq-question">
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <span>{item.question}</span>
              </div>
              
              {expandedItem === item.id && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;