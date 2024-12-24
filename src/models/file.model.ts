import { FolderModel } from "./folder.model"

export interface FileModel extends FolderModel {
  ext: string
  modDate: Date | null //updatedDate
  size: number
  thumbnailUrl: string //previewUrl
}