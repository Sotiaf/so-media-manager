import { useEffect, useState } from "react";
import { ActionOpts } from "../../models/action-options.model";
import { FileModel } from "../../models/file.model";
import { FolderModel } from "../../models/folder.model";
import { Action } from "../../models/action.model";
import { Right } from "../../models/right.model";
import { Sorter } from "../../models/sorter.model";
import { SoMediaManagerAction } from "../../enums/actions";
import { File } from "../File";
import { FloatContext } from "../FloatContext";
import { Menu } from "../Menu";
import dayjs from "dayjs";

import "./SoMediaManager.css";

interface SoMediaManagerProps {
  /* Chain Folder to display the current path "position" in gallery */
  folderChain: FolderModel[]
  /* All files in the current open folder */
  files: FileModel[]
  /* List of files we need to select at start */
  defaultSelected?: FileModel[]
  /* Default sorter at init */
  defaultSorter?: string
  /* Default sorter direction at init */
  defaultSorterDirection?: SoMediaManagerAction.SORT_DIRECTION_ASC | SoMediaManagerAction.SORT_DIRECTION_DESC
  /* Custom actions you need to add to media manager */
  actions?: Action[]
  /* Custom sorters you need to add to media manager */
  sorters?: Sorter[]
  /* Right if you have access to specific action or item */
  right?: Right
  /* Display a validation button at bottom */
  confirmButton?: boolean
  /* Function to handle all define action (even your custom action) */
  handleAction: (action: SoMediaManagerAction | string, opts: ActionOpts) => void
}

