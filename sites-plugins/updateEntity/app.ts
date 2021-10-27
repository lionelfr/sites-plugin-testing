import {
  EntityUpdate,
  updateEntity,
} from "./yext.ts";

declare var FIELD_KEY: string;

export async function handleEntityUpdate(data: EntityUpdate) {
  console.log(`     start: ${new Date().toISOString()}`);
  if (data.entityId && data.path && data.locale) {
    const result = await updateEntityUrl(data)
    console.log(`     end: ${new Date().toISOString()}`);
    return result
  } else {
    console.log(`     end: ${new Date().toISOString()}`);
    return null
  }
}

export async function updateEntityUrl(data: EntityUpdate) {
  let updateField = {"meta.language": data.locale}
  updateField[FIELD_KEY] = data.path
  let result = await updateEntity(data.entityId, updateField)
  return result
}
