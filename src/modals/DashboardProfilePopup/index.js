import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Img, Text, Line } from "components";

const DashboardProfilePopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[15%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] outline outline-[0.75px] outline-gray_100 rounded-radius10 shadow-bs3 w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-end max-w-[202px] sm:mb-[345px] md:mb-[445px] mb-[648px] sm:mt-[36px] md:mt-[46px] mt-[68px] mx-[auto] outline outline-[0.75px] outline-gray_100 sm:px-[15px] py-[14px] sm:py-[7px] md:py-[9px] rounded-radius10 shadow-bs3 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[14px] md:ml-[9px] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
              <Img
                src="images/img_ellipse1015.png"
                className="sm:h-[21px] md:h-[27px] h-[38px] rounded-radius50 sm:w-[20px] md:w-[26px] w-[38px]"
                alt="Ellipse1021"
              />
              <Column className="flex flex-col justify-start ml-[10px] md:ml-[6px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                <Text
                  className="font-semibold text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Kevin Crannel
                </Text>
                <Text
                  className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  @kecrane
                </Text>
              </Column>
            </Row>
            <Column className="flex flex-col sm:h-[108px] md:h-[140px] h-[202px] justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
              <Line className="bg-gray_100 h-[1.5px] w-[100%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[14px] md:ml-[9px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                <Img
                  src="images/img_question_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="question"
                />
                <Text
                  className="flex-grow font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                  variant="body1"
                >
                  Home
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[14px] md:ml-[9px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                <Img
                  src="images/img_user_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="user"
                />
                <Text
                  className="flex-grow font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                  variant="body1"
                >
                  Profile
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[14px] md:ml-[9px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                  <Img
                    src="images/img_moon.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="moon"
                  />
                  <Text
                    className="flex-grow font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    Dark Mode
                  </Text>
                </Row>
                <Img
                  src="images/img_camera.svg"
                  className="max-w-[100%] w-[19%]"
                  alt="camera"
                />
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[14px] md:ml-[9px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                <Img
                  src="images/img_settings.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="settings"
                />
                <Text
                  className="flex-grow font-medium mb-[1px] ml-[14px] sm:ml-[7px] md:ml-[9px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                  variant="body1"
                >
                  Settings
                </Text>
              </Row>
              <Line className="bg-gray_100 h-[1.5px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-end ml-[14px] md:ml-[9px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                <Img
                  src="images/img_refresh_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="refresh"
                />
                <Text
                  className="flex-grow font-medium mb-[1px] ml-[14px] sm:ml-[7px] md:ml-[9px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-red_600"
                  variant="body1"
                >
                  Logout
                </Text>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardProfilePopupModal;
