# ⚡ 快速部署到 GitHub Pages

## 📋 本地准备（已完成 ✅）

- ✅ Git 仓库已初始化
- ✅ 代码已提交（2 个 commits）
- ✅ GitHub Actions 已配置
- ✅ 分支已切换到 `main`

---

## 🚀 立即部署（3 步完成）

### 第 1 步：创建 GitHub 仓库

访问：https://github.com/new

填写：
- **Repository name**: `icbc-smart-warm-home`
- **Description**: 工银智慧温暖家
- **Visibility**: Public 或 Private
- ⚠️ **不要** 勾选 "Initialize this repository with a README"

点击 **"Create repository"**

---

### 第 2 步：推送到 GitHub

**方式 A：使用 HTTPS（推荐）**

```bash
# 替换 YOUR_USERNAME 为您的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/icbc-smart-warm-home.git

# 推送
git push -u origin main
```

**方式 B：使用 SSH**

```bash
# 替换 YOUR_USERNAME 为您的 GitHub 用户名
git remote add origin git@github.com:YOUR_USERNAME/icbc-smart-warm-home.git

# 推送
git push -u origin main
```

---

### 第 3 步：启用 GitHub Actions

1. 进入您的 GitHub 仓库
2. 点击 **"Actions"** 标签
3. 点击 **"I understand my workflows, go ahead and enable them"**

---

## 🎉 完成！

等待 1-2 分钟后，访问：

```
https://YOUR_USERNAME.github.io/icbc-smart-warm-home/
```

---

## 📱 在手机上测试

1. 在 GitHub 仓库页面找到 "Deployments" 部分
2. 点击 GitHub Pages 链接
3. 使用手机浏览器打开
4. 或使用 Chrome DevTools 的设备模拟功能

---

## 🔄 后续更新

每次修改代码后：

```bash
git add .
git commit -m "修改说明"
git push
```

GitHub Actions 会自动部署（约 1-2 分钟）！

---

## ⚠️ 认证问题？

### 使用 Personal Access Token：

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 生成并复制 token
5. 使用 token 推送：

```bash
git remote add origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/icbc-smart-warm-home.git
git push -u origin main
```

---

## 📊 当前状态

```
Branch: main
Commits: 2
Files: 16
Build: ✅ 成功
Deployment: ⏳ 等待推送
```

---

## 📞 需要帮助？

查看详细文档：
- [GITHUB_PAGES_GUIDE.md](./GITHUB_PAGES_GUIDE.md) - 完整指南
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 所有部署方式
