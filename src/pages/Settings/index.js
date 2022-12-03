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
  TextArea,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SettingsPage = () => {
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
                      <Row className="bg-gray_900_5f flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-center max-w-[266px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] mx-[auto] p-[10px] sm:p-[5px] md:p-[6px] sm:px-[15px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_settings_1.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
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
                <Stack className="font-urbanist h-[258px] max-w-[234px] sm:ml-[18px] md:ml-[23px] sm:mt-[248px] md:mt-[321px] mt-[467px] mx-[auto] sm:px-[15px] relative w-[100%]">
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
            <Column className="flex flex-col font-urbanist items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="text-black_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      General Settings
                    </Text>
                    <Text
                      className="font-medium mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Update your photo and personal details here.
                    </Text>
                  </Column>
                  <Text
                    className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Every changes automaticly saved
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[48%] text-[14px] text-center tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillGray900"
                  >
                    Preview
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[48%] text-[14px] text-center tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillGray100"
                  >
                    Cancel
                  </Button>
                </Row>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                  <Column className="bg-white_A700 flex flex-col justify-end sm:mx-[0] outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[96%]">
                    <Text
                      className="font-medium sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[2px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Personal Information
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]" />
                    <Column className="flex flex-col items-center justify-start md:ml-[16px] ml-[24px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] pt-[2px] sm:px-[0] sm:w-[100%] w-[94%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                            <Text
                              className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-black_900 text-[16px] font-urbanist">
                                First Name
                              </span>
                              <span className="text-red_600 text-[16px] font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] sm:mx-[0] sm:w-[100%] w-[93%]"
                              name="SearchInput One"
                              placeholder="Kevin"
                              prefix={
                                <Img
                                  src="images/img_profilecircle.svg"
                                  className="ml-[2px] mr-[12px] sm:mr-[6px] md:mr-[8px] my-[auto]"
                                  alt="profile-circle"
                                />
                              }
                              shape="RoundedBorder8"
                              size="sm"
                              variant="OutlineGray400"
                            ></Input>
                          </Column>
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <Text
                              className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-black_900 text-[16px] font-urbanist">
                                Last Name
                              </span>
                              <span className="text-red_600 text-[16px] font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                              name="SearchInput Two"
                              placeholder="Cranel"
                              shape="RoundedBorder8"
                              size="sm"
                              variant="OutlineGray400"
                            ></Input>
                          </Column>
                        </Row>
                        <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            <span className="text-black_900 text-[16px] font-urbanist">
                              Email Address
                            </span>
                            <span className="text-red_600 text-[16px] font-urbanist">
                              *
                            </span>
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                            type="email"
                            name="email"
                            placeholder="hello.kevincranel@workmail.com"
                            prefix={
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="ml-[2px] mr-[12px] sm:mr-[6px] md:mr-[8px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="ml-[35px] mr-[4px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder8"
                            size="sm"
                            variant="OutlineGray400"
                          ></Input>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Username
                          </Text>
                          <Input
                            className="p-[0] w-[100%]"
                            wrapClassName="flex md:mt-[9px] md:pb-[8px] md:pl-[11px] md:pr-[9px] md:pt-[9px] mt-[14px] pb-[13px] pl-[16px] pr-[14px] pt-[14px] sm:mt-[7px] sm:pb-[6px] sm:pl-[15px] sm:pr-[7px] sm:pt-[7px] w-[100%]"
                            name="searchinput Three"
                            placeholder=""
                            prefix={
                              <Img
                                src="images/img_cut.svg"
                                className="mr-[35px] sm:mr-[18px] md:mr-[24px] my-[auto]"
                                alt="cut"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="OutlineGray400_1"
                          ></Input>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Biography
                          </Text>
                          <TextArea
                            className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            name="searchinput Four"
                            placeholder="Dedicated to create amazing for art exhibition information please check link below:"
                          ></TextArea>
                        </Column>
                      </Column>
                      <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                        <Text
                          className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Website
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                          name="weburl"
                          placeholder="weloveart.com/kevincranel"
                          prefix={
                            <Img
                              src="images/img_globe.svg"
                              className="ml-[2px] mr-[12px] sm:mr-[6px] md:mr-[8px] my-[auto]"
                              alt="globe"
                            />
                          }
                          shape="RoundedBorder8"
                          size="sm"
                          variant="OutlineGray400"
                        ></Input>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-end sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[96%]">
                    <Text
                      className="font-medium sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[4px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Notification Settings
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                    <List
                      className="min-h-[auto] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:mt-[17px] md:mt-[22px] mt-[32px] pb-[100px] sm:pb-[53px] md:pb-[68px] sm:w-[100%] w-[94%]"
                      orientation="vertical"
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly py-[2px] w-[100%]">
                        <Column className="flex flex-col mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Item Sold
                          </Text>
                          <Text
                            className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            When someone purchased one of your items
                          </Text>
                        </Column>
                        <Img
                          src="images/img_camera_24X40.svg"
                          className="max-w-[100%] w-[7%]"
                          alt="camera"
                        />
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly py-[2px] w-[100%]">
                        <Column className="flex flex-col mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Successful Purchase
                          </Text>
                          <Text
                            className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            When you successfully buy an item
                          </Text>
                        </Column>
                        <Img
                          src="images/img_camera_24X40.svg"
                          className="max-w-[100%] w-[7%]"
                          alt="camera One"
                        />
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly py-[4px] w-[100%]">
                        <Column className="flex flex-col mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Auction Expirates
                          </Text>
                          <Text
                            className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            When a timed auction you created ends
                          </Text>
                        </Column>
                        <Img
                          src="images/img_camera.svg"
                          className="max-w-[100%] w-[7%]"
                          alt="camera Two"
                        />
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly py-[4px] w-[100%]">
                        <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Owned Item Updates
                          </Text>
                          <Text
                            className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            When a significant update occurs for one of the
                            items you have purchased on Enefthy
                          </Text>
                        </Column>
                        <Img
                          src="images/img_camera.svg"
                          className="max-w-[100%] w-[7%]"
                          alt="camera Three"
                        />
                      </Row>
                    </List>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                  <Column className="bg-white_A700 flex flex-col justify-end outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                    <Text
                      className="font-medium sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[2px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Your Photo
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]" />
                    <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                        <Img
                          src="images/img_ellipse1015.png"
                          className="sm:h-[35px] md:h-[45px] h-[64px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[64px]"
                          alt="Ellipse1023"
                        />
                        <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Edit your photo
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-normal mb-[1px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body1"
                            >
                              Delete
                            </Text>
                            <Text
                              className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[1px] not-italic text-red_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body1"
                            >
                              Update
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] outline-[0.75px] outline-dashed outline-gray_901 p-[14px] sm:p-[7px] md:p-[9px] rounded-radius15 w-[100%]">
                        <Button
                          className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                          shape="icbCircleBorder25"
                          size="lgIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_cloud.svg"
                            className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                            alt="cloud"
                          />
                        </Button>
                        <Column className="flex flex-col items-center justify-start mb-[3px] md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Text
                            className="font-medium text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Click to upload or drag and drop
                          </Text>
                          <Text
                            className="font-medium leading-[130.00%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] text-center text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[41%]"
                            variant="body2"
                          >
                            PNG, JPG or Gif
                            <br />
                            Max 20Mb
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-end sm:mt-[15px] md:mt-[20px] mt-[30px] outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                    <Text
                      className="font-medium sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[2px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Social Linked
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]" />
                    <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:pb-[3px] md:pb-[4px] pb-[7px] sm:px-[0] sm:w-[100%] w-[86%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Img
                          src="images/img_signal.svg"
                          className="max-w-[100%] w-[30%]"
                          alt="signal"
                        />
                        <Button
                          className="cursor-pointer font-medium min-w-[35%] text-[14px] text-center tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillGreen600"
                        >
                          Connected
                        </Button>
                      </Row>
                      <Column className="flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                        <Text
                          className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Edit your photo
                        </Text>
                        <Text
                          className="font-normal leading-[180.00%] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          variant="body1"
                        >
                          Use Google to sign in to your account.
                          <br />
                          Click here to learn more.
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingsPage;
