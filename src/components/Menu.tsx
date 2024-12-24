import { Fragment, isValidElement, useState } from "react";
import {
  ArrowDownIcon, ArrowUpIcon, DownloadIcon, FolderAddIcon,
  FolderIcon, GridIcon, ListIcon, SearchIcon,
  SettingIcon, SortVerticalArrow,
  TrashIcon, UploadIcon
} from "./icons";
import { FileModel } from "../models/file.model"
import { FolderModel } from "../models/folder.model"
import { Action } from "../models/action.model";
import { Sorter } from "../models/sorter.model";
import { Right } from "../models/right.model";
import { SoMediaManagerAction } from "../enums/actions"
import { FloatContext } from "./FloatContext"

interface MenuProps {
  actions: Action[]
  sorters: Sorter[]
  right?: Right
  handleActions: (
    action: SoMediaManagerAction | string,
    item?: FileModel | FolderModel | null,
    sorter?: SoMediaManagerAction.SORT_NAME | SoMediaManagerAction.SORT_SIZE | SoMediaManagerAction.SORT_DATE | string | null
  ) => void
  filesSelected: FileModel[]
  folderChain: FolderModel[]
  view: "grid" | "list"
  sort: SoMediaManagerAction.SORT_NAME | SoMediaManagerAction.SORT_SIZE | SoMediaManagerAction.SORT_DATE | string
  sortDirection: SoMediaManagerAction.SORT_DIRECTION_ASC | SoMediaManagerAction.SORT_DIRECTION_DESC
  setSearch: Function
}

