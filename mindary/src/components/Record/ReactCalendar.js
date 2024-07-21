import CalendarComponent from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import moment from "moment";

const ReactCalendar = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <StyledCalendarWrapper>
      <Title>CALENDAR</Title>
      <StyledCalendar
        formatMonthYear={(locale, date) => moment(date).format("MMMM, YYYY")}
        formatDay={(locale, date) => moment(date).format("D")}
        formatShortWeekday={(locale, date) =>
          moment(date).format("dd").charAt(0)
        } // Change weekday labels
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
      />
    </StyledCalendarWrapper>
  );
};

export default ReactCalendar;

export const StyledCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;

  .react-calendar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 663px;
    max-height: 550px;
    border: none;
    line-height: normal;
    background-color: white;
  }

  .react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--weekend
  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      color: ${(props) => props.theme.gray_1};
    }
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 52px;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: ${(props) => props.theme.darkBlack};
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 700;
    font-size: 22px;
    color: white;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 15px 10px;
  }

  .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    color: white;
  }
  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    font-weight: 1000;
  }

  .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.gray_5};
    padding: 0;
  }

  .react-calendar__month-view__days {
    height: 440px;
    width: 663px;
    border: 1.5px solid black !important;
  }

  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: ${(props) => props.theme.gray_1};
  }

  /* 네비게이션 버튼 위치 조정 */
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 25px;
  }

  .react-calendar__navigation__arrow {
    order: 2; /* Move the arrows to the right */
  }

  .react-calendar__navigation__label {
    order: 1; /* Keep the month/year label at the left */
    margin-right: auto;
  }
  /* 일 날짜 간격 */
  .react-calendar__tile {
    position: relative;
    font-size: 20px;
    border: 1px solid black;
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.gray_1};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: lightgrey;
  }
  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: lightgrey;
  }
`;

export const StyledCalendar = styled(CalendarComponent)`
  width: 100%; /* 캘린더의 넓이를 부모 컴포넌트의 100%로 설정 */
`;

/* 오늘 버튼 스타일 */
export const StyledDate = styled.div`
  position: absolute;
  right: 7%;
  top: 6%;
  background-color: ${(props) => props.theme.primary_3};
  color: ${(props) => props.theme.yellow_2};
  width: 18%;
  min-width: fit-content;
  height: 1.5rem;
  text-align: center;
  margin: 0 auto;
  line-height: 1.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 800;
`;

/* 오늘 날짜에 텍스트 삽입 스타일 */
export const StyledToday = styled.div`
  font-size: x-small;
  color: ${(props) => props.theme.br_2};
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

/* 출석한 날짜에 점 표시 스타일 */
export const StyledDot = styled.div`
  background-color: ${(props) => props.theme.br_2};
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  margin-bottom: 20px;
  margin-left: 10px;
`;
