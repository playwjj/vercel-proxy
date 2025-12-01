# Vercel Proxy

一个基于 Vercel Serverless Functions 的 HTTP 代理服务。

## 功能

该项目将所有传入的 HTTP 请求转发到指定的目标服务器，支持：

- 转发所有 HTTP 方法（GET、POST、PUT、DELETE 等）
- 转发原始请求头
- 转发响应状态码和响应头
- 支持二进制数据传输

## 项目结构

```
vercel-proxy/
├── api/
│   └── index.js       # 主处理函数
├── package.json       # 项目配置
├── vercel.json        # Vercel 部署配置
└── README.md          # 项目说明
```

## 部署

### 部署到 Vercel

1. 安装 Vercel CLI（如果还未安装）：
```bash
npm install -g vercel
```

2. 在项目目录下执行部署：
```bash
vercel
```

3. 按照提示完成部署配置

### 一键部署

点击下方按钮一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## 配置

### 修改目标服务器

编辑 `api/index.js` 文件，修改 `target` 变量的值：

```javascript
const target = "http://your-target-server.com" + req.url;
```

### 路由配置

路由配置在 `vercel.json` 文件中，当前配置将所有请求转发到 `/api/index.js`：

```json
{
  "version": 2,
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/api/index.js"
    }
  ]
}
```

## 使用示例

假设你的 Vercel 部署地址为 `https://your-app.vercel.app`，那么：

```bash
# 原始请求
curl https://your-app.vercel.app/api/users

# 实际会被转发到
curl http://145.239.69.111:20169/api/users
```

## 注意事项

- Vercel Serverless Functions 有执行时间限制（免费版 10 秒，Pro 版 60 秒）
- 大文件传输可能受到限制
- 建议为生产环境配置环境变量来存储目标服务器地址

## 许可

MIT
