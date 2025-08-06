import React from 'react';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ToggleSwitch from '../switchButton/Switch-button';

interface WorkflowStepCardProps {
  stepNumber: number | string;
  iconSrc: string;
  frequencyText: string;
  enabled: boolean;
  onToggle: () => void;
  title: string;
}

const ScheduledLeft: React.FC<WorkflowStepCardProps> = ({
  stepNumber,
  iconSrc,
  frequencyText,
  enabled,
  onToggle,
  title,
}) => {
  return (
    <div className="border border-[#D5D6E2] rounded-lg shadow-sm bg-[#FCFCFD]">
      <h3 className="p-4 text-[#22222F] font-semibold text-sm border-b">
        {title}
      </h3>
      <div className="flex items-center justify-between px-4 py-3 bg-[#FFFFFF] rounded-b-lg">
        <div className="flex items-center gap-3">
          <span className="text-sm text-[#8588AB] font-semibold">
            {stepNumber}
          </span>
          <div className="border p-1 rounded">
            <Image
              src={iconSrc}
              width={16}
              height={16}
              alt=""
            />
          </div>
          <span className="text-sm text-[#22222F] font-semibold">
            {frequencyText}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ToggleSwitch
            enabled={enabled}
            onToggle={onToggle}
          />
          <BsThreeDotsVertical className="text-[#8588AB]" />
        </div>
      </div>
    </div>
  );
};

export default ScheduledLeft;
