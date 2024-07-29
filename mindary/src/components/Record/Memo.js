import React, { useState } from "react";
import styled from "styled-components";

const Memo = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      const now = new Date();
      const timeString = formatTime(now);
      setMessages([...messages, { text: inputValue, time: timeString }]);
      setInputValue(""); // 입력 필드를 비웁니다.
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // 기본 Enter 키 동작을 막습니다.
      handleButtonClick();
    }
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "오후" : "오전";
    const hour12 = hours % 12 || 12; // 12시간 형식으로 변환
    const minuteStr = minutes < 10 ? `0${minutes}` : minutes; // 분을 2자리로 포맷

    return `${ampm} ${hour12}시 ${minuteStr}분`;
  };

  const calculateHeight = (text) => {
    const lineCount = text.split("\n").length;
    return lineCount * 32; // 줄 수에 따라 높이를 계산 (한 줄에 30px)
  };

  return (
    <Body>
      <Msg>
        {messages.map((msg, index) => (
          <Message key={index}>
            <Time>{msg.time}</Time>
            <TextBox height={calculateHeight(msg.text)}>{msg.text}</TextBox>
          </Message>
        ))}
      </Msg>
      <InputWrapper>
        <Input
          placeholder="하고 싶은 말, 마음에 담아두지 마세요."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </InputWrapper>
      <InputBtn onClick={handleButtonClick}>등록하기</InputBtn>
    </Body>
  );
};

export default Memo;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1.5px solid black;
  width: 399px;
  height: 494px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea`
  width: 399px;
  height: 90px;
  padding: 15px;
  display: flex;
  position: fixed;
  top: 580px;
  border: none;
  resize: none; /* 사용자가 크기를 조절하지 못하게 합니다. */
  box-sizing: border-box; /* padding과 border가 요소의 총 너비와 높이에 포함되도록 합니다. */
  font-size: 14.11px;
  font-weight: 400;
  &::placeholder {
    color: #d0d0d0;
    font-size: 14px;
  }
`;

const Msg = styled.div`
  height: 371px;
  width: 100%;
  border: none;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(240, 240, 240, 0.6);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(0deg, #e2e2e2 0%, #fffefe 50%, #e2e2e2 100%);
    width: 13px;
    position: relative;
  }
  /* 핸들의 가로선 */
  &::-webkit-scrollbar-thumb::before {
    content: "";
    position: absolute;
    top: 10px; /* 핸들 상단에서의 위치 */
    left: 50%;
    transform: translateX(-50%); /* 수평 중앙 정렬 */
    width: 100%; /* 가로선의 길이 */
    height: 2px; /* 가로선의 두께 */
    background: #cccccc; /* 가로선의 색상 */
    border-radius: 2px; /* 가로선의 모서리 둥글게 */
  }

  &::-webkit-scrollbar-thumb::after {
    content: "";
    position: absolute;
    top: 20px; /* 핸들 상단에서의 위치 */
    left: 50%;
    transform: translateX(-50%); /* 수평 중앙 정렬 */
    width: 60%; /* 가로선의 길이 */
    height: 2px; /* 가로선의 두께 */
    background: #cccccc; /* 가로선의 색상 */
    border-radius: 2px; /* 가로선의 모서리 둥글게 */
  }

  &::-webkit-scrollbar-thumb::nth-of-type(2) {
    content: "";
    position: absolute;
    top: 30px; /* 핸들 상단에서의 위치 */
    left: 50%;
    transform: translateX(-50%); /* 수평 중앙 정렬 */
    width: 60%; /* 가로선의 길이 */
    height: 2px; /* 가로선의 두께 */
    background: #cccccc; /* 가로선의 색상 */
    border-radius: 2px; /* 가로선의 모서리 둥글게 */
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 14px;
  padding-left: 10px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 400;
  width: 387px;
  height: ${(props) => props.height}px; /* 동적으로 높이 설정 */
`;

const InputBtn = styled.button`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 65px;
  height: 30px;
  font-size: 13px;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;
