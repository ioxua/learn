import * as m from "~/paraglide/messages"
import { setLanguageTag, isAvailableLanguageTag, sourceLanguageTag, languageTag } from "~/paraglide/runtime"
import type { AvailableLanguageTag } from "~/paraglide/runtime"

export const messages = m
export const currentLang = languageTag
export const defaultLang = sourceLanguageTag

export function updateLangFromReq(
  request: Request
) {
  const path = getPathFromRequest(request)
  const lang = getLangFromPath(path)

  // should this be a function instead? no idea...
  setLanguageTag(lang)

  return lang
}

function getPathFromRequest(request: Request) {
  const url = new URL(request.url)
  return url.pathname
}

// From https://github.com/opral/monorepo/blob/main/inlang/source-code/paraglide/paraglide-js-adapter-astro/example/src/middleware.ts
function getLangFromPath(path: string): AvailableLanguageTag {
	const [lang] = path.split("/").filter(Boolean)
	if (isAvailableLanguageTag(lang)) return lang
	return sourceLanguageTag
}
