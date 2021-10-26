import { handleEntityUpdate } from "./app";

import { EntityUpdate } from "./yext";

export function onEntityChanged(arg: EntityUpdate) {
  return handleEntityUpdate(arg);
}
