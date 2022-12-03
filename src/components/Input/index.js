import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  srcFillGray50: "bg-gray_50",
  srcOutlineGray300_1: "border border-gray_300 border-solid",
  OutlineGray400: "border border-gray_400 border-solid",
  FillGray50: "bg-gray_50",
  OutlineGray400_1: "border border-gray_400 border-solid",
};
const shapes = {
  srcRoundedBorder15: "rounded-radius15",
  srcRoundedBorder8: "rounded-radius8",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder15: "rounded-radius15",
};
const sizes = {
  smSrc: "px-[11px] sm:px-[5px] md:px-[7px] py-[12px] sm:py-[6px] md:py-[8px]",
  mdSrc:
    "md:pb-[11px] pb-[17px] sm:pb-[9px] sm:pt-[11px] md:pt-[14px] pt-[21px] md:px-[11px] sm:px-[15px] px-[17px]",
  sm: "md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px]",
  md: "pb-[14px] sm:pb-[7px] md:pb-[9px] sm:pt-[10px] md:pt-[13px] pt-[19px] px-[14px] sm:px-[7px] md:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder15",
    "srcRoundedBorder8",
    "RoundedBorder8",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineGray300",
    "srcFillGray50",
    "srcOutlineGray300_1",
    "OutlineGray400",
    "FillGray50",
    "OutlineGray400_1",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "srcRoundedBorder15",
  variant: "srcOutlineGray300",
  size: "",
};

export { Input };
