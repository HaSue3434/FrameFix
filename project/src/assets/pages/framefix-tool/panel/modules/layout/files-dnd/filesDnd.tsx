import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as PageFile } from "../../../edit/layer-module-edit/page-file-icon.svg";
import { ReactComponent as Folder } from "../../../edit/layer-module-edit/folder-icon.svg";
import styles from "../../module-styles.module.css";

type FileItem = {
  type: 'file' | 'folder';
  id: string;
  name?: string;
  children?: FileItem[];
};

type FilesDndProps = {
  items: FileItem[];
  onItemNameChange: (id: string, newName: string) => void;
  onAddChild: (parentId: string, newItem: FileItem) => void;
};

const FilesDnd: React.FC<FilesDndProps> = ({ items, onItemNameChange, onAddChild }) => {
  return (
    <div className={`${styles.List}`}>
      {items.map(item => (
        <FileItemComponent
          key={item.id}
          item={item}
          onItemNameChange={onItemNameChange}
          onAddChild={onAddChild}
        />
      ))}
    </div>
  );
};

const FileItemComponent: React.FC<{ item: FileItem; onItemNameChange: (id: string, newName: string) => void; onAddChild: (parentId: string, newItem: FileItem) => void }> = ({ item, onItemNameChange, onAddChild }) => {
  const [value, setValue] = useState(item.name || (item.type === 'file' ? 'New File' : 'New Folder'));
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    const trimmedValue = value.trim();
    if (trimmedValue === '') {
      const defaultValue = item.type === 'file' ? 'New File' : 'New Folder';
      setValue(defaultValue);
      onItemNameChange(item.id, defaultValue);
    } else if (value !== item.name) {
      onItemNameChange(item.id, value);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.CommonFile} ${item.type === 'file' ? styles.page : styles.folder}`}>
        <div className={styles.pageFileContain}>
            <div className={`${styles.icon}`}>{item.type === 'file' ? <PageFile /> : <Folder />}</div>
            <div className={`${styles.name}`}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={value}
                  value={value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            </div>
        </div>
    </div>
  );
};

export default FilesDnd;
