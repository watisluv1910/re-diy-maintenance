import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static/main-logo.png")
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img style="aspect-ratio: 1.56/1; width: 100%" src={logoPath} placeholder={title}/>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  padding-block: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
