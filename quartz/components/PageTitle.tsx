import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static/re-logo.png")
  return (
    <div class={classNames(displayClass, "page-title")}>
      <img style="aspect-ratio: 1/1; width: 30px" src={logoPath}/>
      <h2><a href={baseDir}>{title}</a></h2>
    </div>
  )
}

PageTitle.css = `
.page-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
