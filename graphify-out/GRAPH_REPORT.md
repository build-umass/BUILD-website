# Graph Report - /Users/alanachilles/Documents/GitHub/BUILD-website  (2026-11-02)

## Corpus Check
- Large corpus: 106 files · ~704,050 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 349 nodes · 360 edges · 71 communities (31 shown, 40 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Build Scripts and Tooling|Build Scripts and Tooling]]
- [[_COMMUNITY_Responsive Navigation|Responsive Navigation]]
- [[_COMMUNITY_Authentication and Application APIs|Authentication and Application APIs]]
- [[_COMMUNITY_Shared Layout and Public Pages|Shared Layout and Public Pages]]
- [[_COMMUNITY_Documented Stack and Branding|Documented Stack and Branding]]
- [[_COMMUNITY_TypeScript Compiler Settings|TypeScript Compiler Settings]]
- [[_COMMUNITY_Documented Application Management|Documented Application Management]]
- [[_COMMUNITY_Application Landing Components|Application Landing Components]]
- [[_COMMUNITY_Runtime Package Dependencies|Runtime Package Dependencies]]
- [[_COMMUNITY_Project Portfolio Components|Project Portfolio Components]]
- [[_COMMUNITY_Admin Dashboard State|Admin Dashboard State]]
- [[_COMMUNITY_Product Manager Data Model|Product Manager Data Model]]
- [[_COMMUNITY_Software Developer Data Model|Software Developer Data Model]]
- [[_COMMUNITY_Application Roles and FAQs|Application Roles and FAQs]]
- [[_COMMUNITY_Contact Email Endpoint|Contact Email Endpoint]]
- [[_COMMUNITY_Dell Brand Assets|Dell Brand Assets]]
- [[_COMMUNITY_Amherst Ballet Website|Amherst Ballet Website]]
- [[_COMMUNITY_Campus Connect Onboarding|Campus Connect Onboarding]]
- [[_COMMUNITY_EliteCode Interview Practice|EliteCode Interview Practice]]
- [[_COMMUNITY_IUCG Article Preview|IUCG Article Preview]]
- [[_COMMUNITY_IUCG Insights Search|IUCG Insights Search]]
- [[_COMMUNITY_Kapok Event Map|Kapok Event Map]]
- [[_COMMUNITY_Lobster Business Locator|Lobster Business Locator]]
- [[_COMMUNITY_MASSPIRG Campaign Design|MASSPIRG Campaign Design]]
- [[_COMMUNITY_Debt Free Future Campaign|Debt Free Future Campaign]]
- [[_COMMUNITY_Undergraduate Law Review|Undergraduate Law Review]]
- [[_COMMUNITY_Cycle Tracking Interface|Cycle Tracking Interface]]
- [[_COMMUNITY_Student Bridges Programs|Student Bridges Programs]]
- [[_COMMUNITY_UMass Photo Website|UMass Photo Website]]
- [[_COMMUNITY_Upward Bound Programs|Upward Bound Programs]]
- [[_COMMUNITY_Next.js Configuration|Next.js Configuration]]
- [[_COMMUNITY_BUILD Community Photograph|BUILD Community Photograph]]
- [[_COMMUNITY_Companionship Illustration|Companionship Illustration]]
- [[_COMMUNITY_Consulting Analytics Illustration|Consulting Analytics Illustration]]
- [[_COMMUNITY_Informal Conversation Illustration|Informal Conversation Illustration]]
- [[_COMMUNITY_Data Analytics Illustration|Data Analytics Illustration]]
- [[_COMMUNITY_Personal Growth Illustration|Personal Growth Illustration]]
- [[_COMMUNITY_Laptop Work Illustration|Laptop Work Illustration]]
- [[_COMMUNITY_Group Conversation Illustration|Group Conversation Illustration]]
- [[_COMMUNITY_Questions Illustration|Questions Illustration]]
- [[_COMMUNITY_Office Work Illustration|Office Work Illustration]]
- [[_COMMUNITY_Mobile Application Illustration|Mobile Application Illustration]]
- [[_COMMUNITY_Teamwork Illustration|Teamwork Illustration]]
- [[_COMMUNITY_Web Development Illustration|Web Development Illustration]]
- [[_COMMUNITY_Amazon Brand Assets|Amazon Brand Assets]]
- [[_COMMUNITY_Blue Cross Brand Assets|Blue Cross Brand Assets]]
- [[_COMMUNITY_Cisco Brand Assets|Cisco Brand Assets]]
- [[_COMMUNITY_Elastic Brand Assets|Elastic Brand Assets]]
- [[_COMMUNITY_Fidelity Brand Assets|Fidelity Brand Assets]]
- [[_COMMUNITY_Google Brand Assets|Google Brand Assets]]
- [[_COMMUNITY_Liberty Mutual Brand Assets|Liberty Mutual Brand Assets]]
- [[_COMMUNITY_MassMutual Brand Assets|MassMutual Brand Assets]]
- [[_COMMUNITY_Mastercard Brand Assets|Mastercard Brand Assets]]
- [[_COMMUNITY_Meta Brand Assets|Meta Brand Assets]]
- [[_COMMUNITY_Authentication Session Types|Authentication Session Types]]
- [[_COMMUNITY_Tailwind Theme Configuration|Tailwind Theme Configuration]]
- [[_COMMUNITY_Microsoft Logo|Microsoft Logo]]
- [[_COMMUNITY_Pratt Whitney Logo|Pratt Whitney Logo]]
- [[_COMMUNITY_Tanium Logo|Tanium Logo]]
- [[_COMMUNITY_Uber Logo|Uber Logo]]
- [[_COMMUNITY_Visa Logo Assets|Visa Logo Assets]]
- [[_COMMUNITY_Profile Avatar Placeholder|Profile Avatar Placeholder]]
- [[_COMMUNITY_AIS Project Logo|AIS Project Logo]]
- [[_COMMUNITY_Kapok Project Logo|Kapok Project Logo]]
- [[_COMMUNITY_STEMPLORE Project Logo|STEMPLORE Project Logo]]
- [[_COMMUNITY_UMass Fitness Logo|UMass Fitness Logo]]
- [[_COMMUNITY_Decorative Square Background|Decorative Square Background]]
- [[_COMMUNITY_Future Admin Users|Future Admin Users]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `BUILD UMass Website` - 15 edges
3. `PageLink` - 11 edges
4. `Admin Dashboard` - 9 edges
5. `scripts` - 7 edges
6. `JumbotronHeader()` - 7 edges
7. `Software Developer Applications` - 7 edges
8. `Product Manager Applications` - 7 edges
9. `Waitlist` - 6 edges
10. `Application Status` - 6 edges

## Surprising Connections (you probably didn't know these)
- `ProjectCardProps` --references--> `ProjectData`  [EXTRACTED]
  src/components/ProjectCard.tsx → src/content/projects.ts
- `ProjectModalProps` --references--> `ProjectData`  [EXTRACTED]
  src/components/ProjectModal.tsx → src/content/projects.ts
- `NavbarLgProps` --references--> `PageLink`  [EXTRACTED]
  src/components/nav/NavbarLg.tsx → src/content/nav.ts
- `NavbarLinkProps` --references--> `PageLink`  [EXTRACTED]
  src/components/nav/NavbarLink.tsx → src/content/nav.ts
- `NavbarMenuProps` --references--> `PageLink`  [EXTRACTED]
  src/components/nav/NavbarMenu.tsx → src/content/nav.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Application Management** — readme_application_system, readme_admin_dashboard, readme_application_status, readme_waitlist [EXTRACTED 1.00]

## Communities (71 total, 40 thin omitted)

### Community 0 - "Build Scripts and Tooling"
Cohesion: 0.07
Nodes (26): devDependencies, autoprefixer, dotenv, eslint, eslint-config-next, postcss, prettier, prisma (+18 more)

### Community 1 - "Responsive Navigation"
Cohesion: 0.14
Nodes (17): Navbar(), NavbarLg(), NavbarLgProps, NavbarLink(), NavbarLinkProps, NavbarMenu(), NavbarMenuProps, NavbarMenuItemProps (+9 more)

### Community 2 - "Authentication and Application APIs"
Cohesion: 0.10
Nodes (3): CreateWaitlistInput, globalForPrisma, authOptions

### Community 3 - "Shared Layout and Public Pages"
Cohesion: 0.12
Nodes (7): CompanyLogo, CompanyLogos(), Footer(), JumbotronHeader(), JumbotronHeaderProps, MainLayout(), Home()

### Community 4 - "Documented Stack and Branding"
Cohesion: 0.13
Nodes (21): BUILD UMass Brand Guidelines, BUILD Red #dc2626, BUILD UMass, BUILD UMass Website, Contact Form, DATABASE_URL, Montserrat, NextAuth Credentials Authentication (+13 more)

### Community 5 - "TypeScript Compiler Settings"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+12 more)

### Community 6 - "Documented Application Management"
Cohesion: 0.18
Nodes (18): Admin Dashboard, GET /api/admin/data, DELETE /api/admin/delete, ADMIN_PASSWORD, GET/POST /api/admin/status, Application Status, GET /api/applications/status, application_status Table (+10 more)

### Community 7 - "Application Landing Components"
Cohesion: 0.15
Nodes (7): ApplicationCardProps, ClosedApplicationsCard(), ClosedApplicationsCardProps, LookForCard(), LookForCardProps, WaitlistModalProps, FAQ

### Community 8 - "Runtime Package Dependencies"
Cohesion: 0.14
Nodes (14): dependencies, axios, bcryptjs, clsx, lucide-react, next, next-auth, @prisma/client (+6 more)

### Community 9 - "Project Portfolio Components"
Cohesion: 0.27
Nodes (7): ProjectCardProps, ProjectModal(), ProjectModalProps, categories, ProjectData, ProjectMember, projects

### Community 10 - "Admin Dashboard State"
Cohesion: 0.25
Nodes (5): AdminData, DeleteModalState, ProductManager, SoftwareDeveloper, WaitlistMember

### Community 13 - "Application Roles and FAQs"
Cohesion: 0.40
Nodes (4): faqs, lookingFor, Role, roles

### Community 14 - "Contact Email Endpoint"
Cohesion: 0.67
Nodes (3): ContactForm, handler(), isValidEmail()

### Community 15 - "Dell Brand Assets"
Cohesion: 0.67
Nodes (3): Dell, Dell Technologies, Dell Technologies logo

### Community 16 - "Amherst Ballet Website"
Cohesion: 0.67
Nodes (3): Amherst Ballet season information website, Navigation and donation button, Season and class information

### Community 17 - "Campus Connect Onboarding"
Cohesion: 0.67
Nodes (3): Campus Connect mobile app screens, Shop or service business onboarding, Sign in and account creation

### Community 18 - "EliteCode Interview Practice"
Cohesion: 0.67
Nodes (3): Gamified coding interview practice, EliteCode coding interview landing page, Join the Waitlist call to action

### Community 19 - "IUCG Article Preview"
Cohesion: 0.67
Nodes (3): Article preview overlay, Card grid with dog placeholders, IUCG article overlay prototype

### Community 20 - "IUCG Insights Search"
Cohesion: 0.67
Nodes (3): Article search and relevance sorting, IUCG Insights publishing website, Topic and industry filtering

### Community 21 - "Kapok Event Map"
Cohesion: 0.67
Nodes (3): Bottom navigation icons, Event search on a map, Kapok event map mobile app screenshot

### Community 22 - "Lobster Business Locator"
Cohesion: 0.67
Nodes (3): Business detail and directions, Lobster restaurant and dealer map app, Map location pins and search

### Community 23 - "MASSPIRG Campaign Design"
Cohesion: 0.67
Nodes (3): Campaign cards with hover detail, Get involved call to action, MASSPIRG campaign page design

### Community 24 - "Debt Free Future Campaign"
Cohesion: 0.67
Nodes (3): Free public college and debt cancellation, Debt Free Future campaign website, Interactive Massachusetts map

### Community 25 - "Undergraduate Law Review"
Cohesion: 0.67
Nodes (3): UMass Undergraduate Law Review website, Lady Justice hero image, Law review articles and submissions

### Community 26 - "Cycle Tracking Interface"
Cohesion: 0.67
Nodes (3): Cycle day calendar, Flow and mood logging, Menstrual cycle tracking mobile interface

### Community 27 - "Student Bridges Programs"
Cohesion: 0.67
Nodes (3): Academic courses and community events, Student Bridges Programs and Events website, Virtual program cards

### Community 28 - "UMass Photo Website"
Cohesion: 0.67
Nodes (3): About and executive board sections, Campus photo banner, UMass Photo organization website

### Community 29 - "Upward Bound Programs"
Cohesion: 0.67
Nodes (3): Upward Bound program website, Student program benefits, Year-round development and expectations

## Knowledge Gaps
- **184 isolated node(s):** `CreateProductManagerInput`, `CreateSoftwareDeveloperInput`, `CreateWaitlistInput`, `globalForPrisma`, `nextConfig` (+179 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **40 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `prisma` connect `Build Scripts and Tooling` to `Authentication and Application APIs`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Package Dependencies` to `Build Scripts and Tooling`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `CreateProductManagerInput`, `CreateSoftwareDeveloperInput`, `CreateWaitlistInput` to the rest of the system?**
  _184 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Build Scripts and Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Responsive Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.14245014245014245 - nodes in this community are weakly interconnected._
- **Should `Authentication and Application APIs` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._
- **Should `Shared Layout and Public Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.11956521739130435 - nodes in this community are weakly interconnected._
## Extraction Limitations

- Graph health: 131 raw edges have unresolved endpoints (including external imports and internal symbol references). One same-endpoint edge collapsed in the undirected graph. See `GRAPH_HEALTH.txt`.
- Exact semantic token usage is unavailable in this host. Numeric zero token values above and in cost.json are schema placeholders, not a claim of zero model usage or cost. AST extraction uses no LLM.
- Image assets were visually inspected; brand logos alone do not establish an employment or partnership relationship.
