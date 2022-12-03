import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, List, Line } from "components";

const MarketDetailViewBidHistoryModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[30%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] shadow-bs4 w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-center max-w-[420px] mx-[auto] sm:p-[15px] md:p-[22px] p-[33px] sm:px-[15px] shadow-bs4 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:px-[0] w-[100%]">
              <Text
                className="flex-grow mt-[2px] text-black_900 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                as="h3"
                variant="h3"
              >
                Open Bid History
              </Text>
              <Img
                src="images/img_close_24X24.svg"
                className="common-pointer flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <List
              className="font-urbanist sm:mb-[32px] md:mb-[41px] mb-[61px] min-h-[auto] sm:mt-[18px] md:mt-[23px] mt-[34px] pr-[3px] w-[100%]"
              orientation="vertical"
            >
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[68%]">
                  <Img
                    src="images/img_ellipse1018_19.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Jerremy K.
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    4,32 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Img
                    src="images/img_ellipse1018_20.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 One"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Anthony
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort One"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    8.32 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[62%]">
                  <Img
                    src="images/img_ellipse1018_21.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Two"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Zir3xa
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort Two"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    7.23 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Img
                    src="images/img_ellipse1018_22.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Three"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Matic M.
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort Three"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    7.22 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[67%]">
                  <Img
                    src="images/img_ellipse1018_23.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Four"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by P. Blinders
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort Four"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    7.10 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Img
                    src="images/img_ellipse1018_24.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Five"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Merquey
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort Five"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    7.09 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[62%]">
                  <Img
                    src="images/img_ellipse1018_25.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Six"
                  />
                  <Column className="flex flex-col items-center justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Tanaka
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort Six"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    6.56 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[62%]">
                  <Img
                    src="images/img_ellipse1018_26.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Seven"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Hitomi
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort Seven"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    6.42 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[66%]">
                  <Img
                    src="images/img_ellipse1018_27.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Eight"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Kevinjaya
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort Eight"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    5.43 ETH
                  </Text>
                </Row>
              </Row>
              <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[65%]">
                  <Img
                    src="images/img_ellipse1018_17.png"
                    className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                    alt="Ellipse1018 Nine"
                  />
                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Bid placed by Meliodas
                    </Text>
                    <Text
                      className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      May 13, 2022 at 06:21 AM
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="sort Nine"
                  />
                  <Text
                    className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    4.44 ETH
                  </Text>
                </Row>
              </Row>
            </List>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default MarketDetailViewBidHistoryModal;
