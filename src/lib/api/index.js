import { doPost } from "./helpers"

export const doSearch = (body) => doPost(`/search`, { body })
