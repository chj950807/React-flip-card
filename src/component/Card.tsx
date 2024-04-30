import { useState } from 'react';

export default function Card() {
    const [isFlipped, setIsFlipped] = useState(false);

    const onClickFlipCard = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <div className='card-container' onClick={onClickFlipCard}>
            <div className={`card ${isFlipped ? 'flip-card' : ''}`}>
                <div className='card-front'>
                    <h1 className='card-title'>앞면</h1>
                    <p className='card-description'>
                        이 카드를 클릭하면 뒤집어 집니다.
                    </p>
                    <p className='card-description'>
                        (주) 보토 코딩테스트용
                    </p>
                </div>
                <div className='card-back'>
                    <h1 className='card-title'>뒷면</h1>
                    <p className='card-description'>
                        다시 클릭하면 앞면으로 돌아갑니다.
                    </p>
                    <p className='card-description'>
                        (주) 보토 코딩테스트용
                    </p>
                </div>
            </div>
        </div>
    );
}
