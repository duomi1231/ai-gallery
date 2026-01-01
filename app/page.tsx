import ImageUploader from '@/components/ImageUploader';
import ImageGallery from '@/components/ImageGallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            AI Gallery
          </h1>
          <p className="text-gray-600">
            分享你的 AI 创作灵感
          </p>
        </header>

        <section className="mb-16">
          <ImageUploader />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pl-6 border-l-4 border-blue-500">
            作品画廊
          </h2>
          <ImageGallery />
        </section>
      </div>
    </main>
  );
}
