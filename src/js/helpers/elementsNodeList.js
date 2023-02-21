const html = document.documentElement
const body = document.body
const pageWrapper = document.querySelector('.page')
const header = document.querySelector('.header')
const firstScreen = document.querySelector('[data-observ]')
const burgerButton = document.querySelector('.icon-menu', 'menus')
const menuList = document.querySelector('.menu__list')
const dropdownMenu = document.querySelector('nav.dropdown')
const menu = document.querySelector('.menu')
const lockPaddingElements = document.querySelectorAll('[data-lp]')

export {
  html,
  body,
  pageWrapper,
  header,
  firstScreen,
  burgerButton,
  menu,
  lockPaddingElements,
  dropdownMenu,
  menuList
}