import { Fragment } from "react"
import { CssIcon, FileIcon, FileMusicIcon, FilePdfIcon, FileVideoIcon, FolderIcon, FontIcon, HtmlIcon, ImageIcon, VideoIcon } from "./icons"
import { FileModel } from "../models/file.model"
import dayjs from "dayjs"

interface FileProps extends React.HTMLAttributes<HTMLDivElement> {
  file: FileModel
  selected: boolean
  _onMouseUp: (e: React.MouseEvent<HTMLDivElement>, file: FileModel) => void
  index?: number
}

export const File: React.FC<FileProps> = ({ file, selected, _onMouseUp, index, ...rest }) => {
  const ItemIcon = () => {
    if (file.isDir) return <FolderIcon />
    const ext = file.ext ? file.ext : file.name.split('.').pop();
    switch (ext?.toUpperCase()) {
      case "HTML":
        return (
          <Fragment>
            <FileIcon color="terracotta" />
            <HtmlIcon className="so-mm-file-superpose" />
          </Fragment>
        )
      case "CSS":
        return (
          <Fragment>
            <FileIcon color="cyan" />
            <CssIcon className="so-mm-file-superpose" />
          </Fragment>
        )
      case "EOT":
      case "OTF":
      case "OTF":
      case "TTC":
      case "TTF":
      case "WOFF":
      case "WOFF2":
        return (
          <Fragment>
            <FileIcon />
            <FontIcon className="so-mm-file-superpose" />
          </Fragment>
        )
      case "PDF":
        return <FilePdfIcon />
      case "APNG":
      case "AVIF":
      case "GIF":
      case "WEBP":
      case "BMP":
      case "ICO":
      case "TIF":
      case "TIFF":
      case "JPG":
      case "JPEG":
      case "JPE":
      case "JIF":
      case "JFIF":
      case "PNG":
      case "SVG":
      case "XBM":
        if (file.thumbnailUrl) return <img src={file.thumbnailUrl} />
        return (
          <Fragment>
            <FileIcon color="yellow" />
            <ImageIcon className="so-mm-file-superpose" />
          </Fragment>
        )
      case "MP3":
      case "WAV":
        return <FileMusicIcon />
      case "WEBM":
      case "MP4":
      case "AVI":
        return (
          <Fragment>
            <FileIcon color="purple" />
            <VideoIcon className="so-mm-file-superpose" />
          </Fragment>
        )
      case "ZIP":
        return (
          <Fragment>
            <FileIcon color="black" />
            <span className="so-mm-file-superpose">ZIP</span>
          </Fragment>
        )
      default:
        return <FileIcon />
    }
  }

  const formatBytes = (a: number, b = 2) => {
    if (!+a) return "0 Bytes";
    const c = 0 > b ? 0 : b,
      d = Math.floor(Math.log(a) / Math.log(1024));
    return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]}`
  }

  return (
    <div
      id={file.id.toString()}
      className={"so-mm-file " + (selected ? "so-mm-file-selected" : "")}
      onMouseUp={(e) => _onMouseUp(e, file)}
      tabIndex={!isNaN(index as number) ? index : -1}
      {...rest}
    >
      <div className="so-mm-file-content">
        <div className="so-mm-file-icon">
          <ItemIcon />
        </div>
        <p className="so-mm-file-name">{file.name}</p>
        <span className="so-mm-file-date">{file.modDate ? dayjs(file.modDate).format('DD MMM YYYY, HH:mm') : ""}</span>
        <span className="so-mm-file-size">{file.size ? formatBytes(file.size) : ""}</span>
      </div>
    </div>
  );
};