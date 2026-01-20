-- CreateTable
CREATE TABLE "admins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "waitlist_members" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "software_developers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "graduatingYear" INTEGER NOT NULL,
    "majors" TEXT NOT NULL,
    "minors" TEXT,
    "currentCourses" TEXT,
    "github" TEXT,
    "linkedIn" TEXT,
    "resumeLink" TEXT NOT NULL,
    "hoursPerWeek" INTEGER NOT NULL,
    "availability" TEXT NOT NULL,
    "previouslyApplied" BOOLEAN NOT NULL,
    "previousApplicationDate" TEXT,
    "whyBuild" TEXT NOT NULL,
    "projectExperience" TEXT NOT NULL,
    "technologyToLearn" TEXT NOT NULL,
    "skillJava" BOOLEAN NOT NULL DEFAULT false,
    "skillJavaScript" BOOLEAN NOT NULL DEFAULT false,
    "skillTypeScript" BOOLEAN NOT NULL DEFAULT false,
    "skillPython" BOOLEAN NOT NULL DEFAULT false,
    "skillHTML" BOOLEAN NOT NULL DEFAULT false,
    "skillCSS" BOOLEAN NOT NULL DEFAULT false,
    "skillExpressJS" BOOLEAN NOT NULL DEFAULT false,
    "skillReactJS" BOOLEAN NOT NULL DEFAULT false,
    "skillNodeJS" BOOLEAN NOT NULL DEFAULT false,
    "skillSQL" BOOLEAN NOT NULL DEFAULT false,
    "skillDjango" BOOLEAN NOT NULL DEFAULT false,
    "skillMongoDB" BOOLEAN NOT NULL DEFAULT false,
    "skillReactNative" BOOLEAN NOT NULL DEFAULT false,
    "skillReact" BOOLEAN NOT NULL DEFAULT false,
    "skillSwift" BOOLEAN NOT NULL DEFAULT false,
    "skillJavaKotlin" BOOLEAN NOT NULL DEFAULT false,
    "skillDartFlutter" BOOLEAN NOT NULL DEFAULT false,
    "confidenceGit" INTEGER NOT NULL,
    "confidenceCloud" INTEGER NOT NULL,
    "confidenceDatabase" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "product_managers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "graduatingYear" INTEGER NOT NULL,
    "majors" TEXT NOT NULL,
    "minors" TEXT,
    "currentCourses" TEXT,
    "linkedIn" TEXT,
    "resumeLink" TEXT NOT NULL,
    "hoursPerWeek" INTEGER NOT NULL,
    "availability" TEXT NOT NULL,
    "previouslyApplied" BOOLEAN NOT NULL,
    "previousApplicationDate" TEXT,
    "whyBuild" TEXT NOT NULL,
    "leadershipExperience" TEXT NOT NULL,
    "excitingTechnology" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "application_status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "role" TEXT NOT NULL,
    "isOpen" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_username_key" ON "admins"("username");

-- CreateIndex
CREATE UNIQUE INDEX "waitlist_members_email_key" ON "waitlist_members"("email");

-- CreateIndex
CREATE UNIQUE INDEX "software_developers_email_key" ON "software_developers"("email");

-- CreateIndex
CREATE INDEX "software_developers_email_idx" ON "software_developers"("email");

-- CreateIndex
CREATE INDEX "software_developers_graduatingYear_idx" ON "software_developers"("graduatingYear");

-- CreateIndex
CREATE UNIQUE INDEX "product_managers_email_key" ON "product_managers"("email");

-- CreateIndex
CREATE INDEX "product_managers_email_idx" ON "product_managers"("email");

-- CreateIndex
CREATE INDEX "product_managers_graduatingYear_idx" ON "product_managers"("graduatingYear");

-- CreateIndex
CREATE UNIQUE INDEX "application_status_role_key" ON "application_status"("role");
