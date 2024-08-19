import React, { useEffect, useRef, useState } from "react";
import styles from "../module-styles.module.css";
import { ReactComponent as Add } from "../../edit/layer-module-edit/add.svg";
import FilesDnd from "./files-dnd/filesDnd";
import LayerDnd from "./layer-dnd/layerDnd";

type FileItem = {
  type: 'file' | 'folder';
  id: string;
  name?: string;
  children?: FileItem[];
};

const LayerModule: React.FC = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [items, setItems] = useState<FileItem[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenAdd(false);
    }
  };

  const addNewFile = (type: 'file' | 'folder') => {
    const newItem: FileItem = {
      type,
      id: new Date().toISOString(),
    };
    setItems([...items, newItem]);
    setOpenAdd(false);
  };

  const handleItemNameChange = (id: string, newName: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, name: newName } : item
    ));
  };

  const handleAddChild = (parentId: string, newItem: FileItem) => {
    const addChildRecursively = (items: FileItem[], parentId: string, newItem: FileItem): FileItem[] => {
      return items.map(item => {
        if (item.id === parentId) {
          return {
            ...item,
            children: item.children ? [...item.children, newItem] : [newItem]
          };
        } else if (item.children) {
          return {
            ...item,
            children: addChildRecursively(item.children, parentId, newItem)
          };
        } else {
          return item;
        }
      });
    };

    setItems(addChildRecursively(items, parentId, newItem));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`${styles.pageFiles}`}>
        <div className={styles.title}>
          <h4>Page</h4>
          <div className={styles.addFile} onClick={handleOpenAdd} ref={dropdownRef}>
            <div className={styles.addBtn}>
              <Add />
            </div>
            {openAdd && (
              <div className={styles.openFileAddOptions}>
                <ul className={styles.wrap}>
                  <li className={`${styles.option} ${styles.newPage}`} onClick={() => addNewFile('file')}>New File</li>
                  <li className={`${styles.option} ${styles.newFolder}`} onClick={() => addNewFile('folder')}>New Folder</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <FilesDnd items={items} onItemNameChange={handleItemNameChange} onAddChild={handleAddChild} />
      </div>

      <div className={styles.layers}>
        <div className={styles.title}><h4>Layers</h4></div>
        <div className={styles.layerEditing}>
          <ul className={`${styles.layerList}`}>
            <LayerDnd />
          </ul>
        </div>
      </div>
    </>
  );
};

export default LayerModule;
