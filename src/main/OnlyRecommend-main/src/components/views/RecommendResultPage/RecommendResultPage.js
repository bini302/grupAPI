import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecommendResultPage.css';
import Modal from 'react-modal';
import { useNavigate  } from 'react-router-dom';

// axios.defaults.withCredentials = true;

function RecommendResultPage() {

    // const [result, setResult] = useState(['']);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPlantName, setSelectedPlantName] = useState('');
    const [selectedPlants, setSelectedPlants] = useState([''])
    const navigate = useNavigate();

    const openModal = (plantsName) => {
        setSelectedPlantName(plantsName);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setSelectedPlantName('');
        setModalIsOpen(false);
    };

    useEffect(() => {
        const plantsData = async () => {
            try {
                const response = await axios.get("/api/resulting");
                //백엔드랑 맞춰야 되는 부분
                setSelectedPlants(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching additional data:', error);
            }
        };
        plantsData();
    }, []);

    // 설명
    function getTemperatureText(temperature) {
        return "식물에 적절한 온도는 "+temperature+"도 입니다."
    }
    function getLightText(light) {
        if (light >= 31) {
            return "양지";
        } else if (light >= 21) {
            return "반양지";
        } else if (light >= 11 ) {
            return "반음지";
        } else{
            return "음지";
        }
    }
    function getWaterText(water) {
        if (water >= 31) {
            return "겉흙이 마르면 물을 듬뿍 주세요.";
        } else if (water >= 21) {
            return "흙을 축축하게 유지해주세요.";
        } else if (water >= 11) {
            return "흙을 촉촉하게 유지해주세요.";
        } else {
            return "건조에 강합니다. 흙이 말랐을때 주세요."
        }
    }
    function getLevelText(level) {
        if (level >= 28) {
            return "상";
        } else if (level >= 14) {
            return "중";
        } else {
            return "하";
        }
    }


    // 크롤링 연결
    const [searchKeyword, setSearchKeyword] = useState('');
    const [entities, setEntities] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const onSubmit = async (plantsName) => {
        // plantsName.preventDefault();
        setIsSearching(true); // 검색 중임을 표시
        try {
            const response = await axios.post("/api/searchSubmit", plantsName, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setEntities(response.data);
            console.log("response.data: "+response.data);
            // 식물상점 결과창
            localStorage.setItem("searchResult", JSON.stringify(response.data));
            const storedData = localStorage.getItem("searchResult");
            console.log("storedData: "+storedData);
            window.location.href = `/CrawlingPage`;
        } catch (error) {
            console.error('Error fetching additional data:', error);
        } finally {
            setIsSearching(false); // 검색이 완료되면 검색 중 상태를 해제
        }
    };

    return (
        <div className='recommend'>      
            <div>
                <ul className='recommendResultul'>
                    <li className='recommendResultli'>온도 : {getTemperatureText(selectedPlants[0].plantsTemperature)}</li>
                    <li className='recommendResultli'>조도 : {getLightText(selectedPlants[0].plantsLight)}</li>
                    <li className='recommendResultli'>물 : {getWaterText(selectedPlants[0].plantsWater)}</li>
                    <li className='recommendResultli'>난이도 : {getLevelText(selectedPlants[0].plantsLevel)}</li>
                </ul>
            </div>

            {selectedPlants.map((comments, index) => (
                <><div className='recommendResultWi' key={comments.index}>{index+1}위</div>
                <div className='recommendResultRanking' key={comments.index} onClick={() => openModal(comments.plantsName)}>{comments.plantsName}</div></>
            ))}
            <button className='recommendResultButton' onClick={() => navigate('/RecommendPage')}>질문지로</button>

            <Modal className='recommendResultModal' isOpen={modalIsOpen}>
                {selectedPlants.map((plant) => {
                    if (plant.plantsName === selectedPlantName) {
                        return (
                            <div key={plant.id}>
                            <ul className='plantExplain'>
                                <li className='plantExplainTitle'>식물명</li>
                                <li>{plant.plantsName}</li>
                                <li className='plantExplainTitle'>사진</li>
                                <li><img src={plant.plantsPic} width={100} height={100}></img></li>
                                <li className='plantExplainTitle'>온도</li>
                                <li>{getTemperatureText(plant.plantsTemperature)}</li>
                                <li className='plantExplainTitle'>조도</li>
                                <li>{getLightText(plant.plantsLight)}</li>
                                <li className='plantExplainTitle'>물</li>
                                <li>{getWaterText(plant.plantsWater)}</li>
                                <li className='plantExplainTitle'>난이도</li>
                                <li >{getLevelText(plant.plantsLevel)}</li>
                                <li className='plantExplainTitle'>효과</li>
                                <li>{plant.plantsEffect}</li>
                                <li className='plantExplainTitle'>주의점</li>
                                <li>{plant.plantsNotice}</li>
                                <li>
                                    {/*<button onClick={onSubmit}>*/}
                                    {/*<input*/}
                                    {/*    className='crawlingInput'*/}
                                    {/*    value={plant.plantsName}*/}
                                    {/*    onChange={handleInputChange}*/}
                                    {/*/>*/}
                                    <input
                                        className='crawlingButton'
                                        type="submit"
                                        onClick={()=>onSubmit(plant.plantsName)}
                                        // value={plant.plantsName}
                                        onChange={handleInputChange}
                                        value={isSearching ? "검색 중..." : "검색"}
                                        disabled={isSearching}
                                    />
                                    {/*</button>*/}
                                </li>
                            </ul>
                            </div>
                        );
                        }
                        return null;
                    })}
                <button className='modalCloseButton' onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}

export default RecommendResultPage;