import React from "react";

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
  label?: string;
  labelPosition?: "left" | "right";
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  enabled,
  onToggle,
  label,
  labelPosition = "right",
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {label && labelPosition === "left" && (
        <span className="text-sm text-gray-700">{label}</span>
      )}

      <div
        onClick={onToggle}
        className={`cursor-pointer w-12 h-7 rounded-full flex items-center transition duration-300 ${enabled
            ? "bg-[#217AFC] border-2 border-[#0D5AE8] justify-end shadow-[0_0_0_3px_rgba(33,122,252,0.3)]"
            : "bg-transparent border-2 border-[#D5D6E2] justify-start -p-1"
          }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full flex items-center justify-center transition duration-300 ${enabled
              ? "border-y-2 border-b-1 border-t-1 border-l-2 border-r-1 border-[#0D5AE8]"
              : "border-y-2 border-b-1 border-t-1 border-r-2 border-l-1 border-[#D5D6E2]"
            }`}
        >
          {enabled && (
            <div className="w-2 h-2 bg-[#217AFC] rounded-full"></div>
          )}
        </div>
      </div>

      {label && labelPosition === "right" && (
        <span className="text-sm text-gray-700">{label}</span>
      )}
    </div>
  );
};

export default ToggleSwitch;
