import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder14: "rounded-radius14",
  RoundedBorder10: "rounded-radius10",
  CircleBorder18: "rounded-radius18",
  icbCircleBorder15: "rounded-radius15",
  icbCircleBorder25: "rounded-radius25",
  icbCircleBorder19: "rounded-radius19",
  icbRoundedBorder8: "rounded-radius8",
};
const variants = {
  Outline: "bg-gray_900_26 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_900",
  OutlineGray100: "outline outline-[0.75px] outline-gray_100 text-black_900",
  OutlineWhiteA700:
    "outline outline-[0.75px] outline-white_A700 text-white_A700",
  FillGray900: "bg-gray_900 text-white_A700",
  Outline_1: "bg-gray_900 text-white_A700",
  FillGray100: "bg-gray_100 text-gray_500",
  FillGreen600: "bg-green_600 text-white_A700",
  OutlineGray900: "outline outline-[0.5px] outline-gray_900 text-gray_900",
  FillGray50: "bg-gray_50 text-black_900",
  FillBlack900: "bg-black_900 text-white_A700",
  icbOutline: "bg-gray_900_26",
  icbOutlineGray5003f: "bg-white_A700 shadow-bs",
  icbFillGray100: "bg-gray_100",
  icbFillGray50: "bg-gray_50",
  icbOutlineGray100: "outline outline-[0.75px] outline-gray_100",
  icbFillWhiteA700: "bg-white_A700",
  icbFillGray90067: "bg-gray_900_67",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[7px]",
  md: "p-[12px] sm:p-[6px] md:p-[8px]",
  lg: "md:p-[10px] p-[15px] sm:p-[7px]",
  xl: "md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px]",
  smIcn: "sm:p-[3px] md:p-[4px] p-[6px]",
  mdIcn: "p-[10px] sm:p-[5px] md:p-[6px]",
  lgIcn: "p-[13px] sm:p-[6px] md:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder14",
    "RoundedBorder10",
    "CircleBorder18",
    "icbCircleBorder15",
    "icbCircleBorder25",
    "icbCircleBorder19",
    "icbRoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "Outline",
    "FillWhiteA700",
    "OutlineGray100",
    "OutlineWhiteA700",
    "FillGray900",
    "Outline_1",
    "FillGray100",
    "FillGreen600",
    "OutlineGray900",
    "FillGray50",
    "FillBlack900",
    "icbOutline",
    "icbOutlineGray5003f",
    "icbFillGray100",
    "icbFillGray50",
    "icbOutlineGray100",
    "icbFillWhiteA700",
    "icbFillGray90067",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
