import React, { useEffect, useState } from 'react';
import styles from './Input.module.css';
import profileAPI from '../../../api/profileAPI';
import commentAPI from '../../../api/commentAPI';
import profileImg from '../../../assets/images/profile-img42.png';

export default function Input({ type, postId, loadCommentMore }) {
  console.log('ddddd', postId);
  const token = localStorage.getItem('token');
  const [userProfileImg, setUserProfileImg] = useState(profileImg);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchComment = async options => {
    let data;
    try {
      setIsLoading(true);
      data = await commentAPI.postComment(options);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

    loadCommentMore(data.comment);
  };

  const fetchUserInfo = async () => {
    let data;
    try {
      setIsLoading(true);
      data = await profileAPI.getMyProfile(token);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

    setUserProfileImg(data.user.image);
  };

  const submitHandle = event => {
    event.preventDefault();
    // 댓글 POST
    fetchComment({ token, postId, comment: inputValue });

    setInputValue('');
  };

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const InputUI = {
    comment: (
      <form className={styles['input']} onSubmit={submitHandle}>
        <img
          className={styles['profile-cover']}
          src={userProfileImg}
          alt="프로필 이미지"
        />
        <label htmlFor="inputComment" className="a11y-hidden">
          댓글 입력
        </label>
        <input
          type="text"
          value={inputValue}
          placeholder="댓글 입력하기..."
          id="inputComment"
          className={styles['input-comment']}
          onChange={handleInput}
        />
        <button
          className={
            inputValue === ''
              ? styles['btn-add']
              : `${styles['btn-add']} ${styles['on']}`
          }
          type="submit"
        >
          게시
        </button>
      </form>
    ),
    chatting: (
      <form className={styles['input']} onSubmit={submitHandle}>
        <img
          className={styles['profile-cover']}
          src={profileImg}
          alt="프로필 이미지"
        />
        <label htmlFor="inputMessage" className="a11y-hidden">
          메시지 입력
        </label>
        <input
          type="text"
          value={inputValue}
          placeholder="메시지 입력하기..."
          id="inputMessage"
          className={styles['input-message']}
          onChange={handleInput}
        />
        <button
          className={
            inputValue === ''
              ? styles['btn-add']
              : `${styles['btn-add']} ${styles['on']}`
          }
          type="submit"
        >
          전송
        </button>
      </form>
    ),
  };

  return InputUI[type];
}
