import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static/main-logo.png")
  return (
    <a href={baseDir}>
      <div class={classNames(displayClass, "page-title")}>
        <img style="margin: 0 !important" src={logoPath} placeholder={title}/>
      </div>
    </a>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  padding-block: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
