# 美食佳肴 (Měishí Jiāyáo) - 您的智能菜谱伴侣

美食佳肴是一个现代、美观且功能丰富的菜谱应用。它不仅能帮助您发现和管理数千种美味食谱，还集成了强大的 AI 功能，可以根据您手头的食材智能推荐菜肴。

## ✨ 主要功能 (Key Features)

*   **浏览菜谱**: 按“家常菜”、“快手菜”等分类清晰地浏览菜谱。
*   **智能搜索**: 按菜谱名称或食材快速找到您想要的食谱。
*   **AI 智能推荐**: 输入您拥有的食材，让 AI 为您量身打造一道美味佳肴。
*   **收藏夹**: 将您喜欢的菜谱保存在本地，方便随时查看。
*   **分享功能**: 通过链接轻松将您喜爱的菜谱分享给朋友和家人。
*   **菜谱详情**: 查看包含准备时间、烹饪时间、份量、详细配料和步骤的完整菜谱信息。
*   **响应式设计**: 无论在桌面电脑还是手机上，都能获得完美的视觉和使用体验。
*   **精美 UI**: 基于 ShadCN UI 和 Tailwind CSS 构建，界面现代、优雅。

## 🛠️ 技术栈 (Tech Stack)

*   **前端框架**: [Next.js](https://nextjs.org/) (使用 App Router)
*   **语言**: [TypeScript](https://www.typescriptlang.org/)
*   **UI 组件库**: [ShadCN UI](https://ui.shadcn.com/)
*   **样式**: [Tailwind CSS](https://tailwindcss.com/)
*   **AI 功能**: [Google AI (Gemini)](https://ai.google/discover/gemini/) via [Genkit](https://firebase.google.com/docs/genkit)
*   **部署**: [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 🚀 快速开始 (Getting Started)

按照以下步骤在您的本地计算机上运行此项目。

### 1. 先决条件

*   [Node.js](https://nodejs.org/) (建议使用 v18 或更高版本)
*   [pnpm](https://pnpm.io/installation) (或使用 npm/yarn)

### 2. 克隆项目

将项目克隆到您的本地设备：

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 3. 安装依赖

安装项目所需的所有依赖项：

```bash
pnpm install
```

### 4. 设置环境变量

AI 功能需要 Google AI API 密钥。

1.  复制 `.env.example` 文件并重命名为 `.env`:
    ```bash
    cp .env.example .env
    ```
2.  在 `.env` 文件中，将 `YOUR_API_KEY` 替换为您的真实 Google AI API 密钥。您可以从 [Google AI Studio](https://aistudio.google.com/app/apikey) 获取。
    ```
    GEMINI_API_KEY=YOUR_API_KEY
    ```

> **注意**: 如果您没有有效的结算账户，AI 图像生成功能将不可用，但应用会优雅地回退，不会影响其他功能的使用。

### 5. 运行开发服务器

现在，启动 Next.js 开发服务器：

```bash
pnpm run dev
```

在您的浏览器中打开 [http://localhost:9002](http://localhost:9002) 即可看到正在运行的应用。

## ☁️ 部署教程 (Deployment Guide)

本项目已配置为可通过 **Firebase App Hosting** 轻松部署。

### 从电脑部署

Firebase App Hosting 与 GitHub 集成，可以实现持续部署 (CI/CD)。您只需将代码推送到 GitHub，Firebase 就会自动为您构建和部署新版本。

1.  **创建一个 Firebase 项目**:
    *   访问 [Firebase 控制台](https://console.firebase.google.com/) 并创建一个新项目。

2.  **将您的应用连接到 Firebase**:
    *   按照 Firebase Studio 的指引或官方文档将您的 GitHub 仓库连接到 Firebase App Hosting。您需要授权 Firebase 访问您的仓库。

3.  **触发部署**:
    *   设置完成后，每当您将新的提交推送到主分支 (`main` 或 `master`) 时，Firebase App Hosting 都会自动开始一个新的构建和部署流程。
    *   您可以在 Firebase 控制台的 "App Hosting" 部分查看部署状态和历史记录。

### 从手机部署

直接从手机进行代码部署是不常见的做法，因为部署通常需要一个安全的、配置好的环境 (如您的电脑或 CI/CD 服务)。

然而，您可以通过手机**触发**一个已经设置好的自动化部署流程：

1.  **使用 GitHub 移动版**: 在您的手机上安装 [GitHub 移动应用](https://github.com/mobile)。
2.  **合并拉取请求 (Pull Request)**: 如果您的工作流配置为在合并到主分支时触发部署，您可以在手机上审核并合并一个 PR。这会自动启动 Firebase App Hosting 的部署流程。
3.  **查看部署状态**: 您随后可以在手机浏览器中访问 Firebase 控制台，监控部署的进度和结果。

这种方式利用了 CI/CD 的强大功能，让您即使不在电脑前也能轻松管理您的应用发布。

---

祝您编码愉快！
