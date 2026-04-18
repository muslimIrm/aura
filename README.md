
# 🧠 AI Models Explorer

## فكرة المشروع
مشروع ويب يهدف إلى عرض نماذج الذكاء الاصطناعي المتوفرة على الإنترنت (معظمها)، مع توفير معلومات تفصيلية لكل نموذج مثل:

- تكلفة الإدخال (Input Cost)
- تكلفة الإخراج (Output Cost)
- سعة فهم السياق (Context Window)
- تصنيف النموذج من حيث الذكاء والأداء

## التقنيات المستخدمة
تم بناء المشروع باستخدام التقنيات التالية:

- Next.js
- Tailwind CSS
- shadcn/ui
- Aceternity UI (لخلفيات وتصميمات حديثة)

## مصادر البيانات

تم الاعتماد على واجهات API خارجية لجلب البيانات:

- 📌 نماذج الذكاء الاصطناعي:
  https://openrouter.ai/api/v1/models

- 📌 ترتيب النماذج الأذكى (Leaderboard):
  https://api.wulong.dev/arena-ai-leaderboards/v1/leaderboard?name=text

## تحسين الأداء
تم التركيز على تحسين أداء الموقع بشكل كبير، حيث تم الوصول إلى:

- أداء مرتفع على الأجهزة المحمولة
- تحسين تحميل البيانات وتجربة المستخدم
- تصميم خفيف وسريع الاستجابة

## الهدف من المشروع
يهدف المشروع إلى تسهيل مقارنة نماذج الذكاء الاصطناعي وفهم قدراتها بشكل واضح وسريع، مما يساعد المطورين والمهتمين في اختيار النموذج المناسب.


## Project Idea
This project is a web application designed to display various AI models available across the internet (most of them), along with detailed information such as:

- Input cost
- Output cost
- Context window capacity
- Model intelligence and performance ranking

## Tech Stack
The project is built using modern web technologies:

- Next.js
- Tailwind CSS
- shadcn/ui
- Aceternity UI (for modern backgrounds and UI effects)

## Data Sources

The application relies on external APIs to fetch model data and rankings:

- 📌 AI Models API:
  https://openrouter.ai/api/v1/models

- 📌 AI Leaderboard (smartest models ranking):
  https://api.wulong.dev/arena-ai-leaderboards/v1/leaderboard?name=text

## Performance Optimization
A strong focus was placed on performance optimization, achieving:

- High performance on mobile devices
- Optimized data fetching and user experience
- Lightweight and responsive design

## Project Goal
The goal of this project is to make it easier to compare AI models and understand their capabilities clearly and efficiently, helping developers and users choose the most suitable model.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.