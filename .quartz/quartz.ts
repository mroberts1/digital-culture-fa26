import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypes } from "./quartz/plugins"
import CourseInfo from "./quartz/components/CourseInfo"

const config = await loadQuartzConfig()

// CourseInfo is a local component, not a plugin, so quartz.config.yaml cannot
// slot it: the YAML layout only honours empty position arrays, which clear a
// slot rather than fill one. loadQuartzConfig has already built a
// PageTypeDispatcher from the default layout, so swap that emitter for one
// carrying CourseInfo at the top of the right sidebar, where the graph sat.
const layout = await loadQuartzLayout()
const right = [CourseInfo(), ...(layout.defaults.right ?? [])]
layout.defaults.right = right
for (const pt of Object.values(layout.byPageType)) {
  if (pt.right) pt.right = right
}

const dispatcherIdx = config.plugins.emitters.findIndex((e) => e.name === "PageTypeDispatcher")
if (dispatcherIdx === -1) {
  throw new Error("PageTypeDispatcher emitter not found; CourseInfo cannot be slotted")
}
config.plugins.emitters[dispatcherIdx] = PageTypes.PageTypeDispatcher({
  defaults: layout.defaults,
  byPageType: layout.byPageType,
})

export default config
export { layout }
