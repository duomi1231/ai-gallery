import { prisma } from '@/lib/prisma';

export default async function ImageGallery() {
  const images = await prisma.image.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4"
          >
            <div className="relative overflow-hidden">
              <img
                src={image.url}
                alt={image.prompt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {image.prompt}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(image.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {images.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          暂无图片，快去上传第一张吧！
        </div>
      )}
    </div>
  );
}
