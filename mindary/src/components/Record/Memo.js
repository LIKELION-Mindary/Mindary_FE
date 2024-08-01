import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Memo = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputHeight, setInputHeight] = useState("89px"); // 초기 높이 설정
  const inputRef = useRef(null);
  const dummyRef = useRef(null); // dummy element를 참조할 ref

  useEffect(() => {
    if (inputRef.current) {
      // 입력값이 변경될 때마다 높이를 조정합니다.
      const textarea = inputRef.current;
      const { scrollHeight } = textarea;
      setInputHeight(`${scrollHeight}px`);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      const now = new Date();
      const timeString = formatTime(now);
      const lineCount = calculateLineCount(inputValue);
      const newMessage = {
        text: inputValue,
        time: timeString,
        lineCount: lineCount,
        height: lineCount * 30, // 한 줄당 30px
      };
      setMessages([...messages, newMessage]);
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

  const calculateLineCount = (text) => {
    if (dummyRef.current) {
      dummyRef.current.style.width = "400px"; // 입력 필드의 너비와 동일하게 설정
      dummyRef.current.textContent = text;
      const height = dummyRef.current.scrollHeight;
      return Math.ceil(height / 30); // 각 줄의 높이가 30px로 가정
    }
    return 1; // 기본 줄 수
  };

  return (
    <Body>
      <Msg>
        {messages.map((msg, index) => (
          <Message key={index}>
            <TimeSection>
              <Time>{msg.time}</Time>
              <Null />
              <Null1 />
            </TimeSection>
            <TextBox height={msg.height}>{msg.text}</TextBox>
            <SpaceSection>
              <Space />
              <Space1 />
              <Space2 />
            </SpaceSection>
          </Message>
        ))}
      </Msg>
      <InputWrapper>
        <Input
          ref={inputRef}
          placeholder="하고 싶은 말, 마음에 담아두지 마세요."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <BtnContent>
          <InputBtn onClick={handleButtonClick}>등록하기</InputBtn>
        </BtnContent>
        <Dummy ref={dummyRef} />
      </InputWrapper>
    </Body>
  );
};

export default Memo;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 463px;
  height: 480px;
  padding-right: 2px;
  box-sizing: border-box; /* 전체 요소의 너비와 높이를 계산할 때 패딩과 보더를 포함 */
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.textarea`
  width: 100%; /* 부모 요소의 너비에 맞춥니다 */
  padding: 15px;
  outline: none; /* 포커스 시 외곽선 제거 */
  overflow-y: auto;
  height: 90px;
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
  flex-grow: 1; /* 이 요소가 남은 공간을 차지하도록 합니다 */
  width: 100%;
  border: none;
  margin: 0;
  background-color: white;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 20px; /* 버튼에 의해 내용이 가려지지 않도록 여유 공간을 둡니다 */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #cccccc;
    position: relative;
    border-radius: 4px;
  }
`;

const Time = styled.div`
  width: 117.5px;
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  padding-left: 10px;
  box-sizing: border-box;
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
  border-bottom: 1px solid #cccccc;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  background-color: white;
  height: ${(props) => props.height}px; /* 동적으로 높이 설정 */
  box-sizing: border-box; /* 높이 계산에 패딩과 보더를 포함 */
  white-space: pre-wrap; /* 줄바꿈 문자와 공백을 그대로 유지 */
`;

const InputBtn = styled.button`
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 65px;
  height: 30px;
  font-size: 13px;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

const Dummy = styled.div`
  visibility: hidden;
  white-space: pre-wrap;
  word-break: break-word;
  position: absolute;
  top: 0;
  left: 0;
  width: 433px; /* 입력 필드와 동일한 너비 */
`;
const BtnContent = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: flex-end;
`;

const SpaceSection = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #cccccc;
`;

const TimeSection = styled(SpaceSection)`
  border-bottom: 1px solid #cccccc;
  height: 29.5px;
  box-sizing: border-box;
`;
const Null = styled.div`
  border-left: 1px solid #cccccc;
  box-sizing: border-box;
  width: 118px;
`;
const Null1 = styled.div`
  flex: 1;
  box-sizing: border-box;
  border-left: 1px solid #cccccc;
`;
const Space = styled.div`
  width: 117.5px;
  box-sizing: border-box;
`;
const Space1 = styled.div`
  border-left: 1px solid #cccccc;
  width: 118px;
  box-sizing: border-box;
`;
const Space2 = styled.div`
  flex: 1;
  border-left: 1px solid #cccccc;
`;
