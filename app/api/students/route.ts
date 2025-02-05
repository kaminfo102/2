import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const students = await prisma.registration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت اطلاعات فراگیران' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}