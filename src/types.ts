/**
 * Type definitions for angular-osf extension integration.
 * These mirror the types from angular-osf's file-action-extensions.token.ts
 */

export interface FileActionTarget {
  id: string;
  name: string;
  kind: 'file' | 'folder';
  path?: string;
  node?: string;
  provider?: string;
  links: {
    html: string;
    download: string;
    upload?: string;
  };
}

export interface FileActionContext {
  target: FileActionTarget;
  location: 'file-list' | 'file-detail';
  isViewOnly: boolean;
  canWrite: boolean;
}

export interface FileActionExtension {
  id: string;
  label: string;
  icon: string;
  command: (ctx: FileActionContext) => void;
  parentId?: string;
  position?: 'start' | 'end' | number;
  visible?: (ctx: FileActionContext) => boolean;
  disabled?: (ctx: FileActionContext) => boolean;
}

export interface OnlyOfficeConfig {
  editorUrl: string;
}
