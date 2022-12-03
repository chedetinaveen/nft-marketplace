import React from "react";

import { Column, Row, Img, Text, Stack, Button } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col justify-start sm:py-[15px] md:py-[23px] py-[34px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[23px] ml-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
              <Img
                src="images/img_ellipse1015.png"
                className="sm:h-[30px] md:h-[39px] h-[56px] rounded-radius50 sm:w-[29px] md:w-[38px] w-[56px]"
                alt="Ellipse1015"
              />
              <Column className="flex flex-col ml-[14px] md:ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                <Text
                  className="font-outfit font-semibold text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Kevin Cranel
                </Text>
                <Text
                  className="font-normal font-outfit sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  @kecrane
                </Text>
              </Column>
            </Row>
            <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] pt-[1px] w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-medium font-urbanist sm:ml-[18px] md:ml-[23px] ml-[34px] text-gray_901 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  GENERAL
                </Text>
                <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_clock_1.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="clock"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_message.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="message"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Message
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_settings.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="settings"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Settings
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]">
                <Text
                  className="font-medium font-urbanist sm:ml-[18px] md:ml-[23px] ml-[34px] text-gray_901 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  MARKETPLACE
                </Text>
                <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_user.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="user"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Market
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_link.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="link"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Active Bid
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_clock.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="clock One"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Saved
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]">
                <Text
                  className="font-medium font-urbanist sm:ml-[18px] md:ml-[23px] ml-[34px] text-gray_901 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  MY PROFILE
                </Text>
                <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_settings_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="settings Two"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Collection
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_car.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="car"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Wallet
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                    <Img
                      src="images/img_clock_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="clock Two"
                    />
                    <Text
                      className="flex-grow font-medium font-urbanist md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      History
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Stack className="h-[258px] sm:ml-[18px] md:ml-[23px] ml-[34px] sm:mt-[26px] md:mt-[34px] mt-[50px] relative sm:w-[100%] w-[78%]">
              <Column className="absolute bg-gray_900 bottom-[0] flex flex-col items-center justify-end p-[14px] sm:p-[7px] md:p-[9px] rounded-radius15 w-[100%]">
                <Text
                  className="font-semibold font-urbanist sm:mt-[15px] md:mt-[19px] mt-[29px] text-white_A700 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Help Center
                </Text>
                <Text
                  className="font-normal font-urbanist leading-[180.00%] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] not-italic text-center text-gray_400 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[81%]"
                  variant="body1"
                >
                  Having trouble in Enefti?
                  <br />
                  Please contact us for more question
                </Text>
                <Button
                  className="cursor-pointer font-medium font-urbanist min-w-[100%] sm:mt-[18px] md:mt-[23px] mt-[34px] text-[14px] text-center tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillWhiteA700"
                >
                  Go To Help Center
                </Button>
              </Column>
              <Button
                className="absolute flex sm:h-[27px] md:h-[35px] h-[50px] inset-x-[0] items-center justify-center mx-[auto] rounded-radius50 top-[0] sm:w-[26px] md:w-[34px] w-[50px]"
                size="lgIcn"
                variant="icbOutlineGray5003f"
              >
                <Img
                  src="images/img_question.svg"
                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                  alt="question"
                />
              </Button>
            </Stack>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
