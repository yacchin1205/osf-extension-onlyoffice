import { FileActionExtension, OnlyOfficeConfig } from './types';

const SUPPORTED_EXTENSIONS = /\.(docx?|xlsx?|pptx?|odt|ods|odp)$/i;

/**
 * Factory function for Edit with OnlyOffice action extension.
 * Adds "Edit with OnlyOffice" option to file context menu.
 */
export function editWithOnlyOfficeExtensionFactory(config: OnlyOfficeConfig): FileActionExtension[] {
  return [
    {
      id: 'edit-onlyoffice',
      label: 'Edit with OnlyOffice',
      icon: 'fas fa-edit',
      command: (ctx) => {
        const editorUrl = `${config.editorUrl}?fileId=${ctx.target.id}`;
        window.open(editorUrl, '_blank');
      },
      position: 'start',
      visible: (ctx) =>
        ctx.target.kind === 'file' && ctx.canWrite && SUPPORTED_EXTENSIONS.test(ctx.target.name),
    },
  ];
}