export const Menu: React.FC<MenuProps> = ({
  actions,
  sorters,
  right,
  handleActions,
  filesSelected,
  folderChain,
  view,
  sort,
  sortDirection,
  setSearch
}) => {
  /*** CONTEXT ***/
  const [contextSetting, setContextSetting] = useState<boolean>(false)
  const [contextSort, setContextSort] = useState<boolean>(false)
  const [contextX, setContextX] = useState<number>(0)
  const [contextY, setContextY] = useState<number>(0)

  const setContext = (context: "setting" | "sort", e: React.MouseEvent | null = null) => {
    switch (context) {
      case "setting":
        setContextSetting(true)
        break;
      case "sort":
        setContextSort(true)
        break;
    }
    if ((!contextSetting || !contextSort) && e) {
      setContextX(e.clientX)
      setContextY(e.clientY)
    } else {
      setContextX(0)
      setContextY(0)
    }
  }

  const directionArrow = (sortSelected: SoMediaManagerAction.SORT_NAME | SoMediaManagerAction.SORT_SIZE | SoMediaManagerAction.SORT_DATE | string) => {
    return sortDirection === SoMediaManagerAction.SORT_DIRECTION_DESC &&
      sort === sortSelected ?
      (<ArrowUpIcon />) : (<ArrowDownIcon />)
  }

  const buttonDisabled = (action: Action): boolean => {
    const selectRequired = action.selectionRequired ? (filesSelected && filesSelected.length > 0) : true
    const selectType = action.selectionType ?
      (action.selectionType === "one" ? (filesSelected && filesSelected.length === 1) : (filesSelected && filesSelected.length >= 1))
      : true
    const selectFile = action.selectionFileType ?
      (action.selectionFileType === "file" ? !(filesSelected && filesSelected.find(f => f.isDir)) : !(filesSelected && filesSelected.find(f => !f.isDir)))
      : true

    return !(selectRequired && selectType && selectFile)
  }

  return (
    <div className="so-mm-menu">
      <div className="so-mm-top-nav">
        <div className="so-mm-ariane">
          <FolderIcon />&nbsp;
          <ol>
            {folderChain.map((folder, index) =>
              <Fragment key={index}>
                {index > 0 && <li>/</li>}
                <li
                  id={folder.id.toString()}
                  className={"so-mm-folder-path " + (folderChain.length - 1 == index ? "so-mm-last-path" : "")}
                  onClick={folderChain.length - 1 !== index ? () => handleActions(SoMediaManagerAction.OPEN_FOLDER, folder) : undefined}
                >
                  {folderChain.length - 1 !== index ? (<button>{folder.name}</button>) : folder.name}
                </li>
              </Fragment>
            )}
          </ol>
        </div>
        <div className="so-mm-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              onInput={(e) => setSearch(e.currentTarget.value)}
              placeholder="Rechercher"
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      <div className="so-mm-action-nav">
        {((right && right.canUpload) || !right) &&
          <button
            onClick={() => handleActions(SoMediaManagerAction.UPLOAD_FILE)}
          >
            <UploadIcon />
          </button>
        }
        {((right && right.canCreate) || !right) &&
          <button
            onClick={() => handleActions(SoMediaManagerAction.CREATE_FOLDER)}
          >
            <FolderAddIcon />
          </button>
        }
        {((right && (right.canUpload || right.canCreate)) || !right) &&
          <span className="so-mm-separator-vertical"></span>
        }
        {actions?.filter(a => a.position === "header").map((action, index) => (
          <button
            key={index}
            onClick={() => handleActions(action.action)}
            disabled={buttonDisabled(action)}
            className="button-icon"
          >
            {action.icon && isValidElement(action.icon) && action.icon}
            {action.label}
          </button>
        ))}
        {actions?.filter(a => a.position === "header").length > 0 &&
          <span className="so-mm-separator-vertical"></span>
        }
        <button
          className={view === "list" ? "so-mm-button-selected" : ""}
          onClick={() => handleActions(SoMediaManagerAction.LIST_VIEW)}
        >
          <ListIcon />
        </button>
        <button
          className={view === "grid" ? "so-mm-button-selected" : ""}
          onClick={() => handleActions(SoMediaManagerAction.GRID_VIEW)}
        >
          <GridIcon />
        </button>
        <span className="so-mm-separator-vertical"></span>
        <button onClick={(e) => setContext("setting", e)}>
          <SettingIcon />
        </button>
        {contextSetting &&
          <FloatContext
            className="so-mm-sort-float"
            x={contextX}
            y={contextY}
            open={contextSetting}
            close={() => setContextSetting(false)}
          >
            <ul>
              <li>
                {((right && right.canDelete) || !right) &&
                  <button
                    onClick={() => handleActions(SoMediaManagerAction.DELETE_SELECTION)}
                    disabled={!filesSelected || filesSelected.length === 0}
                  >
                    <TrashIcon />
                    Supprimer la sélection
                  </button>
                }
              </li>
              <li>
                {((right && right.canDownload) || !right) &&
                  <button
                    onClick={() => handleActions(SoMediaManagerAction.DOWNLOAD_SELECTION)}
                    disabled={!filesSelected || filesSelected.length === 0}
                  >
                    <DownloadIcon />
                    Télécharger la sélection
                  </button>
                }
              </li>
              {actions?.filter(a => a.position === "setting").map((action, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleActions(action.action)}
                    disabled={buttonDisabled(action)}
                    className="button-icon"
                  >
                    {action.icon && isValidElement(action.icon) && action.icon}
                    {action.label}
                  </button>
                </li>
              ))}
            </ul>
          </FloatContext>
        }
        <button onClick={(e) => setContext("sort", e)}>
          <SortVerticalArrow />
        </button>
        {contextSort &&
          <FloatContext
            className="so-mm-sort-float"
            x={contextX}
            y={contextY}
            open={contextSort}
            close={() => setContextSort(false)}
          >
            <ul>
              {sorters.sort((a, b) => a.position - b.position).map((sorter, index) =>
                <li key={index}>
                  <button
                    className={sort === sorter.action ? "so-mm-button-selected" : ""}
                    onClick={() => handleActions(SoMediaManagerAction.SORT_ACTION, null, sorter.action)}
                  >
                    {directionArrow(sorter.action)}
                    {sorter.label}
                  </button>
                </li>
              )}
            </ul>
          </FloatContext>
        }
      </div>
    </div>
  );
};
