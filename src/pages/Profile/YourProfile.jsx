import React from 'react';
import styles from './YourProfile.module.css';
import BackIcon from '../../assets/images/icon-arrow-left.svg';
import profile from '../../assets/images/basic-profile-img.png';
import message from '../../assets/images/message-btn.svg';
import share from '../../assets/images/share-btn.svg';
import basicProfileImg from '../../assets/images/basic-profile-img.png';
import productImg from '../../assets/images/profile-img42.png';

export default function YourProfile() {
  return (
    <>
      <section className={styles['all-wrapper']}>
        <article className={styles['product-header']}>
          <div className={styles['product-arrow']}>
            <a href="/">
              <img
                className={styles['back-icon']}
                src={BackIcon}
                alt="뒤로가기 아이콘 입니다."
              />
            </a>
          </div>
          <div className={styles['search-contain']}>
            <button className={styles['profile-btn']} type="button"></button>
          </div>
        </article>
        <article className={styles['profile-main']}>
          <div className={styles['profile-title']}>
            <div className={styles['profile-follow']}>
              <div className={styles['follow-num']}>2950</div>
              <div className={styles['follow-text']}>followers</div>
            </div>
            <div className={styles['profile-pic-box']}>
              <img
                className={styles['profile-pic']}
                src={profile}
                alt="프로필 사진 입니다."
              />
            </div>
            <div className={styles['profile-followings']}>
              <div className={styles['follow-num']}>128</div>
              <div className={styles['follow-text']}>followings</div>
            </div>
          </div>
          <div className={styles['profile-nick-name']}>
            이오에서만은 디자인왕
          </div>
          <div className={styles['profile-email']}>@ e5_designKing99</div>
          <div className={styles['profile-email']}>
            애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
          </div>
          <div className={styles['profile-btns']}>
            <div className={styles['message-btn']}>
              <a href="/">
                <img src={message} alt="채팅걸기" />
              </a>
            </div>
            <div className={styles['follow-btn']}>
              <button>팔로우</button>
            </div>

            <div className={styles['share-btn']}>
              <a href="/">
                <img src={share} alt="공유하기" />
              </a>
            </div>
          </div>
        </article>
        {/* product list */}
        <article className={styles['product-wrapper']}>
          <div className={styles['product-title']}>공구 중인 상품</div>
          <div className={styles['product-carousel']}>
            <div className={styles['product-carousel-track']}>
              <div className={styles['product-carousel-slide']}>
                <div className={styles['product-item']}>
                  <div className={styles['product-img-container']}>
                    <img
                      className={styles['product-img']}
                      src={productImg}
                      alt={'삼품 사진'}
                    />
                  </div>
                  <h4 className={styles['product-name']}>마딛는음식</h4>
                  <div className={styles['product-price']}>35,000원</div>
                </div>
              </div>
              <div className={styles['product-carousel-slide']}>
                <div className={styles['product-item']}>
                  <div className={styles['product-img-container']}>
                    <img
                      className={styles[`product-img`]}
                      src={productImg}
                      alt={'삼품 사진'}
                    />
                  </div>
                  <h4 className={styles['product-name']}>마딛는음식</h4>
                  <div className={styles['product-price']}>35,000원</div>
                </div>
              </div>
              <div className={styles['product-carousel-slide']}>
                <div className={styles['product-item']}>
                  <div className={styles['product-img-container']}>
                    <img
                      className={styles['product-img']}
                      src={productImg}
                      alt={'삼품 사진'}
                    />
                  </div>
                  <h4 className={styles['product-name']}>마딛는음식</h4>
                  <div className={styles['product-price']}>35,000원</div>
                </div>
              </div>
              <div className={styles['product-carousel-slide']}>
                <div className={styles['product-item']}>
                  <div className={styles['product-img-container']}>
                    <img
                      className={styles['product-img']}
                      src={productImg}
                      alt="삼품 사진"
                    />
                  </div>
                  <h4 className={styles['product-name']}>마딛는음식</h4>
                  <div className={styles['product-price']}>35,000원</div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <main className={styles['feed-follow-yes']}>
          <section className={styles['feed-btn-wrapper']}>
            <button className={styles['feed-btn-three']}></button>
            <button className={styles['feed-btn-four']}></button>
          </section>
          <h2 className={styles['a11y-hidden']}>감귤마켓 피드</h2>
          {/* <section className={styles.feed}>
            <article className={styles.post}>
              <div className={styles['post-header']}>
                <img
                  className={styles['author-profile']}
                  src={basicProfileImg}
                  alt="작성자 프로필 이미지"
                />
                <div className={styles['author-info']}>
                  <h4 className={styles['post-title']}>고기 먹을 사람?</h4>
                  <strong className={styles['author-name']}>
                    이오에서만은 디자인왕
                  </strong>
                  <span className={styles['author-id']}>
                    @ e5_dsesignKing99
                  </span>
                </div>
              </div>
              <div className={styles['post-contents']}>
                <ul className={styles['plan-list']}>
                  <li className={styles.menu}>
                    메뉴<span className={styles['menu-value']}>고기</span>
                  </li>
                  <li className={styles.place}>
                    장소
                    <span className={styles['place-value']}>제줏간 방이점</span>
                  </li>
                  <li className={styles.date}>
                    일시
                    <span className={styles['date-value']}>오늘, 오후 6시</span>
                  </li>
                  <li className={styles.personnel}>
                    인원<span className={styles['personnel-value']}>4명</span>
                  </li>
                </ul>
                <div className={styles['post-img-container']}>
                  <ul className={styles['post-img-list']}>
                    <li className={styles['post-img on']}>
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="포스트 사진"
                      />
                    </li>
                  </ul>
                  <ul className={styles['post-img-control']}>
                    <li>
                      <button className={styles['on']} type="button"></button>
                    </li>
                    <li>
                      <button className="" type="button"></button>
                    </li>
                  </ul>
                </div>
                <p className={styles['post-text']}>
                  마라전골 맛잇쪄마라전골 맛잇쪄마라전골 맛잇쪄마라전골
                  맛잇쪄마라전골 맛잇쪄마라전골 맛잇쪄마라전골 맛잇쪄마라전골
                  맛잇쪄마라전골 맛잇쪄마라전골 맛잇쪄
                </p>
              </div>
              <div className={styles['post-footer']}>
                <div className={styles['post-reaction']}>
                  <button type="button" className={styles['btn-like']}>
                    <span className={styles['a11y-hidden']}>좋아요 버튼</span>
                    <span className={styles['like-count']}>0</span>
                  </button>
                  <a href="/post" className={styles['btn-comment']}>
                    <span className={styles['a11y-hidden']}>
                      댓글 쓰러가기 버튼
                    </span>
                    <span className={styles['comment-count']}>0</span>
                  </a>
                </div>
                <span className={styles['create-date']}>2023년 06월 06일</span>
              </div>
              <button className={styles['btn-post-more']} type="button">
                <span className={styles['a11y-hidden']}>포스트 메뉴</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z"
                    fill="#C4C4C4"
                    stroke="#C4C4C4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5Z"
                    fill="#C4C4C4"
                    stroke="#C4C4C4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25C8.25 14.6642 8.58579 15 9 15Z"
                    fill="#C4C4C4"
                    stroke="#C4C4C4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </article>
          </section> */}
          {/* 여기가 그리드 입니다. */}
          <section className={styles['feed-grid-wrapper']}>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
            <article className={styles['feed-grid-item']}>
              <img src={productImg} alt="피드 사진입니다." />
            </article>
          </section>
          {/* 여기가 그리드 끝입니다. */}
        </main>
        <footer>
          <nav className={styles['nav-bar']}>
            <ul className={styles['menu-list']}>
              <li>
                <a href="/" className={styles['menu-home']}>
                  홈
                </a>
              </li>
              <li>
                <a href="/chat" className={styles['menu-chat']}>
                  채팅
                </a>
              </li>
              <li>
                <a href="/upload" className={styles['menu-post']}>
                  게시물 작성
                </a>
              </li>
              <li>
                <a href="/profile" className={styles['menu-profile']}>
                  프로필
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </section>
    </>
  );
}
