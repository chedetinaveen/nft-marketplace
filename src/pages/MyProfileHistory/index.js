import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  Input,
  Line,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MyProfileHistoryPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-outfit items-center justify-end mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
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
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_clock.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="clock One"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
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
                      <Row className="bg-gray_900_5f flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-center max-w-[266px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] mx-[auto] p-[10px] sm:p-[5px] md:p-[6px] sm:px-[15px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_clock_5.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
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
          <Column className="flex flex-col items-center max-w-[1138px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
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
            <Column className="flex flex-col font-urbanist justify-start sm:mt-[23px] md:mt-[30px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
              <Text
                className="text-black_900 tracking-ls034 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                History
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[19px] sm:px-[0] rounded-radius14 w-[100%]">
                <Button
                  className="flex items-center justify-center min-w-[8%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_refresh_1.svg"
                      className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                      alt="refresh"
                    />
                  }
                  shape="CircleBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[16px] tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                    All
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center md:ml-[16px] min-w-[13%] ml-[24px] sm:ml-[12px] text-center w-[max-content]"
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
                  className="flex items-center justify-center md:ml-[16px] min-w-[15%] ml-[24px] sm:ml-[12px] text-center w-[max-content]"
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
                <Button
                  className="flex items-center justify-center md:ml-[342px] min-w-[15%] ml-[497px] sm:ml-[264px] text-center w-[max-content]"
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
              <Column className="bg-white_A700 flex flex-col items-center justify-end sm:mt-[15px] md:mt-[20px] mt-[30px] outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Text
                    className="font-medium my-[1px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Item List
                  </Text>
                  <Text
                    className="font-medium sm:ml-[129px] md:ml-[167px] ml-[244px] my-[1px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Status
                  </Text>
                  <Text
                    className="font-medium ml-[100px] sm:ml-[53px] md:ml-[68px] mt-[2px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Open Price
                  </Text>
                  <Text
                    className="font-medium mb-[2px] ml-[101px] sm:ml-[53px] md:ml-[69px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Your Offer
                  </Text>
                  <Text
                    className="font-medium mb-[2px] ml-[100px] sm:ml-[53px] md:ml-[68px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Recent Offer
                  </Text>
                  <Text
                    className="font-medium mb-[2px] sm:ml-[49px] md:ml-[64px] ml-[93px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Time Left
                  </Text>
                </Row>
                <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]" />
                <List
                  className="min-h-[auto] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:w-[100%] w-[96%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                      <Img
                        src="images/img_ellipse1018_5.png"
                        className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                        alt="Ellipse1018"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Peachy Puch#22
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Mindblowonstudio
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium ml-[113px] sm:ml-[60px] md:ml-[77px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Actived
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[63px] ml-[92px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        5.62 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[64px] ml-[93px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        2.62 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[60px] ml-[88px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        2.14 ETH
                      </Text>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[52px] md:ml-[68px] ml-[99px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      1h 19m
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Img
                        src="images/img_duration_140X240.png"
                        className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                        alt="Ellipse1018 One"
                      />
                      <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Dayco Serpentine Belt
                        </Text>
                        <Text
                          className="font-medium sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Marvin McKinney
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      On Going
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        11.70 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One One"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        17.84 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two One"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        11.99 ETH
                      </Text>
                    </Row>
                    <Text
                      className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      18h 18m 2s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                      <Img
                        src="images/img_duration_3.png"
                        className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                        alt="Ellipse1018 Two"
                      />
                      <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Mad Ballot Holder
                        </Text>
                        <Text
                          className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Angelina Cruzz
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium ml-[112px] sm:ml-[59px] md:ml-[77px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Ended
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[68px] ml-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        6.48 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[64px] ml-[93px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One Two"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        14.81 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[60px] ml-[88px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two Two"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        12.81 ETH
                      </Text>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[50px] md:ml-[65px] ml-[95px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      12h 1m 24s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                      <Img
                        src="images/img_duration_4.png"
                        className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                        alt="Ellipse1018 Three"
                      />
                      <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Pile of Many Plates
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Ralphi Arness
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium ml-[106px] sm:ml-[56px] md:ml-[72px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Ended
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[68px] ml-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Three"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        17.84 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[61px] ml-[89px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One Three"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        17.99 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[58px] ml-[85px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two Three"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        17.84 ETH
                      </Text>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[48px] md:ml-[62px] ml-[91px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      28h 20m 5s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                      <Img
                        src="images/img_duration_5.png"
                        className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                        alt="Ellipse1018 Four"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Worldpac Alternator
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Annette Black
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      On Going
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Four"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        8.99 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One Four"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        11.70 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two Four"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        10.22 ETH
                      </Text>
                    </Row>
                    <Text
                      className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      17h 6m 3s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Img
                        src="images/img_duration_6.png"
                        className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                        alt="Ellipse1018 Five"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Duralast Ball Joint - Upper
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Jacob Jones
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[27px] md:ml-[35px] ml-[52px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Success
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[61px] ml-[89px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Five"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        14.81 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[64px] ml-[93px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One Five"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        16.48 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[57px] ml-[84px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two Five"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        12.32 ETH
                      </Text>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[49px] md:ml-[63px] ml-[92px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      3h 37m 22s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <Img
                        src="images/img_duration_8.png"
                        className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                        alt="Ellipse1018 Six"
                      />
                      <Column className="flex flex-col items-center justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
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
                          From Eleanor Pena
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium ml-[142px] sm:ml-[75px] md:ml-[97px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      On Going
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[55px] ml-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Six"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        5.22 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[64px] ml-[93px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One Six"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        8.99 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[61px] ml-[89px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two Six"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        6.70 ETH
                      </Text>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[50px] md:ml-[65px] ml-[95px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      34h 36m 6s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                      <Img
                        src="images/img_duration_7.png"
                        className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                        alt="Ellipse1018 Seven"
                      />
                      <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Rain X Wiper Blade Front
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Brooklyn Simmons
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[33px] md:ml-[43px] ml-[63px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      On Going
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[55px] ml-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Seven"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        3.99 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[64px] ml-[94px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort One Seven"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        5.22 ETH
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[60px] ml-[88px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="sort Two Seven"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        4.84 ETH
                      </Text>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[50px] md:ml-[65px] ml-[95px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      3h 4m 3 s
                    </Text>
                  </Row>
                </List>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MyProfileHistoryPage;
