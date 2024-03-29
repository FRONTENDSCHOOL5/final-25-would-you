import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../Follow.module.css';
import Layout from '../../../components/layout/Layout';
import { AuthContext } from '../../../context/AuthContext';
import profileAPI from '../../../api/profileAPI2';
import followAPI from '../../../api/followAPI';

export default function Followings() {
  const [followers, setFollowers] = useState([]);
  const [buttonStates, setButtonStates] = useState([]);
  const { user } = useContext(AuthContext);
  const { accountname } = useParams();
  const navigate = useNavigate();

  //팔로워 리스트 api 통신
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await profileAPI.getFollowerList(
          user.token,
          accountname,
        );
        setFollowers(response);
        console.log('response 데이터 확인:', response);

        // 버튼 상태 결정 기능
        const initialButtonStates = response.map(follower => ({
          text: follower.isfollow ? '취소' : '팔로우',
          className: follower.isfollow
            ? styles['followers-btn-unfollow']
            : styles['followers-btn-follow'],
        }));
        setButtonStates(initialButtonStates);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    if (followers.length === 0) {
      fetchFollowers();
    }
  }, [followers.length, accountname, user.token]);

  console.log('Followers 데이터 확인:', followers);

  // 팔로우시 리스트에 추가 api 통신
  const onFollowStateHandler = async (index, follower) => {
    if (buttonStates[index]?.text === '팔로우') {
      try {
        const response = await followAPI.followingPost(
          user.token,
          follower.accountname,
        );
        console.log('팔로우 추가 메시지 : ', response.message);

        onToggleFollowButton(index, true);
      } catch (error) {
        console.error(error);
        // setIsEmailValid(true);
        alert('팔로우에 실패하였습니다.');
      }
    } else {
      // 버튼이 팔로우가 아닌 경우
      try {
        const response = await followAPI.unfollowingPost(
          user.token,
          follower.accountname,
        );
        console.log('언팔 메시지 : ', response.message);
      } catch (error) {
        console.log(error);
        alert('언팔에 실패하였습니다.');
      }
      onToggleFollowButton(index, false);
    }
  };

  // 버튼값이 변경되면 리렌더링이됨
  const onToggleFollowButton = (idx, follow) => {
    const newButtonStates = buttonStates.slice();

    if (follow) {
      newButtonStates[idx] = {
        text: '취소',
        className: styles['followers-btn-unfollow'],
      };
    } else {
      newButtonStates[idx] = {
        text: '팔로우',
        className: styles['followers-btn-follow'],
      };
    }
    setButtonStates(newButtonStates);
  };

  return (
    <Layout>
      <h2 className="a11y-hidden">팔로잉 목록</h2>
      <section className={styles['followers-list']}>
        {followers.length > 0 ? (
          followers.map((follower, index) => (
            <article
              key={index}
              index={index}
              data={follower}
              className={styles.followers}
            >
              <div className={styles['followers-photo']}>
                {!follower.image && (
                  <div className={styles['followers-photo-bg']} />
                )}
                {follower.image && (
                  <img
                    src={follower.image}
                    alt="프로필 사진"
                    className={styles['followers-photo-img']}
                    onClick={() => navigate(`/profile/${follower.accountname}`)}
                  />
                )}
              </div>
              <p
                className={`${styles['followers-inner']} ${styles['followers-name']}`}
                onClick={() => navigate(`/profile/${follower.accountname}`)}
              >
                {follower.username}
              </p>
              <p
                className={`${styles['followers-inner']} ${styles['followers-info']}`}
              >
                {follower.intro}
              </p>
              {follower.accountname !== user.accountname && (
                <button
                  type="button"
                  id={`btn-${index}`}
                  className={`${styles['followers-btn']} ${buttonStates[index]?.className}`}
                  onClick={() => onFollowStateHandler(index, follower)}
                >
                  {buttonStates[index]?.text}
                </button>
              )}
            </article>
          ))
        ) : (
          <p>No followings found.</p>
        )}
      </section>
    </Layout>
  );
}
