import { SoMediaManagerAction } from "../enums/actions";
import { FileModel } from "./file.model"

/**
 * Sorter open the way to custom sorter in SoMediaManager
 * 
 * @interface Sorter
 * 
 * @position {number} Position help you to choose where you want to display your sorter
 * @action {string} When clicked, it's the action you will receive, like enum SoMediaManagerAction
 * @label {string} Display text
 * @comparisonFn {(a: FileModel, b: FileModel) => number} (optional) Comparison function to use between two FileModel
 * 
 */
export interface Sorter {
  /** Position help you to choose where you want to display your sorter */
  position: number
  /** When clicked, it's the action you will receive, like enum SoMediaManagerAction */
  action: string
  /** Display text */
  label: string
  /** (optional) Comparison function to use between two FileModel */
  comparisonFn?: (a: FileModel, b: FileModel, sort: SoMediaManagerAction.SORT_DIRECTION_ASC | SoMediaManagerAction.SORT_DIRECTION_DESC) => number
}