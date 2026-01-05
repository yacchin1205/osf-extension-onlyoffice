import { FileActionExtension, OnlyOfficeConfig } from './types';

/**
 * Factory function for Create File toolbar extension.
 * Adds a "Create File" button that opens OnlyOffice to create a new document.
 */
export function createFileExtensionFactory(config: OnlyOfficeConfig): FileActionExtension[] {
  return [
    {
      id: 'create-file-onlyoffice',
      label: 'Create File',
      icon: 'fas fa-file-circle-plus',
      command: (ctx) => {
        const params = new URLSearchParams({
          new: 'true',
          path: ctx.target.path!,
        });
        window.open(`${config.editorUrl}?${params}`, '_blank');
      },
      position: 'end',
      visible: (ctx) => ctx.location === 'file-list' && ctx.target.kind === 'folder' && !ctx.isViewOnly && ctx.canWrite,
    },
  ];
}
