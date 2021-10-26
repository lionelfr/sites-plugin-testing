import { handleEntityUpdate } from "./app.ts";

import { EntityUpdate } from "./yext.ts";

export function onEntityChanged(arg: EntityUpdate) {
  return handleEntityUpdate(arg);
}
