import React from "react";
import { useTranslation } from "react-i18next";
import { VscGoToFile } from "react-icons/vsc";
import { I18nKey } from "#/i18n/declaration";
import { ActionTooltip } from "#/components/shared/action-tooltip";
import { cn } from "#/utils/utils";

interface JumpToFileButtonProps {
  filePath: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export function JumpToFileButton({
  filePath,
  onClick,
  isDisabled = false,
}: JumpToFileButtonProps) {
  const { t } = useTranslation();

  return (
    <ActionTooltip
      content={t(I18nKey.CHAT$JUMP_TO_FILE_TOOLTIP, { path: filePath })}
      side="top"
    >
      <button
        data-testid="jump-to-file-button"
        onClick={onClick}
        disabled={isDisabled}
        className={cn(
          "absolute top-2 right-12 p-2 rounded-lg",
          "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700",
          "transition-colors duration-200",
          isDisabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <VscGoToFile size={16} />
      </button>
    </ActionTooltip>
  );
}
