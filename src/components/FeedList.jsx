import styles from './FeedList.module.scss';
import gridStyles from './PostGrid.module.scss';
import FeedItem from './FeedItem.jsx';

// 로딩 중 가짜 카드. 실제 데이터 대신 회색 박스만 보여 줌
const FeedSkeleton = () => (
  <div className={styles.skeletonPost}>
    <div className={styles.skeletonHeader}>
      <div className={styles.skeletonAvatar} />
      <div className={styles.skeletonUsername} />
    </div> 
    <div className={styles.skeletonImage} />
    <div className={styles.skeletonFooter}>
      <div className={styles.skeletonIconGroup}>
        <div className={styles.skeletonIcon} />
        <div className={styles.skeletonIcon} />
        <div className={styles.skeletonIcon} />  
      </div> 
      <div className={styles.skeletonTextLine} />
      <div className={styles.skeletonTextLineShort} />
    </div>
  </div>
);

const FeedList = ({ posts, isLoading, onDelete }) => {
  // 받아오는 중이면 스켈레톤 2개
  if (isLoading) {
    return (
      <div className={styles.loader}>
        {[1, 1].map((_, index) => <FeedSkeleton key={index} />)}
      </div>
    );
  }

  // posts가 비면 안내 문구, 있으면 map으로 FeedItem을 만듦
  if (posts.length === 0) {
    return <p className={gridStyles.noPosts}>게시물이 없습니다.</p>
  }

  return (
    <div className={styles.feedList}>
      {posts.map((post) => (
        <FeedItem
          key={post.id}
          username={post.username}
          profileImage={post.profileImage}
          postImage={post.postImage}
          postAlt={post.postAlt}
          content={post.content}
          minutesAgo={post.minutesAgo}
          likeCount={post.likeCount}
          commentCount={post.commentCount}
          onDelete={() => onDelete(post.id)}
        />  
      ))}
    </div>
  );
};

export default FeedList;
