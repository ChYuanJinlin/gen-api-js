# gen-api-js

[![NPM Version](https://img.shields.io/npm/v/gen-api-js?logo=npm)](https://www.npmjs.com/package/gen-api-js) ![Node Current](https://img.shields.io/node/v/gen-api-js?logo=nodedotjs&color=blue)
![NPM License](https://img.shields.io/npm/l/gen-api-js)

## 前言

为什么要开发这款工具? 传统前端每次和后端对接接口，如后端把接口文档放在线上文档，前端要去线上文档去复制接口的路径，然后又去前端的项目去写接口函数写注释这些，依次循环，如果后端的接口很多如二十、三十个这种， 你要复制二三十遍，这样不仅效率低而且还是个重复性乏味的劳动工作，为了解决这个问题 我开发了 了`gen-api-js` 它可以帮助你做这些事，对于大批量接口它可以给你很好的支持,但不过很遗憾的是 `gen-api-js` 它现在只支持 `yapi,apifox`,后续有需要将会支持更多的线上文档,敬请期待...

## 介绍

> <span style="color：#4569d4">gen-api-js</span>是一个代码生成工具，基于 [puppeteerjs](http://puppeteerjs.com/#?product=Puppeteer&version=puppeteer-v21.4.1) 开发, 它可以根据后端提供的线上接口文档然后批量模块化生成`JavaScript`/`TypeScript`前端代码接口函数

## 环境要求

首先得有 Node.js，并确保其版本 >= 14.15.0。

## 在线API网站文档的支持：

- [yapi](http://api.doc.jiyou-tech.com/)
- [apifox](https://app.apifox.com/)

---

## 安装

选择你常用的包管理器将 <span style="color：#4569d4">```gen-api-js```</span> 加入项目依赖即可：

```javascript

# npm
npm i gen-api-js -g

# yarn
yarn add gen-api-js -g

# pnpm
pnpm add gen-api-js -g

```

## 使用

1.使用以下命令初始化配置文件你的项目根目录会生成一个文件名为api.config.js配置文件

```javascript
// 初始化一个配置文件
 gen-api init

// 创建axios的文件
 gen-api init --axios filePath
```

2.使用以下命令运行<span style="color：#4569d4">gen-api</span>：运行该命令生成完接口之后你的项目根目录会创建一个名为genApi.data.json的缓存文件,如你不要缓存你只需要在配置文件把 cache 设为 false 即可,但是我还是建议你开启缓存他可以检测你生成过的API不在去生成

```javascript
 npx gen-api
```

3.使用以下命令自定义你的配置文件,<span style="color：#4569d4">gen-api</span> 是从你的项目根目录查找你的配置文件：

```javascript
 gen-api --c filaPath
```

4.使用以下命令运行你的自定义配置文件

```javascript
 gen-api --p filaPath
```
## api.config.js
  - <a href="./api.config.md">配置项</a>

## 变更日志:

每个版本的详细变更记录在发行说明中。 [发行说明](/CHANGELOG.md)

## 提问:

- 使用明确、具体的标题描述问题。
- 提供问题的详细描述，包括重现步骤、预期行为和实际行为。
- 如果可能，附加屏幕截图或动画来说明问题。

## 贡献代码:

- Fork项目到你的GitHub账户。
- 编写代码时每个类需要继承Generator这个类,在项目src下core文件里面编写你的代码,文件名请和网站的名称一致,src/index.js 引入你的核心代码
- 在本地开发和测试你的代码。
- 提交Pull Request。

## 联系信息

如果你有任何问题或建议，请随时通过我的电子邮件（1075360356@qq.com）与我联系
