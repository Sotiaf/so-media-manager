/**
 * Right define minimum right to help block access to action without proper right
 * 
 * @interface Right
 * 
 * @canDelete {boolean} User can delete item from media manager
 * @canEdit {boolean} User can edit item from media manager
 * @canCreate {boolean} User can create item from media manager
 * @canUpload {boolean} User can upload item to media manager
 * @canDownload {boolean} User can download item from media manager
 * 
 */
export interface Right {
  /** User can delete item from media manager */
  canDelete: boolean
  /** User can edit item from media manager */
  canEdit: boolean
  /** User can create item from media manager */
  canCreate: boolean
  /** User can upload item to media manager */
  canUpload: boolean
  /** User can download item from media manager */
  canDownload: boolean
}