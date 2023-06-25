import React, { useState, useEffect, useContext } from 'react';
import styles from './Followers.module.css';
import Layout from '../../components/layout/Layout';
import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import profileAPI from '../../api/profileAPI2';

export default function Followings() {
  const FollowingsComponent = () => {
    const [followers, setFollowers] = useState([]);
    const [buttonText, setButtonText] = useState({});
    const [buttonClass, setButtonClass] = useState({});
    const { user } = useContext(AuthContext);
    const { accountName } = useParams();

    useEffect(() => {
      const fetchFollowers = async () => {
        try {
          const response = await profileAPI.getFollowerList(
            user.token,
            accountName,
          );
          setFollowers(response);

          // 각 팔로워의 초기 버튼 상태 설정
          const initialButtonText = {};
          const initialButtonClass = {};
          response.forEach(follower => {
            initialButtonText[follower.id] = '팔로우';
            initialButtonClass[follower.id] = styles['followers-btn-follow'];
          });
          setButtonText(initialButtonText);
          setButtonClass(initialButtonClass);
        } catch (error) {
          console.error('Error fetching followers:', error);
        }
      };

      if (followers.length === 0) {
        fetchFollowers();
      }
    }, [followers.length, accountName, user.token]);

    const updateButtonState = id => {
      setButtonText(prevText => ({
        ...prevText,
        [id]: prevText[id] === '팔로우' ? '취소' : '팔로우',
      }));

      setButtonClass(prevClass => ({
        ...prevClass,
        [id]:
          prevClass[id] === styles['followers-btn-follow']
            ? styles['followers-btn-unfollow']
            : styles['followers-btn-follow'],
      }));
    };

    return (
      <Layout>
        <h2 className="a11y-hidden">팔로워목록</h2>
        <section className={styles['followers-list']}>
          {followers.length > 0 ? (
            followers.map(follower => (
              <article key={follower.id} className={styles.followers}>
                <div className={styles['followers-photo']}></div>
                <p
                  className={`${styles['followers-inner']} ${styles['followers-name']}`}
                >
                  {follower.name}
                </p>
                <p
                  className={`${styles['followers-inner']} ${styles['followers-info']}`}
                >
                  {follower.info}
                </p>
                <button
                  type="button"
                  className={`${styles['followers-btn']} ${
                    buttonClass[follower.id]
                  }`}
                  onClick={() => updateButtonState(follower.id)}
                >
                  {buttonText[follower.id]}
                </button>
              </article>
            ))
          ) : (
            <p>No followers found.</p>
          )}
        </section>
      </Layout>
    );
  };

  return <FollowingsComponent />;
}