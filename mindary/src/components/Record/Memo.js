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
            <Time>오전 1시 18분</Time>
            <TextBox>{msg}</TextBox>
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
  width: 403px;
  height: 487px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
`;

const Input = styled.textarea`
  width: 100%;
  height: 90px;
  padding: 20px 10px;
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
  height: 365px;
  width: 100%;
  border: none;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Time = styled.div`
  height: 30px;
  font-size: 14px;
  padding: 10px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2px;
`;

const TextBox = styled.div`
  padding: 15px 25px;
  background-color: white;
  border: none;
  font-size: 14px;
  font-weight: 400;
  width: 340px;
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
