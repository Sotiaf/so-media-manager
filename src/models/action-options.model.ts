import { FileModel } from "./file.model"
import { FolderModel } from "./folder.model"

export interface ActionOpts {
  item: FileModel | FolderModel | null
  filesSelected: FileModel[]
  searchValues: string | null
}