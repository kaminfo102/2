import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, BookOpen, Award } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'دوره پیشرفته برنامه‌نویسی',
    date: '۱۴۰۳/۰۱/۱۵',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    description: 'دوره جامع و پیشرفته برنامه‌نویسی با جدیدترین تکنولوژی‌ها',
  },
  {
    id: 2,
    title: 'کارگاه هوش مصنوعی',
    date: '۱۴۰۳/۰۲/۰۱',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    description: 'آشنایی با مفاهیم پایه و پیشرفته هوش مصنوعی',
  },
  {
    id: 3,
    title: 'سمینار امنیت سایبری',
    date: '۱۴۰۳/۰۲/۱۵',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    description: 'بررسی چالش‌های امنیتی در دنیای دیجیتال',
  },
];

const steps = [
  {
    icon: Users,
    title: 'ثبت نام اولیه',
    description: 'وارد کردن اطلاعات شخصی و تکمیل فرم',
  },
  {
    icon: Calendar,
    title: 'انتخاب دوره',
    description: 'انتخاب دوره مورد نظر و سطح آموزشی',
  },
  {
    icon: BookOpen,
    title: 'پرداخت شهریه',
    description: 'پرداخت آنلاین و آپلود رسید پرداخت',
  },
  {
    icon: Award,
    title: 'تأیید نهایی',
    description: 'بررسی مدارک و تأیید ثبت نام',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a472a]">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 py-20 md:py-0 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">مرکز آموزش تخصصی</h1>
            <p className="text-lg md:text-xl mb-8">با ما مسیر موفقیت خود را بسازید</p>
            <Link
              href="/register"
              className="inline-block bg-[#ffd700] text-[#1a472a] px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold hover:bg-[#ffd700]/90 transition-colors"
            >
              ثبت نام دوره‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">رویدادهای پیش رو</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform">
                <div className="relative h-48 md:h-56">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {event.date}
                    </span>
                    <button className="text-primary hover:text-primary/80 text-sm md:text-base">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-12 md:py-20 px-4 bg-[#ffd700]/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">مراحل ثبت نام</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">آماده شروع هستید؟</h2>
          <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8">
            همین حالا ثبت نام کنید و مسیر موفقیت خود را آغاز کنید
          </p>
          <Link
            href="/register"
            className="inline-block bg-[#ffd700] text-[#1a472a] px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold hover:bg-[#ffd700]/90 transition-colors"
          >
            شروع ثبت نام
          </Link>
        </div>
      </section>
    </main>
  );
}