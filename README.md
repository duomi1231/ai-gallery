# AI Gallery - Technical PRD

## 1. 项目简介

**AI Gallery** 是一个基于现代 Web 技术栈构建的 AI 图片画廊应用。它旨在为用户提供一个展示和浏览 AI 生成艺术作品的平台。

本项目采用 **Next.js + TypeScript + Prisma + Tailwind CSS** 进行开发，注重性能、类型安全和用户体验。

## 2. 用户故事 (User Stories)

### 2.1 图片上传
- 作为用户，我可以上传本地图片文件。
- 在上传图片时，我可以填写该图片对应的提示词 (Prompt)，以便记录生成灵感。

### 2.2 图片浏览
- 作为用户，我可以在首页看到所有已上传图片的展示。
- 图片列表采用瀑布流 (Masonry) 布局，以适应不同尺寸的图片。
- 图片按照创建时间倒序排列 (最新的图片显示在最前面)。

## 3. 数据模型 (Schema)

本项目使用 Prisma 作为 ORM。核心数据模型 `Image` 设计如下：

```prisma
model Image {
  id        String   @id @default(uuid()) // 唯一标识符，使用 UUID
  url       String   // 图片存储地址
  prompt    String   // 对应的生成提示词
  createdAt DateTime @default(now())      // 创建时间
}
```

## 4. 技术栈 (Tech Stack)

本项目使用的核心技术包括：

- **Framework**: [Next.js](https://nextjs.org/) (React 框架)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (静态类型检查)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (原子化 CSS 框架)
- **Database ORM**: [Prisma](https://www.prisma.io/) (数据库工具)
