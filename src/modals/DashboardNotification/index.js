import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line, List, Button } from "components";

const DashboardNotificationModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[22%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] shadow-bs3 w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-start max-w-[311px] mx-[auto] md:pl-[13px] sm:pl-[15px] pl-[20px] sm:px-[15px] md:py-[13px] sm:py-[15px] py-[20px] shadow-bs3 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start ml-[4px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[91%]">
              <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                <Text
                  className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Notification
                </Text>
                <Text
                  className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  You have 0 unread messages
                </Text>
              </Column>
              <Img
                src="images/img_close.svg"
                className="common-pointer sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Line className="bg-gray_100 h-[1.5px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
            <Text
              className="font-normal font-outfit ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              New
            </Text>
            <List
              className="font-outfit sm:gap-[14px] md:gap-[19px] gap-[28px] sm:mb-[363px] md:mb-[469px] mb-[682px] min-h-[auto] ml-[4px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[91%]"
              orientation="vertical"
            >
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Button
                  className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center my-[13px] sm:my-[6px] md:my-[8px] rounded-radius50 sm:w-[20px] md:w-[26px] w-[38px]"
                  size="smIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_refresh.svg"
                    className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                    alt="refresh"
                  />
                </Button>
                <Column className="flex flex-col sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[81%]">
                  <Text
                    className="font-semibold leading-[130.00%] sm:mx-[0] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[88%]"
                    variant="body1"
                  >
                    <span className="text-black_900 text-[14px] font-outfit">
                      Your bid is placed{" "}
                    </span>
                    <span className="text-gray_500 text-[14px] font-outfit font-normal not-italic">
                      waiting for
                      <br />
                      auction ended
                    </span>
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                    <Img
                      src="images/img_clock_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="clock"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                      variant="body2"
                    >
                      24 Minutes ago
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Button
                  className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center my-[13px] sm:my-[6px] md:my-[8px] rounded-radius50 sm:w-[20px] md:w-[26px] w-[38px]"
                  size="smIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_frame162432.png"
                    className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                    alt="Frame162432"
                  />
                </Button>
                <Column className="flex flex-col sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[81%]">
                  <Text
                    className="font-semibold leading-[130.00%] sm:mx-[0] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[99%]"
                    variant="body1"
                  >
                    <span className="text-black_900 text-[14px] font-outfit">
                      You have new message{" "}
                    </span>
                    <span className="text-gray_500 text-[14px] font-outfit font-normal not-italic">
                      2 unread messaeges
                    </span>
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                    <Img
                      src="images/img_clock_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="clock One"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                      variant="body2"
                    >
                      1 Hours ago
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Button
                  className="flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center my-[13px] sm:my-[6px] md:my-[8px] rounded-radius50 sm:w-[20px] md:w-[26px] w-[38px]"
                  size="smIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_frame162432_38X38.png"
                    className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                    alt="Frame162432 One"
                  />
                </Button>
                <Column className="flex flex-col sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[81%]">
                  <Text
                    className="font-semibold leading-[130.00%] sm:mx-[0] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[99%]"
                    variant="body1"
                  >
                    <span className="text-black_900 text-[14px] font-outfit">
                      New collection created{" "}
                    </span>
                    <span className="text-gray_500 text-[14px] font-outfit font-normal not-italic">
                      in nft art category
                    </span>
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                    <Img
                      src="images/img_clock_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="clock Two"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                      variant="body2"
                    >
                      4 Days ago
                    </Text>
                  </Row>
                </Column>
              </Row>
            </List>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardNotificationModal;
