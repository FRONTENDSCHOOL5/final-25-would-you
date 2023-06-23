import React from 'react';
import './Layout.module.css';
import Header from '../common/HeaderTest/Header';
import TabMenu from '../common/TabMenu/TabMenu';
import Input from '../common/Input/Input';

export default function Layout({ children, btnHandler }) {
  let headerType;
  let footerType;

  switch (document.location.pathname) {
    case '/':
      headerType = 'homeSearch';
      footerType = 'home';
      break;
    case '/profile':
      headerType = 'header';
      footerType = 'profile';
      break;
    case '/profile/m':
      headerType = btnHandler() ? 'colorButton' : 'saveButton';
      footerType = 'none';
      break;
    case '/product':
      headerType = btnHandler() ? 'colorButton' : 'saveButton';
      footerType = 'none';
      break;
    case '/product/m':
      headerType = 'colorButton';
      footerType = 'none';
      break;
    case '/profile/followers':
      headerType = 'followers';
      footerType = 'none';
      break;
    case '/profile/1234':
      headerType = 'header';
      footerType = 'profile';
      break;
    case '/post':
      headerType = 'header';
      footerType = 'comment';
      break;
    case '/post/upload':
      headerType = 'uploadButton';
      footerType = 'none';
      break;
    case '/chat':
      headerType = 'header';
      footerType = 'chat';
      break;
    case '/chat/1234':
      headerType = 'chatHeader';
      footerType = 'chatting';
      break;
    case '/search':
      headerType = 'userSearch';
      footerType = 'home';
      break;
    default:
      headerType = 'none';
      footerType = 'none';
      break;
  }
  return (
    <>
      <Header type={headerType} btnHandler={btnHandler} />
      <main>{children}</main>

      {footerType === 'input' ||
      footerType === 'comment' ||
      footerType === 'chatting' ? (
        <footer>
          <Input type={footerType} />
        </footer>
      ) : (
        <TabMenu type={footerType} />
      )}
    </>
  );
}
