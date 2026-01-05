/**
 * @nii/osf-extension-onlyoffice
 *
 * OnlyOffice integration extension for angular-osf.
 *
 * Provides:
 * - Create File: Toolbar button to create new DOCX/XLSX/PPTX files
 * - Edit with OnlyOffice: Context menu option to edit files in OnlyOffice
 *
 * Usage in angular-osf's extensions.config.ts:
 *
 * ```typescript
 * export const extensionConfig = {
 *   fileMenu: [
 *     {
 *       load: () => import('@nii/osf-extension-onlyoffice'),
 *       factory: 'editWithOnlyOfficeExtensionFactory',
 *       enabled: true,
 *     },
 *   ],
 *   toolbar: [
 *     {
 *       load: () => import('@nii/osf-extension-onlyoffice'),
 *       factory: 'createFileExtensionFactory',
 *       enabled: true,
 *     },
 *   ],
 * };
 * ```
 */

export * from './types';
export * from './create-file';
export * from './edit-with-onlyoffice';
