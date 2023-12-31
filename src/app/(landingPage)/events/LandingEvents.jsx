/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Typography, theme } from "antd";
import React, { useEffect, useRef } from "react";

import SwipeableViews from "react-swipeable-views";
import { events } from "../events/newsConst";
import "./event.css";
import { store } from "@/redux/store";
import axios from "axios";
import { getNews } from "@/redux/slices/newSlice";

const { Title, Text, Paragraph } = Typography;

// const staticData = await fetch(`https://alumniproject.azurewebsites.net/alumni/api/accessReqeuest`,
// {
//   pageIndex: 1,
//   pageSize: 10,
// },
// {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// }, { cache: 'force-cache' })

const LandingEvents = () => {
  const swipeableViewsRef = useRef(null);

  const itemsPerSlide = 4;

  const { useToken } = theme;
  const { token } = useToken();

 

  const renderCarouselItems = () => {
    const totalItems = events.length;
    const totalSlides = Math.ceil(totalItems / itemsPerSlide);
    const carouselItems = [];

    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;
      const slideItems = events.slice(startIndex, endIndex);

      const slide = (
        <div className="carousel-slide flex" key={i}>
          {slideItems.map((item) => (
            <div className="carousel-item flex-shrink-0 w-1/3" key={item.id}>
              <a href="#" className="flex justify-center">
                <div className="flex flex-col justify-center items-center py-4">
                  <div className="relative">
                    <div
                      style={{
                        backgroundColor: token.colorPrimaryBg,
                      }}
                      className="skew-background px-10"
                    />
                    <Text>{item.month}</Text>
                    <Title paddingXXS marginXXS delete copyable={false}>
                      {item.date}
                    </Title>
                  </div>
                </div>
                <div className="flex flex-col items-start pl-10 pt-6">
                  <Title level={3}>{item.title}</Title>
                  <Text></Text>
                  <Paragraph>{item.location}</Paragraph>
                </div>
              </a>
            </div>
          ))}
        </div>
      );

      carouselItems.push(slide);
    }

    return carouselItems;
  };

  const loginToken = store.getState().authReducer.token;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://alumniproject.azurewebsites.net/alumni/api/news',
  //         {  pageNo: 1,
  //           pageSize: 10, },
  //           {
  //             headers: {
  //               Authorization: `Bearer ${loginToken}`,
  //             },
  //           }
  //       );

  //       if (response.status === 200) {
  //         const jsonData = response.data;
  //         setData(jsonData);
  //       } else {
  //         throw new Error('Request failed');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    store.dispatch(getNews(
      { token: loginToken}
    ));
    console.log("news", store.getState().newReducer.news)
  }, []);
  return (
    <>
      <div className="h-80 w-10/12 mt-14 mx-40">
        <SwipeableViews
          style={{
            width: "100%",
          }}
          slideStyle={{ overflow: "visible" }} // Ensure content is visible outside the slide
          slideClassName="focus:outline-none" // Remove focus outline on slides
          resistance // Enable resistance effect on swiping
          resistanceFactor={0.5} // Set resistance factor for swiping
          innerRef={swipeableViewsRef} // Assign the ref to the SwipeableViews component
        >
          {renderCarouselItems()}
        </SwipeableViews>
      </div>

      <div className="w-full flex justify-center items-center">
        <Button>View More Events</Button>
        <Button>View More Story</Button>
      </div>
    </>
  );
};

export default LandingEvents;
