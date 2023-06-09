import React from 'react';
import styles from './ChatItem.module.css';
import ProfileImg from '../../../assets/images/basic-profile-img.png';
import { useNavigate } from 'react-router-dom';

export default function ChatItem({ chat }) {
  const navigate = useNavigate();

  return (
    <li
      className={styles['chat-item']}
      onClick={() => navigate(`/chat/${chat.name}`)}
    >
      <div className={styles['chat-info']}>
        <div className={styles['profile-img-wrapper']}>
          <img
            className={styles['profile-img']}
            src={ProfileImg}
            alt="프로필 이미지"
          />
          {/*나중에 이즈메시지 동작되게끔 다시 확인 필요 */}
          {/* {isNewMessage && <div className={styles.newMessageDot}></div>} */}
        </div>
        <div className={styles['chat-content']}>
          <h2 className={styles['chat-name']}>{chat.name}</h2>
          <p className={styles['chat-message']}>{chat.message}</p>
        </div>
      </div>
      <span className={styles['chat-date']}>{chat.date}</span>
    </li>
  );
}
