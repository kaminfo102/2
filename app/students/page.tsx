'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { formatPersianDate } from '@/lib/utils/date';
import { Dialog } from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Download } from 'lucide-react';
import Link from 'next/link';

interface Student {
  id: string;
  fullName: string;
  nationalId: string;
  birthDate: string;
  city: string;
  level: string;
  mobileNumber: string;
  receipts: string[];
  createdAt: string;
  profileImage: string;
  isPaid: boolean;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedReceipts, setSelectedReceipts] = useState<string[]>([]);
  const [selectedReceiptType, setSelectedReceiptType] = useState<'image' | 'file' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const fetchStudents = useCallback(async () => {
    try {
      const response = await fetch('/api/students');
      if (!response.ok) {
        throw new Error('خطا در واکشی اطلاعات');
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleCheckboxChange = (id: string) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, isPaid: !student.isPaid } : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.fullName.includes(searchQuery) ||
    student.nationalId.includes(searchQuery) ||
    student.mobileNumber.includes(searchQuery)
  );

  const totalCount = filteredStudents.length;
  const paidCount = filteredStudents.filter(student => student.isPaid).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a472a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ffd700]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a472a] p-6 flex flex-col items-center">
      <div className="max-w-7xl w-full bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#1a472a]">لیست فراگیران</h1>
        <div className='flex justify-center rounded-lg mb-3'>
        <Link
            href="/register"
            className="inline-block bg-[#ffd700] text-[#1a472a] px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold hover:bg-[#ffd700]/90 transition-colors"
          >
            ثبت فراگیر جدید          
        </Link>
        </div>

        <input
          type="text"
          placeholder="جستجو بر اساس نام، کد ملی یا شماره تماس..."
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* بخش اسکرول داخلی جدول */}
        <div className="overflow-auto max-h-[500px] w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">#</TableHead>
                <TableHead className="text-right">تصویر</TableHead>
                <TableHead className="text-right">نام و نام خانوادگی</TableHead>
                <TableHead className="text-right">کد ملی</TableHead>
                <TableHead className="text-right">تاریخ تولد</TableHead>
                <TableHead className="text-right">شهر</TableHead>
                <TableHead className="text-right">سطح</TableHead>
                <TableHead className="text-right">شماره تماس</TableHead>
                <TableHead className="text-right">رسیدها</TableHead>
                <TableHead className="text-right">تاریخ ثبت نام</TableHead>
                <TableHead className="text-right">وضعیت پرداخت</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student, index) => (
                <TableRow key={student.id} className={student.isPaid ? 'bg-green-200' : ''}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div
                      className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => { 
                        setSelectedImage(student.profileImage);
                        const firstImage = student.profileImage;
                        window.open(firstImage, '_blank');
                      }}
                    >
                      <Image src={student.profileImage} alt={`تصویر ${student.fullName}`} width={48} height={48} className="object-cover" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{student.fullName}</TableCell>
                  <TableCell>{student.nationalId}</TableCell>
                  <TableCell>{formatPersianDate(student.birthDate)}</TableCell>
                  <TableCell>{student.city}</TableCell>
                  <TableCell>سطح {student.level}</TableCell>
                  <TableCell>{student.mobileNumber}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedReceipts(student.receipts);
                        const firstReceipt = student.receipts[0];
                        if (firstReceipt.endsWith('.jpg') || firstReceipt.endsWith('.png')) {
                          setSelectedReceiptType('image');
                        } else {
                          setSelectedReceiptType('file');
                          window.open(firstReceipt, '_blank');
                        }
                      }}
                    >
                      <Eye className="w-4 h-4 ml-2" />
                      نمایش
                    </Button>
                  </TableCell>
                  <TableCell>{formatPersianDate(student.createdAt)}</TableCell>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={student.isPaid}
                      onChange={() => handleCheckboxChange(student.id)}
                      className="cursor-pointer"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* فوتر ثابت خارج از اسکرول جدول */}
        <div className="mt-4 text-center font-bold">
          تعداد کل دانش‌آموزان: {totalCount} - تعداد پرداختی: {paidCount}
        </div>
      </div>
      
    </div>
  );
}
