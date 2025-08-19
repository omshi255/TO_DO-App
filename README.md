# ✅ To-Do Application — NestJS + React (Vite) + MongoDB

A simple, clean full‑stack To‑Do app built for internship evaluation using a MERN‑like stack with **NestJS**, **Vite + React (TypeScript)**, and **MongoDB**.

## 🧱 Tech
- **Backend:** NestJS + @nestjs/mongoose + class-validator
- **Frontend:** Vite + React (TypeScript) + Axios
- **DB:** MongoDB (local or Atlas)
- **Language:** TypeScript (both sides)
- **Bonus:** Client‑side filtering (All / Completed / Pending)

---

## 🚀 Quick Start

### 1) Clone & Install
```bash
# unzip this repo, then:
cd backend
cp .env.example .env        # adjust MONGODB_URI if needed
npm install
npm run dev                 # http://localhost:4000
```

```bash
# in a second terminal
cd ../frontend
cp .env.example .env        # VITE_API_BASE defaults to http://localhost:4000
npm install
npm run dev                 # http://localhost:5173
```

> Make sure MongoDB is running locally or your Atlas URI is correct.

---

## 📡 API Endpoints (REST)

Base URL: `http://localhost:4000`

- **POST** `/tasks` → Create a task (body: `{ title, description?, completed? }`)
- **GET** `/tasks` → Get all tasks
- **GET** `/tasks/:id` → Get one task
- **PATCH** `/tasks/:id` → Update title/description/completed
- **DELETE** `/tasks/:id` → Delete a task

Example:
```bash
curl -X POST http://localhost:4000/tasks   -H "Content-Type: application/json"   -d '{"title":"Read NestJS docs","description":"Chapters 1–3"}'
```

---

## 🖥️ Frontend UI
- Add new tasks using the **Task Form**
- See tasks in **Task List**
- Toggle **completed** and **delete** tasks instantly
- **Filter**: All / Completed / Pending

---

## 🗂️ Project Structure

```
backend/
  src/
    app.module.ts
    main.ts
    tasks/
      dto/
        create-task.dto.ts
        update-task.dto.ts
      task.schema.ts
      tasks.controller.ts
      tasks.module.ts
      tasks.service.ts
  .env.example
  package.json
  tsconfig.json

frontend/
  src/
    api.ts
    ui/App.tsx
    main.tsx
    styles.css
  .env.example
  index.html
  vite.config.ts
  package.json
  tsconfig.json
```

---

## 🌐 Deployment (Optional)
- **Backend**: Render/Heroku/Fly → set `MONGODB_URI` and `PORT`
- **Frontend**: Vercel/Netlify → set `VITE_API_BASE` env to your backend URL
- **DB**: MongoDB Atlas → get connection string and paste into `.env`

---

## 📝 Git Tips
- Commit small, meaningful changes:
  - `feat(tasks): add PATCH endpoint`
  - `ui: add filter controls`
  - `fix: validate title length`

Good luck & happy building! 💪
```
