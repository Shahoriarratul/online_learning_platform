# Online Learning Platform

A modern, full-featured learning management system (LMS) built with Next.js, React, and TypeScript. This platform enables instructors to create and sell online courses while students can discover, enroll, and complete courses with video content, progress tracking, and payment processing.

[![Next.js](https://img.shields.io/badge/Next.js-14.1.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.11.0-2d3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-00758f?style=flat-square&logo=mysql)](https://www.mysql.com/)

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Database](#database)
- [Key Features Explained](#key-features-explained)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

### 🎓 For Students
- **Course Discovery**: Browse and search courses by category
- **Course Enrollment**: One-click enrollment with Stripe payment processing
- **Video Learning**: Stream high-quality course videos with Mux video hosting
- **Progress Tracking**: Automatic tracking of completed chapters
- **Responsive Design**: Seamless experience on desktop, tablet, and mobile devices
- **Free Previews**: Access free chapters before purchasing

### 👨‍🏫 For Instructors
- **Course Management**: Create, edit, and publish courses with rich content
- **Chapter Organization**: Add, reorder, and manage course chapters
- **Video Hosting**: Upload and manage video content with Mux integration
- **File Attachments**: Add downloadable resources (PDFs, documents, etc.)
- **Pricing**: Set and manage course prices
- **Analytics Dashboard**: View course performance and revenue metrics
- **Publishing Control**: Publish/unpublish courses at any time
- **Rich Editor**: Create engaging chapter descriptions with WYSIWYG editor

### 🔒 General Features
- **Authentication**: Secure authentication with Clerk (email, social auth)
- **Authorization**: Role-based access control (Student vs. Instructor)
- **Payment Processing**: Secure payment handling with Stripe
- **Responsive UI**: Built with Tailwind CSS and Radix UI components
- **Real-time Updates**: Instant UI updates using Next.js Server Components
- **Database**: Powerful relational database with Prisma ORM

## Technology Stack

### Frontend
- **Framework**: Next.js 14.1.4
- **UI Library**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.3.0
- **Component Library**: Radix UI
- **Form Handling**: React Hook Form + Zod validation
- **Rich Text Editor**: React Quill
- **Drag & Drop**: @hello-pangea/dnd
- **Data Visualization**: Recharts
- **Icons**: Lucide React, React Icons

### Backend & Services
- **Runtime**: Node.js (Next.js API Routes)
- **ORM**: Prisma 5.11.0
- **Database**: MySQL (Aiven Cloud)
- **Authentication**: Clerk
- **Payment Processing**: Stripe
- **Video Hosting**: Mux (video.mux.com)
- **File Storage**: UploadThing
- **Image Processing**: Sharp

### Development & DevOps
- **Package Manager**: npm
- **Build Tool**: Next.js built-in (Webpack)
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier (via Next.js config)
- **Deployment**: Vercel (recommended) or any Node.js hosting

## Project Structure

```
online_learning_platform/
├── app/                           # Next.js App Router
│   ├── (auth)/                   # Authentication routes (Clerk)
│   │   ├── (routes)/
│   │   │   ├── sign-in/          # Sign-in page
│   │   │   └── sign-up/          # Sign-up page
│   │   └── layout.tsx
│   │
│   ├── (dashboard)/              # Main application routes
│   │   ├── _components/          # Layout components
│   │   │   ├── navbar.tsx        # Top navigation
│   │   │   ├── sidebar.tsx       # Main sidebar
│   │   │   └── mobile-sidebar.tsx
│   │   │
│   │   └── (routes)/
│   │       ├── (root)/           # Dashboard home
│   │       │   └── page.tsx      # Student dashboard
│   │       │
│   │       ├── search/           # Course search
│   │       │   ├── page.tsx
│   │       │   └── _components/
│   │       │       ├── categories.tsx
│   │       │       └── category-item.tsx
│   │       │
│   │       └── teacher/          # Instructor routes
│   │           ├── create/       # Create new course
│   │           │   └── page.tsx
│   │           │
│   │           ├── courses/      # Manage courses
│   │           │   ├── page.tsx
│   │           │   └── [courseId]/
│   │           │       ├── page.tsx
│   │           │       ├── _components/
│   │           │       │   ├── title-form.tsx
│   │           │       │   ├── description-form.tsx
│   │           │       │   ├── image-form.tsx
│   │           │       │   ├── category-form.tsx
│   │           │       │   ├── price-form.tsx
│   │           │       │   ├── attachment-form.tsx
│   │           │       │   ├── chapter-form.tsx
│   │           │       │   └── actions-button.tsx
│   │           │       │
│   │           │       └── chapters/
│   │           │           └── [chapterId]/
│   │           │               ├── page.tsx
│   │           │               └── _components/
│   │           │                   ├── chapter-title-form.tsx
│   │           │                   ├── chapter-description-form.tsx
│   │           │                   ├── chapter-access-form.tsx
│   │           │                   ├── chapter-video-form.tsx
│   │           │                   └── chapter-actions-button.tsx
│   │           │
│   │           └── analytics/    # Instructor analytics
│   │               └── page.tsx
│   │
│   ├── (course)/                 # Course viewing routes
│   │   └── courses/
│   │       └── [courseId]/
│   │           ├── layout.tsx
│   │           ├── page.tsx
│   │           ├── _components/
│   │           │   ├── course-navbar.tsx
│   │           │   ├── course-sidebar.tsx
│   │           │   └── course-sidebar-item.tsx
│   │           │
│   │           └── chapters/
│   │               └── [chapterId]/
│   │                   ├── page.tsx      # Chapter content
│   │                   └── _components/
│   │                       ├── video-player.tsx
│   │                       ├── course-enroll-button.tsx
│   │                       └── course-progress-button.tsx
│   │
│   ├── api/                      # API Routes
│   │   ├── courses/              # Course endpoints
│   │   │   ├── route.ts          # POST /api/courses
│   │   │   └── [courseId]/
│   │   │       ├── route.ts      # GET/PATCH/DELETE course
│   │   │       ├── publish/      # Publish course
│   │   │       ├── unpublish/    # Unpublish course
│   │   │       ├── checkout/     # Stripe checkout
│   │   │       ├── chapters/     # Chapter endpoints
│   │   │       │   ├── route.ts
│   │   │       │   ├── reorder/  # Reorder chapters
│   │   │       │   └── [chapterId]/
│   │   │       │       ├── route.ts
│   │   │       │       ├── publish/
│   │   │       │       └── unpublish/
│   │   │       └── attachments/  # File attachments
│   │   │
│   │   ├── uploadthing/          # File upload endpoints
│   │   │   ├── core.ts           # UploadThing configuration
│   │   │   └── route.ts
│   │   │
│   │   └── webhook/              # Stripe webhooks
│   │       └── route.ts          # Handle payment events
│   │
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
│
├── components/                   # Reusable components
│   ├── ui/                       # UI primitives (Radix-based)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── table.tsx
│   │   └── ...more
│   │
│   ├── modals/
│   │   └── confirm-modal.tsx     # Confirmation dialog
│   │
│   ├── providers/
│   │   ├── toaster-provider.tsx  # Toast notifications
│   │   └── confetti-provider.tsx # Celebration animation
│   │
│   ├── banner.tsx                # Alert/status banner
│   ├── course-card.tsx           # Course listing card
│   ├── courses-list.tsx          # Course grid
│   ├── editor.tsx                # Rich text editor
│   ├── file-upload.tsx           # File upload component
│   ├── icon-badge.tsx            # Icon with background
│   ├── navbar-routes.tsx         # Dynamic navbar
│   ├── preview.tsx               # Rich text preview
│   └── search-input.tsx          # Search component
│
├── actions/                      # Server Actions (Next.js)
│   ├── get-analytics.ts          # Fetch analytics data
│   ├── get-chapters.ts           # Fetch chapter details
│   ├── get-courses.ts            # Fetch courses list
│   ├── get-dashboard-courses.ts  # Fetch user's courses
│   └── get-progress.ts           # Calculate progress
│
├── hooks/                        # Custom React hooks
│   ├── use-confetti-store.ts    # Confetti animation
│   └── use-debounce.ts          # Debounce hook
│
├── lib/                          # Utilities & helpers
│   ├── db.ts                     # Prisma client
│   ├── stripe.ts                 # Stripe initialization
│   ├── teacher.ts                # Teacher authorization
│   ├── uploadthing.ts            # UploadThing client
│   ├── format.ts                 # Formatting utilities
│   └── utils.ts                  # Common utilities
│
├── prisma/
│   └── schema.prisma             # Database schema
│
├── public/                       # Static files
│
├── middleware.ts                 # Clerk auth middleware
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies & scripts
└── .env.example                  # Environment variables template
```

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9.0 or later (or yarn/pnpm)
- **Git**
- A **MySQL** database (we recommend [Aiven](https://aiven.io/) for managed hosting)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/online_learning_platform.git
   cd online_learning_platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your `.env.local`** (see [Environment Setup](#environment-setup) section)

5. **Generate Prisma client**
   ```bash
   npm run postinstall
   # or manually:
   npx prisma generate
   ```

6. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

7. **Start the development server**
   ```bash
   npm run dev
   ```

8. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Sign up as a new user
   - Explore the platform!

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```dotenv
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key

# Database (MySQL)
DATABASE_URL=mysql://username:password@host:port/database?ssl-mode=REQUIRED

# Stripe Payment Processing
STRIPE_API_KEY=sk_test_your_stripe_api_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Mux Video Hosting
MUX_TOKEN_ID=your_mux_token_id
MUX_TOKEN_SECRET=your_mux_token_secret

# UploadThing File Storage
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Teacher ID (set this to a Clerk user ID to enable teacher features for testing)
TEACHER_ID=user_xxxxxxxxxxxxx
```

### Service Setup Guide

#### 1. **Clerk Authentication**
- Go to [clerk.com](https://clerk.com) and create an account
- Create a new application
- Copy the Publishable Key and Secret Key
- Enable Email/Password and Google OAuth authentication
- Add [http://localhost:3000](http://localhost:3000) to allowed redirect URIs

#### 2. **MySQL Database**
- Use [Aiven](https://aiven.io/) for managed MySQL (recommended)
- Or install MySQL locally
- Create a database and note the connection string
- Format: `mysql://user:password@host:port/dbname?ssl-mode=REQUIRED`

#### 3. **Stripe Payment Processing**
- Visit [stripe.com](https://stripe.com)
- Create a Stripe account
- Copy API keys from the Dashboard
- Set up a webhook endpoint for your local development using [Stripe CLI](https://stripe.com/docs/stripe-cli)
- Test webhook: `stripe listen --forward-to localhost:3000/api/webhook`

#### 4. **Mux Video Hosting**
- Create an account at [mux.com](https://mux.com)
- Generate API credentials (Token ID and Secret)
- Used for uploading and streaming videos

#### 5. **UploadThing File Storage**
- Sign up at [uploadthing.com](https://uploadthing.com)
- Create an app and copy the API credentials
- Used for course attachments and course images

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000) with hot reload enabled.

### Production Build

```bash
npm run build
npm run start
```

### Database Commands

```bash
# Run migrations
npx prisma migrate dev --name your_migration_name

# View database in Prisma Studio (visual editor)
npx prisma studio

# Reset database (⚠️ deletes all data)
npx prisma migrate reset

# Generate Prisma client
npx prisma generate
```

### Linting & Code Quality

```bash
npm run lint
```

## Database

### Schema Overview

The application uses Prisma ORM with MySQL. Key models include:

- **Course**: Main course entity with pricing and publishing status
- **Category**: Course categories for organization
- **Chapter**: Course lessons/sections with video content
- **MuxData**: Video metadata for streaming
- **Attachment**: Course files and resources
- **UserProgress**: Student progress tracking
- **Purchase**: Student enrollment records
- **StripeCustomer**: Payment customer mapping

### Full Schema

See [prisma/schema.prisma](prisma/schema.prisma) for the complete database schema.

## Key Features Explained

### 1. Course Creation Flow
1. Teacher creates a course with title
2. Teacher adds course details (description, image, category, price)
3. Teacher creates chapters
4. Teacher adds videos to chapters (uploaded to Mux)
5. Teacher marks chapters as free or paid-only
6. Teacher publishes course (validation ensures all required fields)

### 2. Student Enrollment
1. Student browses courses or uses search
2. Student selects a course
3. For paid courses: Student completes Stripe payment
4. Student gains access to purchased/free content
5. Student progress is automatically tracked

### 3. Video Streaming
- Videos uploaded to **Mux** for reliable streaming
- Adaptive bitrate streaming for different connection speeds
- Video processing notifications in UI
- Secure playback URLs

### 4. Payment Processing
- Stripe integration for secure payments
- Webhook handling for payment events
- Customer records stored in database
- Purchase records linked to users

### 5. Progress Tracking
- Automatic chapter completion marking
- Course progress dashboard
- Student can see completed vs. in-progress courses
- Teacher analytics show course engagement

## API Documentation

### Courses API

#### Create Course
```
POST /api/courses
Body: { title: string }
Returns: Course object
```

#### Get/Update Course
```
GET /api/courses/[courseId]
PATCH /api/courses/[courseId]
Body: { title?, description?, imageUrl?, price?, categoryId? }
```

#### Delete Course
```
DELETE /api/courses/[courseId]
```

#### Publish Course
```
PATCH /api/courses/[courseId]/publish
```

#### Unpublish Course
```
PATCH /api/courses/[courseId]/unpublish
```

#### Checkout
```
POST /api/courses/[courseId]/checkout
Returns: Stripe session URL
```

### Chapters API

#### Create Chapter
```
POST /api/courses/[courseId]/chapters
Body: { title: string }
```

#### Update Chapter
```
PATCH /api/courses/[courseId]/chapters/[chapterId]
Body: { title?, description?, videoUrl?, isFree? }
```

#### Delete Chapter
```
DELETE /api/courses/[courseId]/chapters/[chapterId]
```

#### Reorder Chapters
```
PUT /api/courses/[courseId]/chapters/reorder
Body: [{ id: string, position: number }]
```

#### Publish Chapter
```
PATCH /api/courses/[courseId]/chapters/[chapterId]/publish
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/online_learning_platform.git
   git push -u origin main
   ```

2. **Create Vercel project**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select Next.js preset

3. **Set environment variables**
   - Add all `.env.local` variables in Vercel project settings

4. **Deploy**
   - Vercel automatically builds and deploys on push to main

### Deploy to Other Platforms

The app can be deployed to any Node.js hosting:
- AWS EC2
- Google Cloud Run
- DigitalOcean
- Railway.app
- Heroku
- Self-hosted servers

**Key requirements:**
- Node.js 18.17+
- Environment variables configured
- MySQL database accessible
- Webhook URLs updated in Stripe/Clerk

## Performance & Best Practices

### Implemented Optimizations
- **Server Components**: React Server Components for reduced client-side JavaScript
- **Streaming**: Real-time UI updates without page reloads
- **Database Indexing**: Optimized Prisma queries with proper indexes
- **Image Optimization**: Next.js Image component with auto-optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Browser and server-side caching strategies

### Recommended Enhancements
- Enable Redis for session caching
- Implement CDN for static assets
- Use database read replicas for analytics queries
- Add rate limiting to API routes
- Implement database connection pooling

## Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure:
- Code follows the existing style
- TypeScript types are properly defined
- Changes are tested locally
- Commit messages are clear and descriptive

## Troubleshooting

### Common Issues

**Database Connection Error**
- Verify `DATABASE_URL` is correct
- Check MySQL server is running
- Ensure firewall allows connections

**Stripe Webhook Failed**
- Verify webhook secret in `.env.local`
- Check webhook endpoint URL in Stripe dashboard
- Use `stripe listen` CLI for local testing

**Mux Video Not Playing**
- Verify `MUX_TOKEN_ID` and `MUX_TOKEN_SECRET`
- Check video upload completed (check Mux dashboard)
- Clear browser cache

**Clerk Authentication Issues**
- Verify publishable key and secret
- Check allowed redirect URIs in Clerk dashboard
- Clear browser cookies

**UploadThing Upload Fails**
- Verify API credentials
- Check file size limits
- Ensure HTTPS in production

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Support & Contact

For questions, issues, or feedback:
- Open an issue on GitHub
- Email: support@onlinelearningplatform.com
- Documentation: [Full Docs](https://docs.example.com)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database with [Prisma](https://www.prisma.io/)
- Video hosting by [Mux](https://mux.com/)
- Authentication via [Clerk](https://clerk.com/)
- Payments processed by [Stripe](https://stripe.com/)

---

**Last Updated**: January 2026
