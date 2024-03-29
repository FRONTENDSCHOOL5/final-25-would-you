import React from 'react';
import styles from './ChatItem.module.css';
import { useNavigate } from 'react-router-dom';

export default function ChatItem({ chat }) {
  const navigate = useNavigate();

  return (
    <li
      className={styles['chat-item']}
      onClick={() => navigate(`/chat/${chat.username}`)}
    >
      <div className={styles['chat-info']}>
        <div className={styles['profile-img-wrapper']}>
          <img
            className={styles['profile-img']}
            src={chat.image}
            alt="프로필 이미지"
          />
        </div>
        <div className={styles['chat-content']}>
          <h2 className={styles['chat-name']}>{chat.username}</h2>
          <p className={styles['chat-message']}>{chat.message}</p>
        </div>
      </div>
      <span className={styles['chat-date']}>{chat.date}</span>
    </li>
  );
}
