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
      setMessages([...messages, inputValue]);
      setInputValue(""); // 입력 필드를 비웁니다.
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // 기본 Enter 키 동작을 막습니다.
      handleButtonClick();
    }
  };

  return (
    <Body>
      <Msg>
        {messages.map((msg, index) => (
          <Message key={index}>
            <TextBox>{msg}</TextBox>
          </Message>
        ))}
      </Msg>
      <InputWrapper>
        <Input
          placeholder="오늘의 하루를 요약해서 정리해보세요"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <InputBtn onClick={handleButtonClick}>입력</InputBtn>
      </InputWrapper>
    </Body>
  );
};

export default Memo;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 2px solid black;
  width: 380px;
  height: 444px;
  border-radius: 4px;
`;

const InputWrapper = styled.div`
  position: relative; /* 부모 요소를 기준으로 버튼 위치를 절대적으로 설정할 수 있습니다. */
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
`;

const Input = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: none;
  resize: none; /* 사용자가 크기를 조절하지 못하게 합니다. */
  box-sizing: border-box; /* padding과 border가 요소의 총 너비와 높이에 포함되도록 합니다. */
  font-size: 14px;
  &::placeholder {
    color: #d0d0d0;
  }
`;

const Msg = styled.div`
  height: 320px;
  border: none;
  margin-bottom: 20px;
  overflow-y: auto;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const TextBox = styled.div`
  padding: 15px 25px;
  border: 2px solid #000000;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  width: 345px;
`;

const InputBtn = styled.button`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 65px;
  height: 30px;
  font-size: 13px;
  border: none;
  cursor: pointer;
`;
