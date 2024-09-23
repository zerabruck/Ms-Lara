"use client";

import React, { useState, useRef } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding: 0 16px;
  gap: 8px;
  position: relative;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #0d99ff;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;

const DayCircle = styled.div<{ isSelected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? "#0D99FF" : "#E0E0E0")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
`;

const DayLabel = styled.div`
  text-align: center;
  font-size: 10px;
  color: #0d99ff;
  margin-top: 4px;
`;

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const daysArray = Array.from({ length: 100 }, (_, i) =>
    dayjs().add(i, "day")
  );

  const handleDayClick = (day: any) => {
    setSelectedDay(day);
  };

  const scrollCalendar = (direction: "left" | "right") => {
    if (calendarRef.current) {
      const scrollAmount = direction === "left" ? -100 : 100;
      calendarRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <ArrowButton onClick={() => scrollCalendar("left")}>&lt;</ArrowButton>
      <CalendarWrapper ref={calendarRef}>
        {daysArray.map((day, index) => (
          <div key={day.format("YYYY-MM-DD")}>
            <DayCircle
              isSelected={selectedDay && selectedDay.isSame(day, "day")}
              onClick={() => handleDayClick(day)}
            >
              {index === 0
                ? "Today"
                : index === 1
                ? "Tomorrow"
                : day.format("D")}
            </DayCircle>
            <DayLabel>
              {index === 0 ? "Today" : index === 1 ? "Tomorrow" : ""}
            </DayLabel>
          </div>
        ))}
      </CalendarWrapper>
      <ArrowButton onClick={() => scrollCalendar("right")}>&gt;</ArrowButton>
    </div>
  );
}
