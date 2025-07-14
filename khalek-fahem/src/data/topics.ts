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

export interface Topic {
  id: number;
  title: string;
  category: string;
  content: string;
  icon: string;
  color: string;
  isPremium?: boolean;
}

export const categories = [
  { id: 'all', name: 'كل المواضيع', icon: '📚' },
  { id: 'legal', name: 'القانونية', icon: '⚖️' },
  { id: 'tech', name: 'التقنية', icon: '💻' },
  { id: 'consumer', name: 'حماية المستهلك', icon: '🛡️' },
  { id: 'work', name: 'العمل', icon: '💼' },
  { id: 'health', name: 'الصحة', icon: '🏥' },
  { id: 'education', name: 'التعليم', icon: '🎓' },
  { id: 'family', name: 'الأسرة', icon: '👨‍👩‍👧‍👦' },
  { id: 'money', name: 'المالية', icon: '💰' }
];

export const topics: Topic[] = [
  {
    id: 1,
    title: "لو تلفونك اتسرق تعمل إيه؟",
    category: "tech",
    content: "خليك عارف إن لو تلفونك اتسرق، أول حاجة لازم تعملها إنك تروح قسم الشرطة وتعمل محضر سرقة فوراً. المحضر ده مهم جداً عشان تقدر تطلب تعويض من التأمين لو عندك، وكمان يحميك قانونياً لو الحرامي عمل منه حاجات غلط. تتصل بشركة المحمول حالاً عشان يوقفوا الخط ويمنعوا أي استخدام. لازم تغير كلمات المرور لكل حساباتك اللي كانت محفوظة على التليفون، خاصة البنك ومواقع التواصل. شغل خاصية Find My Device لو كانت متفعلة عشان ممكن تلاقي التليفون أو على الأقل تمسح البيانات عن بُعد.",
    icon: "📱",
    color: "#FF6B6B"
  },
  {
    id: 2,
    title: "حد شتمك على الإنترنت تعمل إيه؟",
    category: "legal",
    content: "خليك عارف إن القانون المصري بيحميك من السب والقذف الإلكتروني، والموضوع مش هزار خالص. أول حاجة تعملها تاخد صورة شاشة (screenshot) للتعليق أو الرسالة مع ظهور التاريخ والوقت واسم المرسل. احفظ كل دليل ممكن زي رابط المنشور أو الرسالة. روح النيابة الإلكترونية أو قسم الشرطة واعمل بلاغ رسمي، واحضر معاك الأدلة مطبوعة أو على فلاشة. العقوبة للمعتدي ممكن توصل لسنتين حبس أو غرامة مالية كبيرة حسب درجة السب والضرر النفسي اللي حصلك.",
    icon: "💬",
    color: "#4ECDC4"
  },
  {
    id: 3,
    title: "صاحب الشقة رفض يرجعلك التأمين؟",
    category: "legal",
    content: "خليك عارف إن التأمين ده حقك القانوني مش منة من صاحب الشقة، ولو رفض يرجعهولك من غير مبرر قانوني واضح، ممكن ترفع عليه قضية. أول حاجة احتفظ بعقد الإيجار الأصلي وإيصال دفع التأمين وأي مراسلات بينكم. حاول تتكلم معاه بالعقل الأول وسجل المحادثة لو أمكن. لو مفيش حل ودي، اتوجه للمحكمة الجزئية في دائرة العقار وقدم دعوى استرداد التأمين مع المطالبة بالتعويض عن الضرر والتأخير.",
    icon: "🏠",
    color: "#45B7D1"
  },
  {
    id: 4,
    title: "عايز تطلق أو تنفصل بطريقة قانونية؟",
    category: "family",
    content: "خليك عارف إن الطلاق ممكن يكون ودي أو عن طريق المحكمة، والطريقة بتختلف حسب ظروفك. لو ودي، ممكن تعملوا طلاق خلعي (لو الست هي اللي عايزة تطلق) أو مبارات لو متفقين. لو مش متفقين، هتحتاج محامي وقضية في محكمة الأسرة. اهم حاجة تعرف حقوقك في النفقة والحضانة والمتعة والمؤخر. كل ده بيتحدد حسب ظروفك المالية وعدد الأطفال ومدة الزواج.",
    icon: "💔",
    color: "#A55EEA"
  },
  // دمج جميع المواضيع الجديدة
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
  ...finalMassiveTopics
];
