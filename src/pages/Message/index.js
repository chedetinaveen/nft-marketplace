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

const MessagePage = () => {
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
                      <Row className="bg-gray_900_5f flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-center max-w-[266px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] mx-[auto] p-[10px] sm:p-[5px] md:p-[6px] sm:px-[15px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_file.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="file"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Message
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
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
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                        <Img
                          src="images/img_clock_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[24px] sm:ml-[12px] md:ml-[16px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[12px] md:w-[16px]"
                          alt="clock Two"
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
          <Stack className="h-[1076px] max-w-[380px] mx-[auto] sm:px-[15px] relative w-[100%]">
            <Column className="absolute bg-white_A700 bottom-[0] flex flex-col items-center justify-start outline outline-[0.5px] outline-gray_100 sm:p-[15px] md:p-[16px] p-[24px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                wrapClassName="flex mb-[973px] md:mb-[669px] sm:mb-[518px] sm:mx-[0] sm:w-[100%] w-[94%]"
                name="SearchInput"
                placeholder="Search chat"
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
                variant="srcFillGray50"
              ></Input>
            </Column>
            <List
              className="absolute font-urbanist inset-x-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="bg-gray_900_67 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center ml-[14px] md:ml-[9px] sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[44%]">
                  <Img
                    src="images/img_ellipse1018_7.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] mb-[1px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018"
                  />
                  <Column className="flex flex-col justify-start ml-[14px] md:ml-[9px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      How are you?
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium mr-[13px] sm:mr-[6px] md:mr-[8px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  16:00
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Img
                    src="images/img_ellipse1018_8.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] mb-[1px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 One"
                  />
                  <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Kristin Watson
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Wow, this is really epic
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  18:00
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Img
                    src="images/img_ellipse1018_9.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] mb-[1px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Two"
                  />
                  <Column className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Wow, this is really epic
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  08:00
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[51%]">
                  <Img
                    src="images/img_ellipse1018_10.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] mb-[1px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Three"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="font-medium sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      perfect!
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  11:00
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[59%]">
                  <Img
                    src="images/img_ellipse1018_11.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Four"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      I'll be there in 2 mins
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  11:30
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[67%]">
                  <Img
                    src="images/img_ellipse1018_12.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] mb-[1px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Five"
                  />
                  <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="font-medium sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Haha that's terrifying 😂
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  13:00
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[56%]">
                  <Img
                    src="images/img_ellipse1018_13.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Six"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      woohoooo
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  09:30
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[60%]">
                  <Img
                    src="images/img_ellipse1018_14.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] mb-[1px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Seven"
                  />
                  <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Eleanor Pena
                    </Text>
                    <Text
                      className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      omg, this is amazing
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  09:00
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[46%]">
                  <Img
                    src="images/img_ellipse1018_15.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Eight"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-medium sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      aww
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  12:00
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[50%]">
                  <Img
                    src="images/img_ellipse1018_16.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Nine"
                  />
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Haha oh man
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  12:30
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[65%]">
                  <Img
                    src="images/img_ellipse1018_17.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] mb-[1px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Ten"
                  />
                  <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Text
                      className="font-semibold ml-[1px] text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Theresa Webb
                    </Text>
                    <Text
                      className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      just ideas for next time
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  14:00
                </Text>
              </Row>
              <Line className="self-center w-[83%] h-[1.5px] sm:w-[100%] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] md:mx-[22px] mx-[33px] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Img
                    src="images/img_ellipse1018_18.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] mb-[1px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Eleven"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Albertus Marque
                    </Text>
                    <Text
                      className="font-medium sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Hahahaha, Impossible
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  14:00
                </Text>
              </Row>
            </List>
          </Stack>
          <Column className="flex flex-col font-urbanist items-center max-w-[758px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center outline outline-[0.75px] outline-gray_100 sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
                <Column className="flex flex-col ml-[4px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                  <Text
                    className="font-semibold text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-green_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Online
                  </Text>
                </Column>
                <Img
                  src="images/img_search.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="search"
                />
                <Img
                  src="images/img_clock_2.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="clock Three"
                />
                <Img
                  src="images/img_overflowmenu.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="overflowmenu"
                />
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                  <Column className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start p-[10px] sm:p-[5px] md:p-[6px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-gray_900_ab tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body1"
                    >
                      Amateurs think about how much money they can make.
                      <br />
                      Professionals think about how much money they could lose
                    </Text>
                  </Column>
                  <Text
                    className="font-medium md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    4:32 Am
                  </Text>
                </Column>
                <Column className="flex flex-col items-end justify-start ml-[105px] md:ml-[72px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                  <Column className="bg-gray_900 flex flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] my-[4px] not-italic text-white_A700_ab tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body1"
                    >
                      The price of a commodity will never go to zero. When you
                      invest in commodities futures,
                      <br />
                      you are not buying a piece of paper that says you own an
                      intangible of the company that
                      <br />
                      can go bankrupt 😌.{" "}
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark"
                    />
                    <Text
                      className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                      variant="body2"
                    >
                      4:10 Am
                    </Text>
                  </Row>
                </Column>
                <Column className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] sm:w-[100%] w-[56%]">
                  <Text
                    className="font-normal leading-[180.00%] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-gray_900_ab tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    Amateurs think about how much money they can make.
                    <br />
                    Professionals think about how much money they could lose
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                  <Column className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start p-[10px] sm:p-[5px] md:p-[6px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-gray_900_ab tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body1"
                    >
                      {`It's not always easy to do what's not popular, but that's where you make your money.`}
                      <br />
                      Buy stocks that look bad to less careful investors and
                      hang on until their real value is recognized.
                    </Text>
                  </Column>
                  <Text
                    className="font-medium md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    4:26 Am
                  </Text>
                </Column>
                <Column className="flex flex-col items-end justify-start md:ml-[59px] ml-[87px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                  <Column className="bg-gray_900 flex flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] my-[4px] not-italic text-white_A700_ab tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body1"
                    >
                      {`99%+ of traders don't care about Ferraris and yachts. They just want to pay their bills, save a`}
                      <br />
                      little extra money, and sleep well at night. The only way
                      to do that is to bat 70% or more.
                      <br />
                      Anything less, and these goals are nothing more than
                      fantasy.
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark One"
                    />
                    <Text
                      className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                      variant="body2"
                    >
                      5:22 Am
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A700 flex flex-col font-outfit items-center justify-start sm:mt-[100px] md:mt-[129px] mt-[188px] outline outline-[0.75px] outline-gray_100 md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[96%]"
                name="typingfield"
                placeholder="Write message"
                prefix={
                  <Img
                    src="images/img_clock_3.svg"
                    className="ml-[0] mr-[16px] sm:mr-[8px] md:mr-[11px] my-[auto]"
                    alt="clock"
                  />
                }
                suffix={
                  <Img
                    src="images/img_location.svg"
                    className="ml-[35px] mr-[8px] sm:mr-[4px] sm:ml-[18px] md:mr-[5px] md:ml-[24px] my-[auto]"
                    alt="location"
                  />
                }
                shape="RoundedBorder15"
                size="md"
                variant="FillGray50"
              ></Input>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MessagePage;
