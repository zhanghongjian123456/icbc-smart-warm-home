# 🚀 GitHub Pages 部署指南

## ✅ 本地配置已完成

您的项目已经完成了以下配置：

- ✅ Git 仓库已初始化
- ✅ 首次提交已完成
- ✅ GitHub Actions 工作流已配置
- ✅ `.gitignore` 文件已创建
- ✅ `vite.config.ts` 已设置正确的 base 路径

---

## 📋 接下来的步骤

### 步骤 1：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" → "New repository"
3. 填写仓库信息：
   - **Repository name**: `icbc-smart-warm-home`
   - **Description**: 工银智慧温暖家 - 移动端优先的温暖家居应用
   - **Public** 或 **Private**（根据您的选择）
   - ⚠️ **不要** 勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

---

### 步骤 2：推送到 GitHub

在终端中执行以下命令（**需要您手动输入 GitHub 用户名**）：

```bash
# 替换 YOUR_USERNAME 为您的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/icbc-smart-warm-home.git

# 推送到 GitHub
git push -u origin main
```

**如果遇到认证问题**：
- 方式 1：使用 Personal Access Token（推荐）
  ```bash
  git remote add origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/icbc-smart-warm-home.git
  ```
- 方式 2：使用 SSH（需要先配置 SSH 密钥）
  ```bash
  git remote add origin git@github.com:YOUR_USERNAME/icbc-smart-warm-home.git
  git push -u origin main
  ```

---

### 步骤 3：启用 GitHub Actions

1. 进入您的 GitHub 仓库
2. 点击 **"Actions"** 标签
3. 您会看到 "Deploy to GitHub Pages" 工作流
4. 点击 **"I understand my workflows, go ahead and enable them"** 按钮

---

### 步骤 4：配置 GitHub Pages

1. 进入仓库的 **"Settings"** 标签
2. 在左侧边栏点击 **"Pages"**
3. 在 **Build and deployment** 部分：
   - **Source**: 选择 "GitHub Actions"
4. 点击保存（如果需要）

---

### 步骤 5：等待自动部署

1. 返回 **"Actions"** 标签
2. 您应该能看到一个正在运行的工作流
3. 等待工作流完成（通常需要 1-2 分钟）
4. 当看到绿色勾号 ✅ 时，表示部署成功

---

### 步骤 6：访问您的网站

部署成功后，您的网站将在以下地址可用：

```
https://YOUR_USERNAME.github.io/icbc-smart-warm-home/
```

您可以在 GitHub Pages 设置页面找到这个链接。

---

## 🔄 后续部署

配置完成后，后续部署是**全自动**的：

```bash
# 1. 修改代码
# 2. 提交更改
git add .
git commit -m "feat: 添加新功能"

# 3. 推送到 GitHub
git push

# 4. 等待自动部署（约 1-2 分钟）
```

GitHub Actions 会自动：
- 构建项目
- 部署到 GitHub Pages
- 更新您的网站

---

## ⚙️ 配置说明

### vite.config.ts

```typescript
export default defineConfig({
  base: '/icbc-smart-warm-home/', // GitHub Pages 需要这个
  // ...其他配置
})
```

### .github/workflows/deploy.yml

工作流配置已自动处理：
- ✅ 监听 `main` 分支的推送
- ✅ 自动安装依赖
- ✅ 自动构建生产版本
- ✅ 自动部署到 GitHub Pages

---

## 📱 在手机上访问

部署完成后，在手机上访问：

```
https://YOUR_USERNAME.github.io/icbc-smart-warm-home/
```

或者：
- 将链接发送到手机
- 使用手机浏览器扫描二维码

---

## ⚠️ 常见问题

### Q1: 推送时提示认证失败？

**解决方案 1**：使用 Personal Access Token
1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 选择权限：`repo` (全选)
4. 生成后复制 token
5. 使用 token 推送：
   ```bash
   git remote add origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/icbc-smart-warm-home.git
   git push -u origin main
   ```

**解决方案 2**：使用 SSH
1. 生成 SSH 密钥：
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. 添加公钥到 GitHub：
   - 访问 https://github.com/settings/keys
   - 点击 "New SSH key"
   - 粘贴 `~/.ssh/id_ed25519.pub` 的内容
3. 使用 SSH 推送：
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/icbc-smart-warm-home.git
   git push -u origin main
   ```

---

### Q2: 部署后页面 404？

**可能原因**：
1. 仓库名称与 `vite.config.ts` 中的 `base` 不匹配
2. GitHub Pages 未正确配置

**解决方案**：
1. 检查 `vite.config.ts`：
   ```typescript
   base: '/icbc-smart-warm-home/', // 必须与仓库名一致
   ```
2. 在 Settings → Pages 确认 Source 是 "GitHub Actions"
3. 等待几分钟，GitHub Pages 需要时间更新

---

### Q3: Actions 工作流失败？

**检查步骤**：
1. 点击失败的 workflow 查看详细信息
2. 常见问题：
   - Node.js 版本不兼容 → 检查 `.github/workflows/deploy.yml`
   - 依赖安装失败 → 检查 `package.json`
   - 构建错误 → 查看构建日志

**解决方案**：
```bash
# 本地测试构建
npm run build

# 如果本地构建成功，再推送到 GitHub
git push
```

---

### Q4: 如何自定义域名？

1. 进入 Settings → Pages
2. 在 "Custom domain" 输入您的域名
3. 点击 Save
4. 在您的域名提供商处配置 CNAME：
   ```
   CNAME YOUR_USERNAME.github.io
   ```

---

## 📊 项目统计

部署成功后，您可以在 GitHub 看到：
- 📦 自动构建历史
- 📈 访问统计（如果使用 GitHub Pages 默认域名）
- 🔄 部署记录

---

## 🎉 完成！

完成以上步骤后，您的网站就已经部署在 GitHub Pages 上了！

**下一步**：
- ✅ 在手机上访问测试
- ✅ 分享给朋友查看
- ✅ 继续开发新功能（每次推送都会自动部署）

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 GitHub Actions 日志
2. 检查浏览器控制台错误
3. 参考 [GitHub Pages 文档](https://docs.github.com/en/pages)
4. 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 了解其他部署方式
