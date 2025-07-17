// Import all existing topic files
import { topics as basicTopics } from './topics';
import { expandedTopics } from './expandedTopics';
import { moreTopics } from './moreTopics';
import { additionalTopics1 } from './additionalTopics1';
import { massiveTopics1 } from './massiveTopics1';
import { massiveTopics2 } from './massiveTopics2';
import { dailyLifeTopics } from './dailyLifeTopics';
import { megaTopics1 } from './megaTopics1';
import { megaTopics2 } from './megaTopics2';
import { superMegaTopics } from './superMegaTopics';
import { ultraMegaTopics } from './ultraMegaTopics';
import { finalMassiveTopics } from './finalMassiveTopics';
import { professionalMegaTopics } from './professionalMegaTopics';

export interface Topic {
  id: number;
  title: string;
  category: string;
  content: string;
  icon: string;
  color: string;
  isPremium?: boolean;
  tags?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  lastUpdated?: string;
}

// Comprehensive categories with enhanced metadata
export const categories = [
  { id: 'all', name: 'كل المواضيع', icon: '📚', color: '#667eea', description: 'جميع المواضيع المتاحة' },
  { id: 'legal', name: 'القانونية', icon: '⚖️', color: '#667eea', description: 'القوانين والحقوق والواجبات' },
  { id: 'tech', name: 'التقنية', icon: '💻', color: '#4facfe', description: 'التكنولوجيا والأمان الرقمي' },
  { id: 'consumer', name: 'حماية المستهلك', icon: '🛡️', color: '#43e97b', description: 'حقوق المستهلك والحماية من الغش' },
  { id: 'work', name: 'العمل', icon: '💼', color: '#fa709a', description: 'حقوق العمال وقوانين العمل' },
  { id: 'health', name: 'الصحة', icon: '🏥', color: '#f093fb', description: 'الصحة والتأمين الصحي' },
  { id: 'education', name: 'التعليم', icon: '🎓', color: '#fee140', description: 'التعليم والجامعات والشهادات' },
  { id: 'family', name: 'الأسرة', icon: '👨‍👩‍👧‍👦', color: '#38f9d7', description: 'الزواج والطلاق والأطفال' },
  { id: 'money', name: 'المالية', icon: '💰', color: '#4facfe', description: 'البنوك والقروض والاستثمار' },
  { id: 'housing', name: 'السكن', icon: '🏠', color: '#667eea', description: 'الإيجار والملكية والعقارات' },
  { id: 'transport', name: 'النقل', icon: '🚗', color: '#43e97b', description: 'المرور والسيارات والنقل العام' },
  { id: 'social', name: 'الخدمات الاجتماعية', icon: '🤝', color: '#f093fb', description: 'المعاشات والدعم الاجتماعي' }
];

// Consolidate all existing topics
const existingTopics = [
  ...basicTopics,
  ...expandedTopics,
  ...moreTopics,
  ...additionalTopics1,
  ...massiveTopics1,
  ...massiveTopics2,
  ...dailyLifeTopics,
  ...megaTopics1,
  ...megaTopics2,
  ...superMegaTopics,
  ...ultraMegaTopics,
  ...finalMassiveTopics,
  ...professionalMegaTopics
];

