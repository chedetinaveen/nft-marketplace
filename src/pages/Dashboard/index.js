import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  Input,
  List,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-outfit items-center justify-start mx-[auto] w-[100%]">
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
                    <Column className="flex flex-col font-outfit items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                      <Row className="bg-gray_900_5f flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[266px] sm:mx-[0] mx-[auto] p-[10px] sm:p-[5px] md:p-[6px] sm:px-[15px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="eye"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Dashboard
                        </Text>
                      </Row>
                      <Column className="flex flex-col font-urbanist items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
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
                          alt="clock"
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] rounded-radius15 sm:w-[100%] w-[96%]"
                  style={{ backgroundImage: "url('images/img_banner.png')" }}
                >
                  <Column className="bg-gradient  flex flex-col justify-center sm:p-[15px] md:p-[20px] p-[30px] rounded-radius15 w-[100%]">
                    <Text
                      className="sm:mt-[14px] md:mt-[18px] mt-[27px] text-white_A700 tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Create and Sell Extraordinary NFTs
                    </Text>
                    <Text
                      className="font-medium md:mt-[11px] mt-[17px] sm:mt-[9px] text-white_A700_a2 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      The world’s first and largest digital marketplace for
                      crypto NFTs
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mb-[10px] md:mb-[13px] mb-[19px] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[47%] text-[14px] text-center tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Explore More
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold min-w-[47%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[14px] text-center tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineWhiteA700"
                      >
                        Sell Artwork
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[24px] md:mt-[31px] mt-[46px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="text-black_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Trending Auction
                    </Text>
                    <Text
                      className="font-medium mt-[1px] text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      View All
                    </Text>
                  </Row>
                  <List
                    className="sm:gap-[10px] md:gap-[13px] gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Row
                        className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_duration_140X222.png')",
                        }}
                      >
                        <Button
                          className="cursor-pointer font-medium sm:mb-[50px] md:mb-[65px] mb-[95px] min-w-[37%] mt-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                            src="images/img_duration.svg"
                            className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                            alt="Duration"
                          />
                        </Button>
                      </Row>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] pr-[2px] pt-[2px] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            The Unfortable Facer
                          </Text>
                          <Text
                            className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Bane Riccardo
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] pb-[1px] pr-[1px] sm:px-[0] sm:w-[100%] w-[58%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Current Bid
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                18,99 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="cursor-pointer font-medium font-urbanist min-w-[43%] my-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                          backgroundImage: "url('images/img_duration_1.png')",
                        }}
                      >
                        <Button
                          className="cursor-pointer font-medium sm:mb-[50px] md:mb-[65px] mb-[95px] min-w-[37%] mt-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                            src="images/img_duration.svg"
                            className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                            alt="Duration One"
                          />
                        </Button>
                      </Row>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] pr-[2px] pt-[2px] sm:px-[0] sm:w-[100%] w-[78%]">
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
                            By Angelina Cruzz
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Current Bid
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start mt-[4px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[68%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort One"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                4,32 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="cursor-pointer font-medium font-urbanist min-w-[43%] my-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                          backgroundImage: "url('images/img_duration_2.png')",
                        }}
                      >
                        <Button
                          className="cursor-pointer font-medium sm:mb-[50px] md:mb-[65px] mb-[95px] min-w-[37%] mt-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                            src="images/img_duration.svg"
                            className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                            alt="Duration Two"
                          />
                        </Button>
                      </Row>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
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
                            By Ralphi Arness
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Current Bid
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start mt-[4px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[68%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort Two"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                4,32 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="cursor-pointer font-medium font-urbanist min-w-[43%] my-[1px] text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Top Collection
                  </Text>
                  <Text
                    className="font-medium sm:ml-[286px] md:ml-[369px] ml-[537px] mt-[2px] text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    View All
                  </Text>
                </Row>
                <footer className="sm:mt-[10px] md:mt-[13px] mt-[20px] sm:w-[100%] w-[95%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pb-[2px] w-[100%]">
                      <Text
                        className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Collection
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                        <Text
                          className="font-medium mb-[1px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          Volume
                        </Text>
                        <Text
                          className="font-medium mb-[1px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          24h %
                        </Text>
                        <Text
                          className="font-medium mb-[1px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          Floor Price
                        </Text>
                        <Text
                          className="font-medium my-[1px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          Owners
                        </Text>
                        <Text
                          className="font-medium mt-[1px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          Items
                        </Text>
                      </Row>
                    </Row>
                    <List
                      className="min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:pr-[3px] md:pr-[4px] pr-[7px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pr-[1px] sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                          <Img
                            src="images/img_ellipse1018.png"
                            className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                            alt="Ellipse1018"
                          />
                          <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                            <Text
                              className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Doodle Lucu
                            </Text>
                            <Text
                              className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              By Doodles
                            </Text>
                          </Column>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[65%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                            <Img
                              src="images/img_sort.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="sort Three"
                            />
                            <Text
                              className="flex-grow font-medium mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                              variant="body1"
                            >
                              14,32
                            </Text>
                          </Row>
                          <Text
                            className="font-medium font-outfit sm:ml-[31px] md:ml-[41px] ml-[60px] mt-[3px] text-green_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            + 20,4%
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start justify-center mb-[1px] md:ml-[36px] ml-[53px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                            <Img
                              src="images/img_sort.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="sort One"
                            />
                            <Text
                              className="flex-grow font-medium ml-[4px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                              variant="body1"
                            >
                              2,3
                            </Text>
                          </Row>
                          <Text
                            className="font-medium font-urbanist sm:ml-[48px] md:ml-[62px] ml-[91px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            2,2K
                          </Text>
                          <Text
                            className="font-medium font-urbanist sm:ml-[45px] md:ml-[58px] ml-[85px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            18
                          </Text>
                        </Row>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pr-[1px] sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                          <Img
                            src="images/img_ellipse1018_42X42.png"
                            className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                            alt="Ellipse1018 One"
                          />
                          <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                            <Text
                              className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Kimawi Genesis
                            </Text>
                            <Text
                              className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              By Kimawi - Japan
                            </Text>
                          </Column>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[65%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                            <Img
                              src="images/img_sort.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="sort Four"
                            />
                            <Text
                              className="flex-grow font-medium mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                              variant="body1"
                            >
                              6,11
                            </Text>
                          </Row>
                          <Text
                            className="font-medium font-outfit mt-[3px] text-red_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            - 18,2%
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-start justify-center mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                            <Img
                              src="images/img_sort.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="sort One One"
                            />
                            <Text
                              className="flex-grow font-medium ml-[4px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                              variant="body1"
                            >
                              12,52
                            </Text>
                          </Row>
                          <Text
                            className="font-medium font-urbanist mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            1,9K
                          </Text>
                          <Text
                            className="font-medium font-urbanist mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            21
                          </Text>
                        </Row>
                      </Row>
                    </List>
                  </Column>
                </footer>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] outline outline-[0.5px] outline-gray_100 sm:p-[15px] md:p-[17px] p-[26px] sm:w-[100%] w-[30%]">
                <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Featured Creators
                    </Text>
                    <Text
                      className="font-medium mt-[1px] text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      See All
                    </Text>
                  </Row>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs2 w-[100%]">
                    <Stack className="h-[146px] relative w-[100%]">
                      <Img
                        src="images/img_rectangle2043.png"
                        className="absolute h-[120px] max-w-[100%] rounded-radius12 top-[0] w-[100%]"
                        alt="Rectangle2043"
                      />
                      <Img
                        src="images/img_ellipse1019.png"
                        className="absolute bottom-[0] sm:h-[28px] md:h-[36px] h-[52px] inset-x-[0] mx-[auto] rounded-radius50 sm:w-[27px] md:w-[35px] w-[52px]"
                        alt="Ellipse1019"
                      />
                    </Stack>
                    <Column className="flex flex-col items-center justify-start sm:mb-[10px] md:mb-[13px] mb-[19px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Column className="flex flex-col font-urbanist sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                            <Text
                              className="flex-grow font-semibold text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                              variant="body1"
                            >
                              Murakami Flowers
                            </Text>
                            <Img
                              src="images/img_checkmark.svg"
                              className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[4px] md:w-[12px] w-[18px] sm:w-[9px]"
                              alt="checkmark"
                            />
                          </Row>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            @mftmkkus
                          </Text>
                        </Column>
                        <Button
                          className="cursor-pointer font-normal font-outfit min-w-[26%] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-[12px] text-center tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                          shape="CircleBorder14"
                          size="sm"
                          variant="Outline_1"
                        >
                          Follow
                        </Button>
                      </Row>
                      <Line className="bg-gray_100 h-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                      <Text
                        className="font-normal leading-[180.00%] md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] not-italic text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[97%]"
                        variant="body2"
                      >
                        Murakami.Flowers is a work in which artist Takashi
                        Murakami’s representative artwork.....
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start md:mb-[10px] mb-[15px] sm:mb-[7px] sm:mt-[23px] md:mt-[30px] mt-[44px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="font-semibold mt-[1px] text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Recent Activity
                    </Text>
                    <Text
                      className="font-medium text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      See All
                    </Text>
                  </Row>
                  <List
                    className="sm:gap-[21px] md:gap-[27px] gap-[40px] min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                        <Img
                          src="images/img_ellipse1018_1.png"
                          className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          alt="Ellipse1018 Two"
                        />
                        <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Uzachi #4390
                          </Text>
                          <Text
                            className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            From Ragnarok Meta
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Five"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          2.15 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Img
                          src="images/img_ellipse1018_2.png"
                          className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          alt="Ellipse1018 Three"
                        />
                        <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Doodles #3486
                          </Text>
                          <Text
                            className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            From Doodles
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Six"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          4.42 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                        <Img
                          src="images/img_ellipse1018_3.png"
                          className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          alt="Ellipse1018 Four"
                        />
                        <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Murakami #2766
                          </Text>
                          <Text
                            className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            From Murakami
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Seven"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          1.08 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                        <Img
                          src="images/img_ellipse1018_4.png"
                          className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          alt="Ellipse1018 Five"
                        />
                        <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Doodles #2761
                          </Text>
                          <Text
                            className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            From Murakami
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Eight"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          4.4 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Img
                          src="images/img_ellipse1018_5.png"
                          className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          alt="Ellipse1018 Six"
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
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Nine"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          5.62 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Img
                          src="images/img_ellipse1018_6.png"
                          className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          alt="Ellipse1018 Seven"
                        />
                        <Column className="flex flex-col items-center justify-start mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Gemmy #3723
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            From GemmySolana
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Ten"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          5.32 ETH
                        </Text>
                      </Row>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardPage;
