import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray400: "bg-transparent border border-gray_400 border-solid",
};
const shapes = { RoundedBorder8: "rounded-radius8" };
const sizes = {
  sm: "sm:pb-[18px] md:pb-[24px] pb-[35px] sm:pt-[12px] md:pt-[15px] pt-[23px] md:px-[15px] sm:px-[15px] px-[23px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["OutlineGray400"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder8",
  variant: "OutlineGray400",
  size: "sm",
};
export { TextArea };
