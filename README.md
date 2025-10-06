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
*   **部署**: [Firebase App Hosting](https://firebase.google.com/docs/app-hosting) / VPS

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

您可以选择 Firebase App Hosting 提供的自动化部署，也可以选择更灵活的轻量服务器（VPS）手动部署。

### 1. 使用 Firebase App Hosting (推荐)

Firebase App Hosting 与 GitHub 集成，可以实现持续部署 (CI/CD)。您只需将代码推送到 GitHub，Firebase 就会自动为您构建和部署新版本。

1.  **创建一个 Firebase 项目**:
    *   访问 [Firebase 控制台](https://console.firebase.google.com/) 并创建一个新项目。

2.  **将您的应用连接到 Firebase**:
    *   按照 Firebase Studio 的指引或官方文档将您的 GitHub 仓库连接到 Firebase App Hosting。您需要授权 Firebase 访问您的仓库。

3.  **触发部署**:
    *   设置完成后，每当您将新的提交推送到主分支 (`main` 或 `master`) 时，Firebase App Hosting 都会自动开始一个新的构建和部署流程。
    *   您可以在 Firebase 控制台的 "App Hosting" 部分查看部署状态和历史记录。

### 2. 在轻量服务器 (VPS) 上部署

如果您希望对部署环境有完全的控制，可以将其部署到任何 Linux 轻量服务器上。

**先决条件**:
*   一台拥有 root 权限的轻量服务器 (例如，来自阿里云、腾讯云、DigitalOcean, Vultr 等)。
*   服务器上安装了 `Node.js` (v18+) 和 `git`。
*   (推荐) 一个域名指向您的服务器 IP。
*   (推荐) 安装了 `Nginx` 和 `PM2`。

**部署步骤**:

1.  **连接到您的服务器**:
    ```bash
    ssh root@YOUR_SERVER_IP
    ```

2.  **安装 Node.js 和 pnpm**:
    推荐使用 `nvm` 来管理 Node.js 版本。
    ```bash
    # 安装 nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    # 使 nvm 命令生效
    source ~/.bashrc
    # 安装 Node.js v18
    nvm install 18
    # 安装 pnpm
    npm install -g pnpm
    ```

3.  **克隆代码并安装依赖**:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    pnpm install
    ```

4.  **设置环境变量**:
    在项目根目录下创建一个 `.env.local` 文件，并填入您的 API 密钥。
    ```bash
    echo "GEMINI_API_KEY=YOUR_API_KEY" > .env.local
    ```

5.  **构建应用**:
    ```bash
    pnpm build
    ```
    这会为生产环境优化并打包您的应用。

6.  **使用 PM2 运行应用**:
    PM2 是一个强大的进程管理器，可以确保您的应用在后台持续运行，并在崩溃时自动重启。
    ```bash
    # 全局安装 PM2
    pnpm add global pm2
    # 启动应用
    # Next.js 默认在 3000 端口启动
    pm2 start pnpm --name "meishi-app" -- start
    ```

7.  **(推荐) 配置 Nginx 反向代理**:
    使用 Nginx 可以让您轻松地通过域名 (例如 `https://your-domain.com`) 访问应用，而不是通过 IP 地址和端口号。同时，它也便于配置 SSL/TLS 加密。

    *   创建一个新的 Nginx 配置文件:
        ```bash
        sudo nano /etc/nginx/sites-available/meishi-app
        ```
    *   将以下配置粘贴进去 (将 `your-domain.com` 替换为您的域名):
        ```nginx
        server {
            listen 80;
            server_name your-domain.com;

            location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }
        }
        ```
    *   启用该配置并重启 Nginx:
        ```bash
        sudo ln -s /etc/nginx/sites-available/meishi-app /etc/nginx/sites-enabled/
        sudo nginx -t  # 测试配置是否正确
        sudo systemctl restart nginx
        ```
    *   您还可以使用 `Certbot` 为您的域名免费添加 SSL 证书，实现 HTTPS 访问。

### 从手机部署

直接从手机进行代码部署是不常见的做法，因为部署通常需要一个安全的、配置好的环境 (如您的电脑或 CI/CD 服务)。

然而，您可以通过手机**触发**一个已经设置好的自动化部署流程：

1.  **使用 GitHub 移动版**: 在您的手机上安装 [GitHub 移动应用](https://github.com/mobile)。
2.  **合并拉取请求 (Pull Request)**: 如果您的工作流配置为在合并到主分支时触发部署 (例如使用 Firebase App Hosting 或 GitHub Actions)，您可以在手机上审核并合并一个 PR。这会自动启动部署流程。
3.  **查看部署状态**: 您随后可以在手机浏览器中访问 Firebase 控制台或您的服务器日志，监控部署的进度和结果。

这种方式利用了 CI/CD 的强大功能，让您即使不在电脑前也能轻松管理您的应用发布。

---

祝您编码愉快！