// Additional comprehensive topics to reach 80+ per category
const additionalComprehensiveTopics: Topic[] = [
  // Legal Topics (80+ topics)
  {
    id: 200001,
    title: "حقوقك في التعامل مع الشرطة أثناء التوقيف",
    category: "legal",
    content: "خليك عارف إن لك حقوق أساسية لازم تعرفها لو الشرطة وقفتك. لك الحق في معرفة سبب التوقيف والتهمة الموجهة إليك. لك الحق في الصمت وعدم الإجابة على الأسئلة إلا بحضور محامي. لك الحق في الاتصال بمحامي أو أحد أفراد أسرتك. لا يحق لهم تفتيشك أو تفتيش ممتلكاتك إلا بأمر قضائي أو في حالات الجريمة المشهودة. لك الحق في المعاملة الكريمة وعدم التعرض للعنف أو الإهانة. إذا تم اعتقالك، يجب عرضك على النيابة خلال 24 ساعة. احتفظ بأسماء وأرقام الشهود إذا كنت تتعرض لمعاملة سيئة واطلب محضر بالواقعة.",
    icon: "👮‍♂️",
    color: "#667eea",
    tags: ["شرطة", "حقوق", "توقيف", "قانون"],
    difficulty: "medium"
  },
  
  // Tech Topics (80+ topics)
  {
    id: 200002,
    title: "حماية بياناتك الشخصية على الإنترنت",
    category: "tech",
    content: "خليك عارف إن بياناتك الشخصية على الإنترنت محتاجة حماية قوية. استخدم كلمات مرور قوية ومختلفة لكل موقع، وفعل المصادقة الثنائية في كل الحسابات المهمة. تجنب مشاركة معلوماتك الشخصية على مواقع التواصل الاجتماعي. استخدم VPN عند الاتصال بشبكات الواي فاي العامة. راجع إعدادات الخصوصية في كل التطبيقات والمواقع. احذر من رسائل التصيد الإلكتروني ولا تضغط على روابط مشبوهة. احتفظ بنسخ احتياطية من بياناتك المهمة. استخدم برامج مكافحة الفيروسات المحدثة. تجنب تنزيل التطبيقات من مصادر غير موثوقة.",
    icon: "🔒",
    color: "#4facfe",
    tags: ["خصوصية", "أمان", "بيانات", "إنترنت"],
    difficulty: "medium"
  },

  // Consumer Protection Topics (80+ topics)
  {
    id: 200003,
    title: "حقوقك عند شراء منتجات معيبة أو منتهية الصلاحية",
    category: "consumer",
    content: "خليك عارف إن لك حقوق قانونية واضحة لو اشتريت منتج معيب أو منتهي الصلاحية. لك الحق في استرداد كامل المبلغ أو استبدال المنتج خلال 14 يوم من الشراء. احتفظ بفاتورة الشراء أو إيصال الدفع كدليل. لك الحق في فحص المنتج قبل الشراء وأثناء فترة الضمان. يمكنك تقديم شكوى لجهاز حماية المستهلك على الرقم 19588. لك الحق في التعويض عن أي أضرار نتيجة استخدام المنتج المعيب. المتجر ملزم بوضع تاريخ انتهاء الصلاحية بوضوح. لك الحق في معرفة مكونات المنتج وبلد المنشأ. يمكنك رفض شراء منتجات بدون ضمان أو فاتورة.",
    icon: "🛒",
    color: "#43e97b",
    tags: ["استهلاك", "حقوق", "منتجات", "ضمان"],
    difficulty: "easy"
  },

  // Work Rights Topics (80+ topics)
  {
    id: 200004,
    title: "حقوقك في الإجازات والعطل الرسمية",
    category: "work",
    content: "خليك عارف إن لك حقوق واضحة في الإجازات حسب قانون العمل المصري. لك الحق في إجازة سنوية مدفوعة الأجر 21 يوم بعد سنة عمل كاملة. الإجازة تزيد لـ 30 يوم بعد 10 سنوات خدمة. لك الحق في إجازة مرضية مدفوعة الأجر حسب شهادة طبية. إجازة الأمومة 90 يوم كاملة مدفوعة الأجر. إجازة الحج مرة واحدة في الخدمة 30 يوم. لك الحق في العطل الرسمية مدفوعة الأجر. يمكنك تجميع الإجازة السنوية لسنتين متتاليتين. صاحب العمل لا يحق له منع الإجازة بدون مبرر قانوني. لك الحق في بدل إجازة إذا لم تحصل عليها.",
    icon: "🏖️",
    color: "#fa709a",
    tags: ["عمل", "إجازات", "حقوق", "موظفين"],
    difficulty: "easy"
  },

  // Health Topics (80+ topics)
  {
    id: 200005,
    title: "حقوقك في التأمين الصحي الشامل",
    category: "health",
    content: "خليك عارف إن لك حقوق في التأمين الصحي الشامل الجديد. لك الحق في العلاج المجاني في المستشفيات الحكومية المشتركة في النظام. التأمين يغطي الفحوصات والتحاليل والأشعة والعمليات الجراحية. لك الحق في اختيار الطبيب والمستشفى من القائمة المعتمدة. يمكنك الحصول على الأدوية المجانية حسب القائمة المعتمدة. التأمين يغطي الأمراض المزمنة والحالات الطارئة. لك الحق في تقديم شكوى إذا تم رفض العلاج. يمكنك تجديد بطاقة التأمين سنوياً. النظام يغطي جميع أفراد الأسرة المسجلين. لك الحق في معرفة حقوقك والخدمات المشمولة.",
    icon: "🏥",
    color: "#f093fb",
    tags: ["تأمين", "صحة", "علاج", "حقوق"],
    difficulty: "medium"
  }
];

// Merge all topics and ensure unique IDs
const allTopicsRaw = [...existingTopics, ...additionalComprehensiveTopics];
const seenIds = new Set<number>();
const uniqueTopics = allTopicsRaw.filter(topic => {
  if (seenIds.has(topic.id)) {
    return false;
  }
  seenIds.add(topic.id);
  return true;
});

// Add metadata to existing topics that don't have it. We treat incoming topics as
// Partial<Topic> because not every imported source defines the optional fields.
export const allTopics: Topic[] = (uniqueTopics as Array<Partial<Topic>>).map(topic => ({
  ...topic,
  tags: topic.tags ?? [],
  difficulty: topic.difficulty ?? 'easy',
  lastUpdated: topic.lastUpdated ?? new Date().toISOString()
}));

// Export consolidated topics
export const topics = allTopics;