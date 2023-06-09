import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OtherProfile.module.css';

export default function UserProfile() {
  const token = localStorage.getItem('token');
  const userAccountName = document.location.pathname.replace('/profile/', '');
  const [profileInfo, setProfileInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const [isFollow, setIsFollow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.mandarin.weniv.co.kr/profile/${userAccountName}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error('네트워크에 문제가 있습니다!');
        }
        const data = await response.json();
        console.log(data);
        setProfileInfo(data['profile']);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, []);

  useEffect(() => {
    console.log('jjj', profileInfo);

    setFollowerCount(profileInfo['followerCount']);
    setIsFollow(profileInfo['isfollow']);
  }, [profileInfo]);

  const followHandler = async () => {
    if (isFollow) {
      setIsFollow(false);
      setFollowerCount(prev => followerCount - 1);
      await fetchFollow('/unfollow', 'DELETE');
    } else {
      setIsFollow(true);
      setFollowerCount(prev => followerCount + 1);
      await fetchFollow('/follow', 'POST');
    }
  };

  const fetchFollow = async (endpoint, method) => {
    try {
      const response = await fetch(
        `https://api.mandarin.weniv.co.kr/profile/${userAccountName}${endpoint}`,
        {
          method: method,
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      console.log(endpoint, data);
    } catch (error) {
      console.error(error);
    }
  };

  const followerClickHandler = event => {
    console.log(event);
    navigate(`/followers/${userAccountName}`);
  };
  const followingClickHandler = event => {
    console.log(event);
    navigate(`/followings/${userAccountName}`);
  };

  return (
    !isLoading && (
      <section className={styles['user-profile']}>
        <img
          className={styles['user-profile-cover']}
          src={profileInfo['image']}
          alt="프로필 사진"
        />
        <div className={styles['user-profile-info']}>
          <strong className={styles['user-profile-name']}>
            {profileInfo['username']}
          </strong>
          <span className={styles['user-profile-id']}>
            @ {profileInfo['accountname']}
          </span>
          <span className={styles['user-profile-intro']}>
            {profileInfo['intro']}
          </span>
        </div>
        <div className={styles['user-count']}>
          <button
            type="button"
            className={styles['btn-followers']}
            onClick={followerClickHandler}
          >
            <span className={styles['followers']}>followers</span>
            <span className={styles['followers-number']}>{followerCount}</span>
          </button>
          <button
            className={styles['following-area']}
            onClick={followingClickHandler}
          >
            <span className={styles['followings']}>followings</span>
            <span className={styles['followings-number']}>
              {profileInfo['followingCount']}
            </span>
          </button>
        </div>
        <div className={styles['button-container']}>
          <a className={styles['btn-chat']} href="/chat">
            <span className="a11y-hidden">채팅하기</span>
          </a>
          {isFollow ? (
            <button
              className={styles['btn-unfollow']}
              type="button"
              onClick={followHandler}
            >
              언팔로우
            </button>
          ) : (
            <button
              className={styles['btn-follow']}
              type="button"
              onClick={followHandler}
            >
              팔로우
            </button>
          )}

          <div className={styles['btn-share']}>
            <span className="a11y-hidden">공유하기</span>
          </div>
        </div>
      </section>
    )
  );
}
