import Link from 'next/link';
import Image from 'next/image';
import { 
  Calculator, 
  BrainCircuit as Brain,
  Cpu, 
  ChevronRight, 
  Code, 
  Lightbulb,
  Microscope,
  GraduationCap,
  CircuitBoard,
  FlaskConical
} from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'دوره پیشرفته محاسبات ذهنی',
    date: '۱۴۰۳/۰۱/۱۵',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178',
    description: 'تقویت مهارت‌های محاسباتی و تفکر منطقی',
  },
  {
    id: 2,
    title: 'کارگاه رباتیک مقدماتی',
    date: '۱۴۰۳/۰۲/۰۱',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb',
    description: 'آشنایی با مفاهیم پایه رباتیک و ساخت ربات',
  },
  {
    id: 3,
    title: 'المپیاد محاسبات سریع',
    date: '۱۴۰۳/۰۲/۱۵',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    description: 'مسابقه محاسبات ذهنی و چرتکه',
  },
];

const steps = [
  {
    icon: Brain,
    title: 'ارزیابی سطح',
    description: 'تعیین سطح اولیه دانش‌آموز',
  },
  {
    icon: Calculator,
    title: 'انتخاب دوره',
    description: 'انتخاب دوره متناسب با سطح',
  },
  {
    icon: GraduationCap,
    title: 'ثبت نام',
    description: 'تکمیل فرم و پرداخت شهریه',
  },
  {
    icon: FlaskConical,
    title: 'شروع آموزش',
    description: 'آغاز دوره و دریافت محتوا',
  },
];

const features = [
  {
    icon: Brain,
    title: 'تقویت حافظه',
    description: 'افزایش قدرت حافظه و تمرکز',
  },
  {
    icon: Calculator,
    title: 'محاسبات سریع',
    description: 'یادگیری تکنیک‌های محاسبه سریع',
  },
  {
    icon: CircuitBoard,
    title: 'رباتیک',
    description: 'آموزش ساخت و برنامه‌نویسی ربات',
  },
  {
    icon: Cpu,
    title: 'هوش مصنوعی',
    description: 'آشنایی با مفاهیم هوش مصنوعی',
  },
  {
    icon: Code,
    title: 'برنامه‌نویسی',
    description: 'آموزش اصول برنامه‌نویسی',
  },
  {
    icon: Lightbulb,
    title: 'خلاقیت',
    description: 'پرورش تفکر خلاق',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a472a]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#ffd700]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-[#ffd700]/15 rounded-full blur-2xl animate-float-medium" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#ffd700]/20 rounded-full blur-xl animate-float-fast" />
        
        {/* Mathematical Symbols */}
        <div className="absolute top-40 left-1/4 text-[#ffd700]/20 text-6xl font-bold transform rotate-12">∑</div>
        <div className="absolute bottom-1/3 right-1/4 text-[#ffd700]/20 text-7xl font-bold transform -rotate-15">π</div>
        <div className="absolute top-2/3 left-1/3 text-[#ffd700]/20 text-5xl font-bold transform rotate-45">∞</div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a472a]/80" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 py-20 md:py-0 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">مرکز تخصصی محاسبات ذهنی و رباتیک</h1>
            <p className="text-lg md:text-xl mb-8">با ما مسیر موفقیت خود را در دنیای محاسبات و تکنولوژی بسازید</p>
            <Link
              href="/register"
              className="inline-block bg-[#ffd700] text-[#1a472a] px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold hover:bg-[#ffd700]/90 transition-colors"
            >
              شروع ثبت نام
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">ویژگی‌های دوره‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:transform hover:scale-105 transition-all">
                <feature.icon className="w-12 h-12 text-[#ffd700] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">رویدادهای پیش رو</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-white/80 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#ffd700]">{event.date}</span>
                    <button className="text-[#ffd700] hover:text-[#ffd700]/80 flex items-center">
                      اطلاعات بیشتر
                      <ChevronRight className="w-5 h-5 mr-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 bg-[#ffd700]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">مراحل شروع</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#ffd700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-[#ffd700]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">آماده شروع هستید؟</h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            همین حالا ثبت نام کنید و مسیر موفقیت خود را در دنیای محاسبات و تکنولوژی آغاز کنید
          </p>
          <Link
            href="/register"
            className="inline-block bg-[#ffd700] text-[#1a472a] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#ffd700]/90 transition-colors"
          >
            شروع ثبت نام
          </Link>
        </div>
      </section>
    </main>
  );
}