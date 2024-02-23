import { SaveAuthSettingsButton } from './SaveAuthSettingsButton';

export interface Props {
  onSaveSettings(): void;
  isLoading: boolean;
}

export function AnonymousAuth({ onSaveSettings, isLoading }: Props) {
  async function onSubmit() {
    onSaveSettings();
  }

  return (
    <SaveAuthSettingsButton onSubmit={onSubmit} isLoading={isLoading} />
  );
}
