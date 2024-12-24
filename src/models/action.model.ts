/**
 * Action open the way to custom action and button in SoMediaManager
 * 
 * @interface Action
 * 
 * @position {"settings" | "header" | "context"} Position help you to choose where you want to display your action
 * @action {string} When clicked, it's the action you will receive, like enum SoMediaManagerAction
 * @icon {HTMLElement} Icon to display
 * @label {string} Display text
 * @selectionRequired {boolean} Do you're action need at least one item selected
 * @selectionType {"one" | "multiple"} How much items need to be selected
 * @selectionFileType {"file" | "folder"} Selected items must be the specific type
 * 
 */
export interface Action {
  /** Position help you to choose where you want to display your action */
  position: "setting" | "header" | "context"
  /** When clicked, it's the action you will receive, like enum SoMediaManagerAction */
  action: string
  /** Icon to display */
  icon?: JSX.Element
  /** Display text */
  label?: string
  /** Do you're action need at least one item selected */
  selectionRequired: boolean
  /** How much items need to be selected */
  selectionType?: "one" | "multiple"
  /** Selected items must be the specific type */
  selectionFileType?: "file" | "folder"
}