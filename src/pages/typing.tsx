import { getAllByAltText } from '@testing-library/react';
import { useRef, useState } from 'react';
import { TypingPageStyled } from '~/styles/pageStyled/typingPageStyled';

const sentence = `누가 볼까 봐 겁이 나서
하루를 또 망치네
예민한 척을 해도
입꼬리는 올라가 너를 볼 때
어떻게 비춰질까 거울을 보네
(Desperate) 장난처럼 다가가
바로 얼어붙어 ice
비라도 내렸으면 좋겠다니깐
우산속에라도 숨고 싶네
왜 이럴까 볼 때 마다 넌
느리게 가는 구름 같아
Sweet해 보이는 너의 눈에
자꾸 비가 내려요
안아주고 싶다 내가 미쳤나 봐
구름아 구름아 나를 가려줘
요새 너의 기분이 궁금해
말투 표정 걸음걸이까지 보이네
한 번씩 내뱉는 너의 한숨
걱정은 끝도 없이 쌓여가
(I pray) 쓸데없는 고민 따위`;

const Typing = () => {
  const [line, setLine] = useState(1);
  const [key, setKey] = useState(0);
  const [input, setInput] = useState('');

  return (
    <TypingPageStyled>
      <div
        className="sentence"
        onInput={e => {
          let txt = (e.target as any).innerText.replaceAll('\n\n', '\n');
          txt =
            txt.slice(-1) !== '\n'
              ? txt.split('').length !== txt.trim().length
                ? txt.trim() + ' '
                : txt
              : txt;

          const check = sentence.indexOf(txt + '');

          setInput(txt);

          if (check === 0) {
            // 비교문
            setKey(txt.length);
          } else {
            console.log(txt.slice(0, key + 1));
          }
        }}
        style={{ transform: `translate(-50%, ${line * -34}px)` }}
      >
        {sentence.split('\n').map((v, i) => (
          <p key={'sentence' + i}>{v}</p>
        ))}

        <div className="editorbleBox" contentEditable></div>
      </div>
    </TypingPageStyled>
  );
};

export default Typing;
