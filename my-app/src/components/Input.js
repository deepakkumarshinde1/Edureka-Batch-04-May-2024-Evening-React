import { memo } from "react";

const Input = (props) => {
  let { label, value, name, placeholder, inputChange, type, error } = props;
  return (
    <>
      <div className="mb-2">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          value={value}
          name={name}
          type={type}
          id={name}
          placeholder={placeholder}
          onChange={inputChange}
          className="form-control"
        />
      </div>
      <div>
        <span className="text-danger">{error[name]}</span>
      </div>
    </>
  );
};

export default memo(Input);
