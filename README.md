# A-circle(艺格圈)

## 简介

本项目是一个毕业设计。单纯针对艺术生创建的一个沟通交流和学习的平台。是一个理想化、概念化的产品，不做任何商业用途。在设计上，直接引用了各个名家的经典作品做情景的烘托，色调丰富、大胆。根据功能划分的不同窗口，每个窗口都有独特的风格但和整体的风格又紧密相连。

* 首页

![首页设计图](https://github.com/Mooooom713/a-circle/blob/dev/image/home.png)

## version 2.0.0

## 环境依赖说明

* 本项目依赖`nodeJs`的全局环境，请先安装nodeJs `8.12.0`或以上版本(建议安装`8.12.0`版本)

* 项目所有依赖的包都可以在`package.json`里查看

* 本项目安装有前端的集成测试框架`cypress` [官网地址](https://docs.cypress.io)

## 初始化本项目

* 安装后nodeJs之后，使用node所带的`npm`包管理工具

* 找到存放本项目的本地文件，打开`cmd`或`git`或带有`power shell`的编辑器(如：VS Code)

* 进入到本地路径之后，输入`npm i`安装包的依赖。

* 当安装完毕之后，输入`npm start`会在本地`3000`端口起一个server，并且支持热加载。

## 关于cypress自动化测试

* 在`package.json`文件里的`scripts`里有两个启动cypress的命令`cy-open`和`cy-test`

* `cy-open`是启动一个cypress的GUI，在GUI里可以很形象的看见跑自动化测试的整个流程。启动的命令是`npm run cy-open`

* `cy-test`是在代码提交到github之前在本地稳定的跑一次自动化测试的所有test case，可以在powershell查看抽象过程，启动命令是`npm run cy-test`

* 最后，非常重要一点`跑自动化测试，本地的项目必须是启动状态`。