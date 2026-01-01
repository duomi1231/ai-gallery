import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, prompt } = body;

    // Simple validation
    if (!url || !prompt) {
      return NextResponse.json(
        { error: 'Missing required fields: url and prompt' },
        { status: 400 }
      );
    }

    const image = await prisma.image.create({
      data: {
        url,
        prompt,
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error('Error creating image:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
// ... 上面是你写好的 POST 函数 ...

// 新增：GET 方法，用于获取图片列表
export async function GET() {
  try {
    const images = await prisma.image.findMany({
      orderBy: {
        createdAt: 'desc', // 对应 PRD：按时间倒序排列
      },
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}