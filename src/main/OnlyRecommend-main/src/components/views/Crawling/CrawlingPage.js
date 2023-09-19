import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrawlingPage.css';

function CrawlingPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [entities, setEntities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    // 페이지가 로드될 때 localStorage에서 데이터 확인
    const storedData = localStorage.getItem("searchResult");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setEntities(parsedData);
      // 결과 출력후 기록 지우기
      // localStorage.clear();
      localStorage.removeItem("searchResult");
    }
  }, []);

  const onSubmit = async (e) => {
    //recommandResultPlants
    // const storedData = localStorage.getItem("searchResult");
    // if (storedData!=null){
    //   setEntities(JSON.parse(storedData));
    // }else{

    e.preventDefault();
    setIsSearching(true); // 검색 중임을 표시
    try {
      const response = await axios.post("/api/searchSubmit", searchKeyword, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setEntities(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    } finally {
      setIsSearching(false); // 검색이 완료되면 검색 중 상태를 해제
    }
  };

  return (
      <div className='crawlingResult'>
        <form className='crawlingForm' onSubmit={onSubmit}>
          <input
              className='crawlingInput'
              placeholder='찾으시는 식물을 입력해주세요!'
              value={searchKeyword}
              onChange={handleInputChange}
          />
          <input
              className='crawlingButton'
              type="submit"
              value={isSearching ? "검색 중..." : "검색"}
              disabled={isSearching}
          />
        </form>

        {/* 검색 결과를 표시 */}
        {entities.length > 0 && !isSearching && (
            <div className="entity-list">
              {entities.map((entity, index) => (
                  <div className="entity" key={index}>
                    <a href={entity.storeLink}>
                      <img className="entity-image" src={entity.imgUrl} alt={entity.storeName} />
                    </a>
                    <div className="entity-content">
                      <h5>{entity.storeName}</h5>
                      <h5>{entity.storeTitle}</h5>
                      <p>가격: {entity.price}</p>
                    </div>
                  </div>
              ))}
            </div>
        )}
      </div>
  );
}

export default CrawlingPage;