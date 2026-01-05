# @nii/osf-extension-onlyoffice

OnlyOffice integration extension for angular-osf.

## Features

- **Edit with OnlyOffice**: Context menu option to edit files in OnlyOffice editor
- **Create File**: Toolbar button to create new documents in OnlyOffice

## Installation

```bash
npm install @nii/osf-extension-onlyoffice
```

## Configuration

In angular-osf's `extensions.config.ts`:

```typescript
export const extensionConfig: ExtensionConfig[] = [
  // Edit with OnlyOffice - adds menu item to file context menu
  {
    load: () => import('@nii/osf-extension-onlyoffice'),
    factory: 'editWithOnlyOfficeExtensionFactory',
    enabled: true,
    config: { editorUrl: 'https://onlyoffice.example.com/editor' },
  },
  // Create File - adds toolbar button
  {
    load: () => import('@nii/osf-extension-onlyoffice'),
    factory: 'createFileExtensionFactory',
    enabled: true,
    config: { editorUrl: 'https://onlyoffice.example.com/editor' },
  },
];
```

## Exported Factories

| Factory | Description | Visibility |
|---------|-------------|------------|
| `editWithOnlyOfficeExtensionFactory` | "Edit with OnlyOffice" menu item | Files with supported extensions (docx, xlsx, pptx, odt, ods, odp) when user has write access |
| `createFileExtensionFactory` | "Create File" toolbar button | Folders in file-list view when user has write access |

## Config

```typescript
interface OnlyOfficeConfig {
  editorUrl: string;
}
```

The `config` is passed from `extensions.config.ts` to the factory function.
