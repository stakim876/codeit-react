import { FaArrowLeft, FaImages, FaXmark, FaSpinner } from 'react-icons/fa6';
import styles from './CreateFeedModal.module.scss';
import { useState, useRef } from 'react';
import carousel from './Carousel.module.scss';

// 고른 파일을 문자열로 바꿈. JSON으로 POST할 때 씀
const readAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const CreateFeedModal = ({ onClose, onCreate }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  // 보내는 중이면 버튼 잠그고 스피너
  const [isSending, setIsSending] = useState(false);

  // 숨긴 file input. 버튼이 대신 클릭할 때 씀
  const fileInputRef = useRef(null);

  // 파일을 고르면 미리보기와 올릴 파일을 같이 저장
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setSelectedFile(file);
    }

    fileInputRef.current.value = '';
  };

  // 숨긴 input을 대신 클릭
  const handlePick = () => {
    fileInputRef.current.click();
  };

  // 파일을 문자열로 바꿔 POST. 성공하면 부모 진동벨을 울리고 닫음
  const handleShare = async () => {
    setIsSending(true);

    try {
      const postImage = await readAsDataUrl(selectedFile);

      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'soongu',
          profileImage: 'https://picsum.photos/seed/soongu/40/40',
          postImage,
          postAlt: '내가 올린 사진',
          content: '하하호호 새로운 피드!!',
          minutesAgo: 0,
          likeCount: 0,
          commentCount: 0,
        }),
      });

      if (!response.ok) {
        throw new Error(`서버가${response.status}로 답했어요`);
      }

      const data = await response.json();

      onCreate(data);
      onClose();
    } catch (error) {
      console.error('게시물을 올리지 못했어요.', error);
      setIsSending(false);
    }
  };

  return (
    <div className={styles.modalContainer}>
      {/* 배경이나 X를 누르면 닫힘 */}
      <div
        className={styles.modalBackdrop}
        onClick={onClose}
      />

      <button
        className={styles.modalCloseButton}
        onClick={onClose}
        type='button'>
        <FaXmark />
      </button>

      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button
            className={styles.backButton}
            style={{ visibility: 'hidden' }}
            type='button'>
            <FaArrowLeft />
          </button>

          <h2 className={styles.modalTitle}>새 게시물 만들기</h2>

          {previewUrl && (
            <button
              className={`${styles.nextButton} ${isSending ? styles.loading : ''}`}
              onClick={handleShare}
              disabled={isSending}
              type='button'>
              공유하기
            </button>
          )}

          {isSending && (
            <div className={styles.loadingSpinner}>
              <FaSpinner />
            </div>
          )}
        </div>

        <div className={styles.modalBody}>
          <div className={`${styles.step}${styles.active}`}>
            <div className={styles.uploadContainer}>
              <input
                id='fileInput'
                ref={fileInputRef}
                type='file'
                accept='image/jpeg,image/png,image/gif,image/webp,image/avif'
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              {previewUrl ? (
                <>
                  <div className={styles.previewContainer}>
                    <div className={styles.previewArea}>
                      <div className={carousel.carouselSlide}>
                        <img
                          src={previewUrl}
                          alt='고른 사진 미리보기'
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className={styles.uploadButton}
                    onClick={handlePick}
                    type='button'>
                    다른 사진 고르기
                  </button>
                </>
              ) : (
                <div className={styles.uploadArea}>
                  <FaImages
                    size={48}
                    color='#262626'
                  />
                  <p>사진과 동영상을 여기에 끌어다 놓으세요</p>

                  <button
                    className={styles.uploadButton}
                    onClick={handlePick}
                    type='button'>
                    컴퓨터에서 선택
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedModal;
