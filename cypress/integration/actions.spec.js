import { equal } from "assert";

/* eslint-disable no-undef */
/// <reference types="Cypress" />

context('Actions', () => {

  /**
   * 进入首页
   */
  it('first come in', ()=> {
    cy.visit('http://localhost:3000/');
    cy.contains('Copyright');
  });


  /**
   * 在未登录的状态下访问画室模块
   */
  it('un-login status visit studio', () => {
    //检测hover效果
    cy.get('.blockLargeLeftTop')
    .trigger('mouseover');
    cy.get('.imgWrap.studio > img')
      .should('have.class', 'show');

    //检测是否跳转
    cy.get('.blockLargeLeftTop')
      .click();
    cy.url().should('include', '/studio');

    //检测是权限是否正常
    cy.get('.smallBlockWrap')
      .first()
      .click();
    cy.url().should('include', '/login');
  });


  /**
   * 登录
   */
  it('login', () => {
    //输入用户名并验证
    cy.get('.inputWrap > input')
      .first()
      .click()
      .type('yjt')
      .should('have.value', 'yjt');

    //输入密码并验证
    cy.get('.inputWrap > input')
      .last()
      .click()
      .type('1992')
      .should('have.value', '1992');

    //检测记住我功能是否正常
    cy.get('label')
      .click();
    cy.get('.signinblockWrap div input[type=checkbox]+label')
      .should('have.css', { 'background' : '#eaa91d'});
    
    //检测是否登录成功
    cy.get('.signinblockWrap button')
      .first()
      .click();
    cy.url().should('include', '/studio/watercolor');

    //回到首页
    cy.get('.commonHeadWrap .backIcon')
      .click();
    cy.get('.commonHeadWrap .backIcon')
      .click();
    cy.contains('Copyright');

  });

  /**
   * 浏览名师堂模块
   */
  it('visit famous block', () => {
    //进入名师堂模块主页
    cy.get('.blockLargeRightTop')
      .click();
    cy.url().should('include', '/famous');

    //选择第一个分类
    cy.get('.smallBlockWrap')
      .first()
      .click();
    cy.url().should('include', '/famous/vangogh');

    //选择第一篇文章摘要
    cy.wait(3000);
    cy.get('.articleWrap div a > h3')
      .first()
      .click();
    cy.url().should('include', '/famous/vangogh/0');

    //回到首页
    cy.get('.commonHeadWrap .backIcon')
      .click();
    cy.get('.commonHeadWrap .backIcon')
      .click();
    cy.get('.commonHeadWrap .backIcon')
      .click();
    cy.contains('Copyright');
  });

  /**
   * 访问高考模块
   */
  it('visit gaokao block', () => {
    //进入高考模块主页
    cy.get('.blockLargeLeftBottom')
      .click();
    cy.url().should('include', '/gaokao');

    //点击第一条摘要进入详情
    cy.wait(3000);
    cy.get('.articleWrap div a > h3')
      .first()
      .click();
    cy.url().should('include', '/gaokao/0');

    //回到首页
    cy.get('.commonHeadWrap .backIcon')
      .click();
    cy.get('.commonHeadWrap .backIcon')
      .click();
    cy.contains('Copyright');
  });

  /**
   * 访问club模块
   */
  it('visit club block', () => {
    //进入club首页
    cy.get('.blockLargeRightBottom')
      .click();
    cy.url().should('include', '/club');

    //输入评论内容并发送
    cy.get('.inputareaWrap textarea')
      .type('测试发送')
      .should('have.value', '测试发送');
    cy.get('.inputareaWrap .inputareaBtn')
      .click();
    
    //检查是否与后台交互成功
    cy.wait(3000);
    cy.get('.messageAreaWrap')
      .first()
      .contains('测试发送');

    //点击查看更多滚动屏幕
    cy.wait(1000);
    cy.get('.wrapStyle div > img')
      .click();
    cy.get('.clubDerailWrap').scrollTo(0, 1000);
    cy.wait(2000);
    cy.get('.wrapStyle div > img')
      .click(); 
    cy.get('.clubDerailWrap').scrollTo(0, 1000);
  });

  /**
   * 查看用户中心模块
   */
  it('visit user block', () => {
    cy.get('.commonHeadWrap > a')
      .click();
    cy.url().should('include', '/user');

    cy.contains('用户信息')
      .click({force: true});
    cy.contains('用户ID');


    cy.contains('用户评论记录')
      .click({force: true});
    cy.contains('测试发送');

    cy.get('.userLeftBlockWrap > ul > li')
      .click();
    cy.contains('温馨提示');

    cy.contains('好的')
      .click();
    cy.contains('Copyright');
  });

});
