import { useState, forwardRef } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { InputProps } from "../types/components/input";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      value,
      name,
      id,
      type,
      additionalClasses,
      placeholder,
      onChange,
      additionalAttributes,
      textarea,
      password,
      pattern,
      rows,
      readOnly,
      cols,
      disabled,
      required,
      minLength,
      maxLength,
      autoComplete,
      options,
      multiple,
      accept,
      optionsKey,
    },
    ref
  ) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
      <div className="flex w-full flex-col gap-y-1">
        <label className="text-left font-light capitalize text-black text-[14px]">
          {label}
        </label>
        {!textarea && !options && !optionsKey && (
          <div className="relative">
            <input
              name={name}
              id={id}
              value={value}
              ref={ref}
              className={`${
                additionalClasses
                  ? additionalClasses + "w-full text-base"
                  : "w-full rounded-md focus:border-lack placeholder-gray-50 border border-gray-100 bg-transparent px-4 py-[15px] text-base font-light focus:ring-1 ring-black outline-none"
              }`}
              type={!visible ? type : "text"}
              required={required}
              readOnly={readOnly}
              minLength={minLength}
              maxLength={maxLength}
              autoComplete={autoComplete}
              pattern={pattern}
              placeholder={placeholder}
              disabled={disabled}
              multiple={multiple}
              accept={accept}
              onChange={onChange}
              {...additionalAttributes}
            />
            {password && (
              <i className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center text-black">
                <button
                  type="button"
                  onClick={() => setVisible(!visible)}
                  aria-label={visible ? "Hide password" : "Show password"}
                >
                  <span className="sr-only">
                    {visible ? "Hide password" : "Show password"}
                  </span>
                  {visible ? <LuEye /> : <LuEyeOff />}
                </button>
              </i>
            )}
          </div>
        )}
        {textarea && (
          <textarea
            className="w-full outline-none focus:ring-1 ring-black rounded-md border border-gray-100 bg-transparent px-4 py-4 text-[14px] font-light"
            rows={rows}
            cols={cols}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
          ></textarea>
        )}
        {options && (
          <select
            name={name}
            id={id}
            value={value}
            ref={ref as React.Ref<HTMLSelectElement>}
            className={`${
              additionalClasses
                ? additionalClasses + " w-full text-base"
                : "w-full rounded-md border border-gray-100 bg-transparent px-4 py-4 text-base font-light  focus:ring-1 ring-black outline-none"
            }`}
            required={required}
            disabled={disabled}
            onChange={onChange}
            {...additionalAttributes}
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map(
              (
                option: string,
                index: number // Add typing here
              ) => (
                <option key={index} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
        )}

        {optionsKey && (
          <select
            name={name}
            id={id}
            value={value}
            ref={ref as React.Ref<HTMLSelectElement>}
            className={`${
              additionalClasses
                ? additionalClasses + " w-full text-base"
                : "w-full rounded-md border border-gray-100 bg-transparent px-4 py-4 text-base font-light  focus:ring-1 ring-black outline-none"
            }`}
            required={required}
            disabled={disabled}
            onChange={onChange}
            {...additionalAttributes}
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {optionsKey.map(
              (
                option: { key: string; value: string },
                index: number // Add typing here
              ) => (
                <option key={index} value={option.key}>
                  {option.value}
                </option>
              )
            )}
          </select>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