export const SoMediaManager: React.FC<SoMediaManagerProps> = ({
  files,
  folderChain,
  defaultSelected,
  defaultSorter,
  defaultSorterDirection,
  actions,
  sorters,
  right,
  confirmButton,
  handleAction
}) => {
  /*** FOLDER ***/
  const [folderPath, setFolderPath] = useState<FolderModel[]>(folderChain)
  /*** FILES ***/
  const [listFiles, setListFiles] = useState<FileModel[]>(files)
  const [filesSelected, setFilesSelected] = useState<FileModel[]>([])
  const [lastFileSelected, setLastFileSelected] = useState<FileModel>()
  /*** SEARCH ***/
  const [search, setSearch] = useState<string>("")
  /*** VIEW ***/
  const [view, setView] = useState<"list" | "grid">("list")
  /*** ORDER ***/
  const [sort, setSort] = useState<SoMediaManagerAction.SORT_NAME | SoMediaManagerAction.SORT_SIZE | SoMediaManagerAction.SORT_DATE | string>(defaultSorter ?? SoMediaManagerAction.SORT_NAME)
  const [sortDirection, setSortDirection] = useState<SoMediaManagerAction.SORT_DIRECTION_ASC | SoMediaManagerAction.SORT_DIRECTION_DESC>(defaultSorterDirection ?? SoMediaManagerAction.SORT_DIRECTION_ASC)
  /*** MOVE ***/
  const [mouseMove, setMouseMove] = useState<boolean>(false)
  const [mouseDown, setMouseDown] = useState<boolean>(false)
  const [mouseX, setMouseX] = useState<number>(0)
  const [mouseY, setMouseY] = useState<number>(0)
  const [moveFileModal, setMoveFileModal] = useState<boolean>(false)
  const [firstMove, setFirstMove] = useState<boolean>(false)
  /*** ADDED ACTIONS ***/
  const [actionsRegistered, setActionsRegistered] = useState<Action[]>(actions ?? [])
  /*** ADDED SORTERS ***/
  const defaultSorters: Sorter[] = [
    {
      label: "Trier par nom",
      action: SoMediaManagerAction.SORT_NAME,
      position: 1.5,
      comparisonFn: (a, b, sort) => sort === SoMediaManagerAction.SORT_DIRECTION_ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    },
    {
      label: "Trier par taille",
      action: SoMediaManagerAction.SORT_SIZE,
      position: 2.5,
      comparisonFn: (a, b, sort) => sort === SoMediaManagerAction.SORT_DIRECTION_ASC ? a.size - b.size : b.size - a.size
    },
    {
      label: "Trier par date",
      action: SoMediaManagerAction.SORT_DATE,
      position: 3.5,
      comparisonFn: (a, b, sort) => sort === SoMediaManagerAction.SORT_DIRECTION_ASC ? (dayjs(a.modDate).isBefore(b.modDate) ? 1 : -1) : (dayjs(b.modDate).isBefore(a.modDate) ? 1 : -1)
    }
  ]
  const [sortersRegistered, setSortersRegistered] = useState<Sorter[]>([
    ...(sorters ?? []),
    ...defaultSorters
  ])

  useEffect(() => {
    if (actions) setActionsRegistered(actions)
  }, actions)

  useEffect(() => {
    if (sorters) setSortersRegistered([
      ...(sorters ?? []),
      ...defaultSorters
    ])
  }, sorters)

  useEffect(() => {
    if (defaultSorter) setSort(defaultSorter)
  }, [defaultSorter])

  useEffect(() => {
    if (defaultSorterDirection) setSortDirection(defaultSorterDirection)
  }, [defaultSorterDirection])

  useEffect(() => {
    if ((filesSelected && filesSelected.length > 0) || !defaultSelected) return
    const filesFound: FileModel[] = []
    defaultSelected.forEach((df) => {
      const file = listFiles.find(f => f.name === df.name)
      if (file) filesFound.push(file)
    })
    setFilesSelected(filesFound)
  }, [listFiles, defaultSelected])
  useEffect(() => setListFiles([...files.sort(_handleSort)]), [files])
  useEffect(() => setFolderPath(folderChain), [folderChain])

  useEffect(() => _handleActions(SoMediaManagerAction.SEARCH), [search])
  useEffect(() => {
    setListFiles(prev => [...prev.sort(_handleSort)])
  }, [sort, sortDirection])

  const _handleSort = (a: FileModel, b: FileModel) => {
    const sorter = sortersRegistered.find(s => s.action === sort)
    if (sorter && sorter.comparisonFn) return sorter.comparisonFn(a, b, sortDirection)
    return 0;
  }

  const _handleActions = (
    action: SoMediaManagerAction | string,
    item: FileModel | FolderModel | null = null,
    sorter: SoMediaManagerAction.SORT_NAME | SoMediaManagerAction.SORT_SIZE | SoMediaManagerAction.SORT_DATE | string | null = null
  ) => {
    switch (action) {
      case SoMediaManagerAction.OPEN_FOLDER:
        setFilesSelected([])
        break;
      case SoMediaManagerAction.LIST_VIEW:
        setView("list")
        break;
      case SoMediaManagerAction.GRID_VIEW:
        setView("grid")
        break;
      case SoMediaManagerAction.SORT_ACTION:
        if (sorter) {
          setSort(sorter)
          setSortDirection(sort === sorter && sortDirection === SoMediaManagerAction.SORT_DIRECTION_ASC ? SoMediaManagerAction.SORT_DIRECTION_DESC : SoMediaManagerAction.SORT_DIRECTION_ASC)
        }
        break;
      case SoMediaManagerAction.SEARCH:
        const regex = new RegExp(search, "i")
        setListFiles([
          ...files.filter(file => file.name.match(regex))
        ])
        break;
    }
    handleAction(action, {
      item: item,
      filesSelected,
      searchValues: search
    })
  }

  const cleanMouseAction = () => {
    // Remove style from moving selection
    const elementsFile = document.getElementsByClassName("so-mm-file")
    for (let i = 0; i < elementsFile.length; i++) {
      elementsFile[i].removeAttribute("style")
    }
    const elementsFolder = document.getElementsByClassName("so-mm-folder-path")
    for (let i = 0; i < elementsFolder.length; i++) {
      elementsFolder[i].removeAttribute("style")
    }

    // Stop all action
    setMouseMove(false)
    setMouseDown(false)
    setFirstMove(false)
    setMoveFileModal(false)
  }

  const elementFromMouse = (e: React.MouseEvent) => {
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    return elements.find(e => e.classList.contains("so-mm-file") || e.classList.contains("so-mm-folder-path")) as HTMLElement
  }

  const itemFromMouse = (e: React.MouseEvent) => {
    const element = elementFromMouse(e)

    if (element && element.classList.contains("so-mm-file") && element.id) {
      return listFiles.find(f => f.id === element.id) ?? null
    } else if (element && element.classList.contains("so-mm-folder-path") && element.id) {
      const folder = folderPath.find(f => f.id === element.id) ?? null
      if (folder) return { ...folder, ext: "", modDate: null, size: 0, thumbnailUrl: "" } as FileModel
    }
    return null
  }

  const handleMouseDown = () => {
    setMouseMove(false)
    setMouseDown(true)
    setMoveFileModal(false)
  }

  const handleManagerMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    // If move selection into an other folder
    if (mouseMove) {
      const item = itemFromMouse(e)
      if (item && item.isDir) {
        _handleActions(SoMediaManagerAction.MOVE_SELECTION, item)
      }
    }

    cleanMouseAction()
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>, file: FileModel) => {
    // Double Click
    if (e.detail === 2) return handleDoubleClick(file)
    // Simple Click
    handleSimpleClick(e, file)
  }

  const handleDoubleClick = (file: FileModel) => {
    if (file.isDir) {
      _handleActions(SoMediaManagerAction.OPEN_FOLDER, file)
    } else {
      _handleActions(SoMediaManagerAction.OPEN_FILE, file)
    }
    setFilesSelected([])
    setMouseMove(false)
    setMouseDown(false)
    setFirstMove(false)
    setMoveFileModal(false)
    return
  }

  const handleSimpleClick = (e: React.MouseEvent<HTMLDivElement>, file: FileModel) => {
    const alreadySelected = isSelected(file)
    if (!e.ctrlKey && !e.shiftKey && !mouseMove) {
      setFilesSelected(alreadySelected ? [] : [file])
      setLastFileSelected(file)
    } else if (!mouseMove) {
      // CTRL + Click
      if (e.ctrlKey) {
        setFilesSelected(prev => [...prev.filter(f => f.id !== file.id), ...[file].filter(() => !alreadySelected)])
      }
      // SHIFT + Click
      if (e.shiftKey) {
        const lastIndexClicked = listFiles.findIndex(f => f.id === lastFileSelected?.id)
        const indexClicked = listFiles.findIndex(f => f.id === file.id)
        const startIndex = lastIndexClicked > indexClicked ? indexClicked : lastIndexClicked
        const endIndex = lastIndexClicked > indexClicked ? lastIndexClicked : indexClicked
        if (startIndex > -1 && endIndex > -1) {
          const filesToSelect: FileModel[] = []
          listFiles.forEach((f, i) => i >= startIndex && i <= endIndex ? filesToSelect.push(f) : undefined)
          setFilesSelected([...filesToSelect])
        }
      }
      setLastFileSelected(file)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDown && !firstMove) {
      setFirstMove(true)
      setMouseMove(true)
      setMoveFileModal(true)
      setMouseX(e.clientX)
      setMouseY(e.clientY)

      const item = itemFromMouse(e)
      if (item && !isSelected(item)) {
        setFilesSelected([item])
        setLastFileSelected(item)
      }
    }
    if (mouseDown && firstMove && filesSelected.length > 0) {
      setMouseMove(true)
      setMoveFileModal(true)
      setMouseX(e.clientX)
      setMouseY(e.clientY)

      const element = elementFromMouse(e)
      const item = itemFromMouse(e)
      const alreadySelected = item && (filesSelected.find(fs => fs.id === item?.id) || folderPath[folderPath.length - 1].id === item.id) ? true : false
      if (item && (!item.isDir || alreadySelected)) {
        element.style.cursor = "not-allowed"
      }
      if (item && item.isDir && !alreadySelected) {
        element.style.cursor = "copy"
      }
    }
  }

  const isSelected = (file: FileModel | FolderModel) => {
    return filesSelected.findIndex(f => f.id === file.id) > -1
  }

  return (
    <div
      className={`so-media-manager ${moveFileModal ? "so-mm-move-file" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleManagerMouseUp}
    >
      <Menu
        actions={actionsRegistered}
        sorters={sortersRegistered}
        right={right}
        handleActions={_handleActions}
        filesSelected={filesSelected}
        folderChain={folderPath}
        view={view}
        sort={sort}
        sortDirection={sortDirection}
        setSearch={setSearch}
      />
      <div className="so-mm-explorer">
        <div className={`so-mm-explorer-inner so-mm-explorer-view-${view}`}>
          {listFiles.map((file, index) =>
            <File
              index={index}
              key={index}
              file={file}
              selected={isSelected(file)}
              _onMouseUp={handleMouseUp}
              onMouseDown={handleMouseDown}
            />
          )}
        </div>
        {moveFileModal &&
          <FloatContext
            x={mouseX + 10}
            y={mouseY}
            open={moveFileModal}
            close={() => setMoveFileModal(false)}
            side="left"
          >
            <p>{filesSelected.length} item(s) sélectionné(s)</p>
          </FloatContext>
        }
      </div>
      {confirmButton &&
        <div className="so-mm-validation">
          <button
            type="button"
            className="so-mm-btn-validation"
            disabled={filesSelected.length === 1 && !filesSelected[0].isDir ? false : true}
            onClick={() => handleDoubleClick(filesSelected[0])}
          >
            Valider
          </button>
        </div>
      }
    </div>
  );
};
