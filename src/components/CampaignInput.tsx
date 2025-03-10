import React from "react";

interface CampaignInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CampaignInput: React.FC<CampaignInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`mb-4 ${className || ""}`}>
      <label className="block text-black font-bold mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block text-black border border-gray-300 rounded text-[16px] w-full py-4 px-3 leading-[24px] focus:outline-[#46A758] focus:shadow-outline"
      />
    </div>
  );
};

export default CampaignInput;
