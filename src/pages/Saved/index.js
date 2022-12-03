import React from "react";

import { Column, Row, Img, Text, Stack, Button, Input, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SavedPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-outfit items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
          <aside className="w-[21%]">
            <div className="">
              <Column className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col justify-start sm:py-[15px] md:py-[23px] py-[34px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[176px] md:ml-[23px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
                  <Img
                    src="images/img_ellipse1015.png"
                    className="sm:h-[30px] md:h-[39px] h-[56px] rounded-radius50 sm:w-[29px] md:w-[38px] w-[56px]"
                    alt="Ellipse1015"
                  />
                  <Column className="flex flex-col ml-[14px] md:ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Kevin Cranel
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      @kecrane
                    </Text>
                  </Column>
                </Row>
                <Column className="flex flex-col font-urbanist items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] pt-[1px] w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium sm:ml-[18px] md:ml-[23px] ml-[34px] text-black_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      GENERAL
                    </Text>
                    <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_clock_1.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="clock"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Dashboard
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_message.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="message"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Message
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_settings.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="settings"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
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
                      className="font-medium sm:ml-[18px] md:ml-[23px] ml-[34px] text-gray_901 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      MARKETPLACE
                    </Text>
                    <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_user.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="user"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Market
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_link.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="link"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Active Bid
                        </Text>
                      </Row>
                      <Row className="bg-gray_900_5f flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-center max-w-[266px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] mx-[auto] p-[10px] sm:p-[5px] md:p-[6px] sm:px-[15px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_favorite_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="favorite"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
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
                      className="font-medium sm:ml-[18px] md:ml-[23px] ml-[34px] text-gray_901 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      MY PROFILE
                    </Text>
                    <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_settings_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="settings Two"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Collection
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_car.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="car"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Wallet
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_clock_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="clock One"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          History
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Stack className="font-urbanist h-[258px] max-w-[234px] sm:ml-[18px] md:ml-[23px] sm:mt-[26px] md:mt-[34px] mt-[50px] mx-[auto] sm:px-[15px] relative w-[100%]">
                  <Column className="absolute bg-gray_900 bottom-[0] flex flex-col items-center justify-end p-[14px] sm:p-[7px] md:p-[9px] rounded-radius15 w-[100%]">
                    <Text
                      className="font-semibold sm:mt-[15px] md:mt-[19px] mt-[29px] text-white_A700 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Help Center
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] not-italic text-center text-gray_400 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[81%]"
                      variant="body1"
                    >
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button
                      className="cursor-pointer font-medium min-w-[100%] sm:mt-[18px] md:mt-[23px] mt-[34px] text-[14px] text-center tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
          <Column className="flex flex-col items-center justify-start max-w-[1138px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between outline outline-[0.75px] outline-gray_100 sm:p-[15px] md:p-[23px] p-[34px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                wrapClassName="flex my-[2px] sm:mx-[0] sm:w-[100%] w-[45%]"
                name="SearchInput"
                placeholder="Search items, collections, and users"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer ml-[1px] mr-[16px] sm:mr-[8px] md:mr-[11px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#93989a"
                      className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                size="mdSrc"
              ></Input>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center justify-center sm:mx-[0] my-[2px] sm:px-[0] sm:w-[100%] w-[32%]">
                <Button
                  className="flex items-center justify-center min-w-[41%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_sort.svg"
                      className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                      alt="sort"
                    />
                  }
                  shape="RoundedBorder10"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[16px] tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                    3,421 ETH
                  </div>
                </Button>
                <Column className="flex flex-col sm:h-[28px] md:h-[36px] h-[52px] items-center sm:ml-[15px] md:ml-[20px] ml-[30px] outline outline-[0.75px] outline-gray_100 px-[14px] sm:px-[7px] md:px-[9px] rounded-radius50 sm:w-[27px] md:w-[35px] w-[52px]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col sm:h-[13px] md:h-[17px] h-[24px] items-end justify-start sm:pb-[15px] md:pl-[12px] sm:pl-[15px] pl-[18px] sm:w-[12px] md:w-[16px] w-[24px]"
                    style={{ backgroundImage: "url('images/img_icon.svg')" }}
                  >
                    <div className="bg-red_600 sm:h-[4px] md:h-[5px] h-[6px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[20px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                  <Img
                    src="images/img_ellipse1015.png"
                    className="sm:h-[28px] md:h-[36px] h-[52px] rounded-radius50 sm:w-[27px] md:w-[35px] w-[52px]"
                    alt="Ellipse1020"
                  />
                  <Img
                    src="images/img_arrowdown.svg"
                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="arrowdown"
                  />
                </Row>
              </Row>
            </Row>
            <Column className="flex flex-col font-urbanist justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
              <Text
                className="text-black_900 tracking-ls034 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                Saved
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[25px] rounded-radius14 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] rounded-radius14 sm:w-[100%] w-[45%]">
                  <Button
                    className="flex items-center justify-center min-w-[29%] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="images/img_user_1.svg"
                        className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                        alt="user"
                      />
                    }
                    shape="CircleBorder14"
                    size="lg"
                    variant="OutlineGray100"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[16px] tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                      Category
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center min-w-[30%] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="images/img_signal_24X24.svg"
                        className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                        alt="signal"
                      />
                    }
                    shape="CircleBorder14"
                    size="xl"
                    variant="OutlineGray100"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[16px] tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                      Collection
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center min-w-[33%] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="images/img_clock_4.svg"
                        className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                        alt="clock"
                      />
                    }
                    shape="CircleBorder14"
                    size="lg"
                    variant="OutlineGray100"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[16px] tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                      Price Range
                    </div>
                  </Button>
                </Row>
                <Button
                  className="flex items-center justify-center min-w-[15%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_menu.svg"
                      className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                      alt="menu"
                    />
                  }
                  shape="CircleBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[16px] tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                    Filter & Sort
                  </div>
                </Button>
              </Row>
              <List
                className="sm:gap-[10px] md:gap-[13px] gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[18px] md:mt-[23px] mt-[34px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Row
                    className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_10.png')",
                    }}
                  >
                    <Button
                      className="cursor-pointer font-medium sm:mb-[50px] md:mb-[65px] mb-[95px] min-w-[34%] mt-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="CircleBorder14"
                      size="sm"
                      variant="Outline"
                    >
                      2h 4m 32s
                    </Button>
                    <Button
                      className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:mb-[50px] md:mb-[64px] mb-[94px] sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                      size="smIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite_30X30.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="favorite One"
                      />
                    </Button>
                  </Row>
                  <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                      <Text
                        className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Diehard BATTERY-SILVER
                      </Text>
                      <Text
                        className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        By Ralph Edwards
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                      <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Text
                          className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Current Bid
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start mt-[4px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[63%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            2,78 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGray900"
                      >
                        Place a Bid
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Row
                    className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_11.png')",
                    }}
                  >
                    <Text
                      className="bg-gray_900_26 font-medium sm:mb-[50px] md:mb-[65px] mb-[95px] mt-[1px] sm:pb-[4px] md:pb-[6px] pb-[9px] pl-[10px] sm:pl-[5px] md:pl-[6px] sm:pr-[15px] md:pr-[21px] pr-[31px] sm:pt-[3px] md:pt-[4px] pt-[6px] rounded-radius14 text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[75px]"
                      variant="body2"
                    >
                      Ended
                    </Text>
                    <Button
                      className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:mb-[50px] md:mb-[64px] mb-[94px] sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                      size="smIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite_30X30.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="favorite Two"
                      />
                    </Button>
                  </Row>
                  <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[74%]">
                      <Text
                        className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Bosch Spark Plug
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        By Guy Hawkins
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                      <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Text
                          className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Fixed Price
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start mt-[4px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[63%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort One"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            8,99 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGray900"
                      >
                        Place a Bid
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Row
                    className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_12.png')",
                    }}
                  >
                    <Text
                      className="bg-gray_900_26 font-medium sm:mb-[50px] md:mb-[65px] mb-[95px] mt-[1px] sm:pb-[4px] md:pb-[6px] pb-[9px] pl-[10px] sm:pl-[5px] md:pl-[6px] sm:pr-[15px] md:pr-[21px] pr-[31px] sm:pt-[3px] md:pt-[4px] pt-[6px] rounded-radius14 text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[75px]"
                      variant="body2"
                    >
                      Ended
                    </Text>
                    <Button
                      className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:mb-[50px] md:mb-[64px] mb-[94px] sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                      size="smIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite_30X30.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="favorite Three"
                      />
                    </Button>
                  </Row>
                  <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[74%]">
                      <Text
                        className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Valvoline Engine Oil
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        By Albert Flores
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                      <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Text
                          className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Fixed Price
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start mt-[4px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[63%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort Two"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            51,23 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGray900"
                      >
                        Place a Bid
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Row
                    className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_13.png')",
                    }}
                  >
                    <Button
                      className="cursor-pointer font-medium sm:mb-[50px] md:mb-[65px] mb-[95px] min-w-[34%] mt-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="CircleBorder14"
                      size="sm"
                      variant="Outline"
                    >
                      2h 4m 32s
                    </Button>
                    <Button
                      className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:mb-[50px] md:mb-[64px] mb-[94px] sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                      size="smIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite_30X30.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="favorite Four"
                      />
                    </Button>
                  </Row>
                  <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] pr-[2px] pt-[2px] sm:px-[0] sm:w-[100%] w-[74%]">
                      <Text
                        className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Fram Oil Filter
                      </Text>
                      <Text
                        className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        By Jerome Bell
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                      <Column className="flex flex-col font-outfit sm:mx-[0] pb-[1px] pr-[1px] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Text
                          className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Current Bid
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort Three"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            25,00 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGray900"
                      >
                        Place a Bid
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SavedPage;
