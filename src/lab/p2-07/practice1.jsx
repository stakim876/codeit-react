const tags = [
  { id: 1, name: '한강', count: 1240 },
  { id: 2, name: '노을', count: 8700 },
  { id: 3, name: '카페', count: 152000 },
  { id: 4, name: '퇴근길', count: 340 },  
];

// tags 배열을 map으로 <li> 목록을 만듦. key는 각 항목의 id
const HashtagList = () => {
  
  return (
    <ul>
      {tags.map((t) => (
        <li key={t.id}>
          #{t.name} 게시물 {t.count.toLocaleString()}개
      </li>  
      ))}  
    </ul> 
  );  
};

export default HashtagList;
