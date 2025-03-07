# 📌 Divar API

Divar API is the backend service for the Divar-like project, enabling users to buy and sell second-hand items.

This project is built with:

-   ⚡ [Node.js](https://nodejs.org/)
-   🔹 [TypeScript](https://www.typescriptlang.org/)
-   🚀 [Express.js](https://expressjs.com/)
-   🗄️ [MySQL](https://www.mysql.com/) (Database)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (LTS recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
-   [MySQL](https://www.mysql.com/) (Ensure MySQL Server is running)

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-folder>
npm install  # or yarn install / pnpm install
```

### Database Configuration

Create a MySQL database and update your environment variables:

```bash
DATABASE_HOST=your-database-host
DATABASE_USER=your-database-user
DATABASE_PASSWORD=your-database-password
DATABASE_NAME=your-database-name
```

Run migrations if applicable:

```bash
npm run migrate  # or yarn migrate / pnpm migrate
```

### Running the Development Server

```bash
npm run dev  # or yarn dev / pnpm dev
```

### Building the Project

```bash
npm run build
```

### Starting the Production Server

```bash
npm run start
```

## 🤝 Contribution

This project is developed by **AliRezaMousavi** ✉️ (mousavii.de@gmail.com).

If you're interested in contributing, feel free to reach out and collaborate!

---

Happy coding! 🚀
