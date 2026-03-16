# 📦 部署指南 - 工银智慧温暖家

本项目已构建为静态网页，支持多种部署方式。

---

## 🎯 快速部署（推荐方案）

### 方案一：Vercel 部署（最简单 ⭐⭐⭐⭐⭐）

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录 Vercel
vercel login

# 3. 一键部署
vercel --prod
```

**访问地址**：部署完成后会获得一个 `https://your-app.vercel.app` 域名

**优点**：
- ✅ 完全免费
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自动 CI/CD
- ✅ 支持自定义域名

---

### 方案二：Netlify 部署

```bash
# 1. 安装 Netlify CLI
npm install -g netlify-cli

# 2. 登录
netlify login

# 3. 部署
netlify deploy --prod --dir=dist
```

**访问地址**：`https://your-app.netlify.app`

---

### 方案三：GitHub Pages 部署（已配置自动化）

#### 首次部署：

1. **推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/icbc-smart-warm-home.git
   git push -u origin main
   ```

2. **启用 GitHub Actions**
   - 进入 GitHub 仓库
   - 点击 "Actions" 标签
   - 点击 "I understand my workflows, go ahead and enable them"

3. **启用 GitHub Pages**
   - 进入仓库 "Settings" → "Pages"
   - Source 选择 "GitHub Actions"

4. **自动部署**
   - 每次推送到 `main` 分支都会自动构建和部署

**访问地址**：`https://your-username.github.io/icbc-smart-warm-home/`

---

### 方案四：本地预览（测试用）

```bash
# 构建并预览
npm run preview
```

访问：http://localhost:4173/icbc-smart-warm-home/

---

### 方案五：传统服务器部署

#### Nginx 部署：

1. **上传文件**
   ```bash
   # 将 dist 目录上传到服务器
   scp -r dist/* user@your-server:/var/www/icbc-smart-warm-home/
   ```

2. **配置 Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/icbc-smart-warm-home
   # 复制 nginx.conf.example 的内容
   ```

3. **启用配置**
   ```bash
   sudo ln -s /etc/nginx/sites-available/icbc-smart-warm-home /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

#### Apache 部署：

创建 `.htaccess` 文件：
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /icbc-smart-warm-home/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /icbc-smart-warm-home/index.html [L]
</IfModule>
```

---

## 📊 构建信息

- **构建命令**：`npm run build`
- **输出目录**：`dist/`
- **文件大小**：
  - HTML: 0.77 kB
  - CSS: 31.38 kB (gzip: 6.32 kB)
  - JS: 757.23 kB (gzip: 227.22 kB)

---

## 🔧 配置说明

### 基础路径配置

项目已配置为部署在子目录，如需修改：

```typescript
// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/', // 修改这里
  // ...其他配置
})
```

### 环境变量

如果需要 API 密钥等环境变量：

1. 在项目根目录创建 `.env` 文件：
   ```
   GEMINI_API_KEY=your-api-key
   ```

2. 在部署平台设置环境变量（推荐）
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Environment variables
   - GitHub: Settings → Secrets and variables → Actions

---

## 📱 移动端访问

部署完成后，在手机上访问：
- 同一局域网内：`http://你的IP地址:端口/icbc-smart-warm-home/`
- 公网访问：使用部署平台提供的域名

---

## 🎨 主题颜色

当前主题色为粉色（#FF8BA7），可在 `index.html` 中修改：
```html
<meta name="theme-color" content="#FF8BA7" />
```

---

## ⚠️ 注意事项

1. **API 密钥安全**
   - 不要将 API 密钥提交到代码库
   - 使用部署平台的环境变量功能

2. **跨域问题**
   - 如果调用第三方 API，确保配置了 CORS
   - 使用服务器端代理或云函数

3. **性能优化**
   - 已自动启用 Gzip 压缩
   - 静态资源已配置长期缓存
   - 考虑使用 CDN 加速

---

## 🆘 常见问题

### Q: 部署后页面空白？
A: 检查浏览器控制台，可能是：
- 基础路径配置错误
- API 密钥未配置
- CORS 跨域问题

### Q: 刷新页面后 404？
A: 这是 SPA 应用的常见问题，需要配置服务器将所有请求重定向到 index.html
- Nginx: `try_files $uri $uri/ /index.html;`
- Apache: 使用 `.htaccess` 重写规则

### Q: 如何自定义域名？
A: 
- Vercel: Settings → Domains
- Netlify: Domain settings
- GitHub Pages: Settings → Pages → Custom domain

---

## 📞 技术支持

如有问题，请查看：
- [Vite 部署文档](https://vitejs.dev/guide/static-deploy.html)
- [Vercel 文档](https://vercel.com/docs)
- [Netlify 文档](https://docs.netlify.com)
