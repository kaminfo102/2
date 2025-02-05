'use client';

import { useState, useEffect } from 'react';
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

interface Student {
  id: string;
  fullName: string;
  nationalId: string;
  birthDate: string;
  city: string;
  level: string;
  mobileNumber: string;
  emergencyNumber: string;
  profileImage: string;
  receipts: string[];
  createdAt: string;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedReceipts, setSelectedReceipts] = useState<string[]>([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a472a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ffd700]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a472a] p-6">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#1a472a]">لیست فراگیران</h1>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">تصویر</TableHead>
                <TableHead className="text-right">نام و نام خانوادگی</TableHead>
                <TableHead className="text-right">کد ملی</TableHead>
                <TableHead className="text-right">تاریخ تولد</TableHead>
                <TableHead className="text-right">شهر</TableHead>
                <TableHead className="text-right">سطح</TableHead>
                <TableHead className="text-right">شماره تماس</TableHead>
                <TableHead className="text-right">رسیدها</TableHead>
                <TableHead className="text-right">تاریخ ثبت نام</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div 
                      className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedImage(student.profileImage)}
                    >
                      <Image
                        src={student.profileImage}
                        alt={student.fullName}
                        fill
                        className="object-cover"
                      />
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
                      onClick={() => setSelectedReceipts(student.receipts)}
                    >
                      <Eye className="w-4 h-4 ml-2" />
                      مشاهده
                    </Button>
                  </TableCell>
                  <TableCell>{formatPersianDate(student.createdAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Modal for Profile Image */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl p-4 max-w-2xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              {selectedImage && (
                <div className="relative w-full h-[500px]">
                  <Image
                    src={selectedImage}
                    alt="تصویر پروفایل"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </Dialog>

        {/* Modal for Receipts */}
        <Dialog
          open={selectedReceipts.length > 0}
          onOpenChange={() => setSelectedReceipts([])}
        >
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl p-4 max-w-2xl w-full">
              <button
                onClick={() => setSelectedReceipts([])}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {selectedReceipts.map((receipt, index) => (
                  <div key={index} className="relative">
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={receipt}
                        alt={`رسید ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <a
                      href={receipt}
                      download
                      className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full hover:bg-primary/90"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}