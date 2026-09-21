import { useState } from 'react';
import Stories from './components/Stories.jsx';
import page from './components/FeedPage.module.scss';
import stateStyles from './components/StatusMessage.module.scss';
import FeedList from './components/FeedList.jsx';
import CreateFeedModal from './components/CreateFeedModal.jsx';
import UserSearch from './components/UserSearch.jsx';

import { usePostsContext } from './contexts/PostsContext.jsx';

const App = () => {
  
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // props로 안 내리고 창고에서 필요한 것만 꺼낸다
  const { error, addPost, selectUser } = usePostsContext();

  return (
    <main className={page.mainContent}>
      <button
        type='button'
        onClick={() => setIsCreateOpen(true)}>
        새 게시물
      </button>

      <UserSearch onSearch={selectUser} />

      <Stories onSelect={selectUser} />

      {error ? (
        <p className={stateStyles.errorText}>{error}</p>
      ) : (
        <>
          <FeedList />
        </>
      )}

      {isCreateOpen && (
        <CreateFeedModal
          onClose={() => setIsCreateOpen(false)}
          onCreate={addPost}
        />
      )}
    </main>
  );
};

export default App;